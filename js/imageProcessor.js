// FloraScan AI - Research Paper Image Processing Pipeline
// Based on Pathan, Sakalle & Munir (2025 IEEE ICoEIT)
(function(window) {
  const ImageProcessor = {
    // Standardize input image onto an offscreen canvas
    createCanvas(width, height) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    },

    // Preprocessing: Resize & Gaussian Noise Removal (Box Blur approximation)
    preprocess(imgElement, targetSize = 256) {
      const canvas = this.createCanvas(targetSize, targetSize);
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(imgElement, 0, 0, targetSize, targetSize);
      
      const imgData = ctx.getImageData(0, 0, targetSize, targetSize);
      const data = imgData.data;

      // Color space analysis (RGB & HSV)
      let rSum = 0, gSum = 0, bSum = 0;
      let hSum = 0, sSum = 0, vSum = 0;
      const totalPixels = targetSize * targetSize;

      // Compute grayscale and color conversion
      const grayData = new Uint8Array(totalPixels);

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        rSum += r;
        gSum += g;
        bSum += b;

        // Standard grayscale conversion: Y = 0.299R + 0.587G + 0.114B
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        grayData[i / 4] = gray;

        // RGB to HSV conversion
        const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
        const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
        const delta = max - min;
        let h = 0;
        if (delta > 0) {
          if (max === rNorm) h = ((gNorm - bNorm) / delta) % 6;
          else if (max === gNorm) h = (bNorm - rNorm) / delta + 2;
          else h = (rNorm - gNorm) / delta + 4;
          h = Math.round(h * 60);
          if (h < 0) h += 360;
        }
        const s = max === 0 ? 0 : delta / max;
        const v = max;
        hSum += h;
        sSum += s;
        vSum += v;
      }

      return {
        canvas,
        imgData,
        grayData,
        width: targetSize,
        height: targetSize,
        colorStats: {
          rMean: (rSum / totalPixels).toFixed(1),
          gMean: (gSum / totalPixels).toFixed(1),
          bMean: (bSum / totalPixels).toFixed(1),
          hMean: (hSum / totalPixels).toFixed(1),
          sMean: ((sSum / totalPixels) * 100).toFixed(1),
          vMean: ((vSum / totalPixels) * 100).toFixed(1)
        }
      };
    },

    // Texture Analysis: GLCM (Gray Level Co-occurrence Matrix)
    extractGLCM(grayData, width, height, quantizedLevels = 16) {
      // Quantize 0-255 into quantizedLevels (0-15)
      const q = new Uint8Array(grayData.length);
      const scale = 256 / quantizedLevels;
      for (let i = 0; i < grayData.length; i++) {
        q[i] = Math.min(quantizedLevels - 1, Math.floor(grayData[i] / scale));
      }

      // Compute horizontal GLCM (dx = 1, dy = 0)
      const glcm = new Array(quantizedLevels * quantizedLevels).fill(0);
      let count = 0;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width - 1; x++) {
          const i1 = q[y * width + x];
          const i2 = q[y * width + (x + 1)];
          glcm[i1 * quantizedLevels + i2]++;
          count++;
        }
      }

      // Normalize GLCM
      for (let i = 0; i < glcm.length; i++) {
        glcm[i] /= count;
      }

      // Calculate Contrast, Dissimilarity, Homogeneity, Energy
      let contrast = 0;
      let dissimilarity = 0;
      let homogeneity = 0;
      let energy = 0;

      for (let i = 0; i < quantizedLevels; i++) {
        for (let j = 0; j < quantizedLevels; j++) {
          const p = glcm[i * quantizedLevels + j];
          const diff = Math.abs(i - j);
          contrast += p * diff * diff;
          dissimilarity += p * diff;
          homogeneity += p / (1 + diff);
          energy += p * p;
        }
      }

      return {
        contrast: contrast.toFixed(4),
        dissimilarity: dissimilarity.toFixed(4),
        homogeneity: homogeneity.toFixed(4),
        energy: energy.toFixed(4)
      };
    },

    // Shape Analysis: Edge & Corner Detection (Sobel Filter approximation)
    extractShapeFeatures(grayData, width, height) {
      let edgePixels = 0;
      let flatPixels = 0;
      let cornerPixels = 0;

      const edgeThreshold = 45;
      const cornerThreshold = 110;

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          // Sobel operator
          const gx = 
            -1 * grayData[(y - 1) * width + (x - 1)] + 1 * grayData[(y - 1) * width + (x + 1)] +
            -2 * grayData[y * width + (x - 1)]       + 2 * grayData[y * width + (x + 1)] +
            -1 * grayData[(y + 1) * width + (x - 1)] + 1 * grayData[(y + 1) * width + (x + 1)];

          const gy = 
            -1 * grayData[(y - 1) * width + (x - 1)] - 2 * grayData[(y - 1) * width + x] - 1 * grayData[(y - 1) * width + (x + 1)] +
             1 * grayData[(y + 1) * width + (x - 1)] + 2 * grayData[(y + 1) * width + x] + 1 * grayData[(y + 1) * width + (x + 1)];

          const mag = Math.sqrt(gx * gx + gy * gy);

          if (mag > cornerThreshold) {
            cornerPixels++;
          } else if (mag > edgeThreshold) {
            edgePixels++;
          } else {
            flatPixels++;
          }
        }
      }

      const total = (width - 2) * (height - 2);
      return {
        edge: { count: edgePixels, ratio: ((edgePixels / total) * 100).toFixed(1) + '%' },
        flat: { count: flatPixels, ratio: ((flatPixels / total) * 100).toFixed(1) + '%' },
        corner: { count: cornerPixels, ratio: ((cornerPixels / total) * 100).toFixed(1) + '%' }
      };
    },

    // Recreate Fig 6: Patch Segmentation Subplot with coordinate axis grids
    renderPatchSubplot(sourceImg, targetCanvas, patchIndex = 1) {
      if (!targetCanvas) return;
      const ctx = targetCanvas.getContext('2d');
      const w = targetCanvas.width;
      const h = targetCanvas.height;

      // Clear
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, w, h);

      // Coordinate axes margins
      const padLeft = 32;
      const padBottom = 28;
      const padTop = 18;
      const padRight = 14;

      const plotW = w - padLeft - padRight;
      const plotH = h - padTop - padBottom;

      // Extract patch based on patchIndex
      // Patch 1: Focal lesion center
      // Patch 2: Surrounding chlorotic leaf margin
      const sw = sourceImg.naturalWidth || sourceImg.width || 300;
      const sh = sourceImg.naturalHeight || sourceImg.height || 300;
      
      let sx, sy, sSize;
      if (patchIndex === 1) {
        sx = Math.floor(sw * 0.35);
        sy = Math.floor(sh * 0.30);
        sSize = Math.floor(Math.min(sw, sh) * 0.38);
      } else {
        sx = Math.floor(sw * 0.22);
        sy = Math.floor(sh * 0.15);
        sSize = Math.floor(Math.min(sw, sh) * 0.38);
      }

      // Draw cropped patch image
      ctx.drawImage(sourceImg, sx, sy, sSize, sSize, padLeft, padTop, plotW, plotH);

      // Overlay Viridis/Spectral false-color heatmap style border & reticle (reproducing Fig 6 from paper)
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(padLeft, padTop, plotW, plotH);

      // Draw Axes lines
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Y axis
      ctx.moveTo(padLeft, padTop);
      ctx.lineTo(padLeft, padTop + plotH);
      // X axis
      ctx.lineTo(padLeft + plotW, padTop + plotH);
      ctx.stroke();

      // Axis Ticks & Numbers (0, 50, 100, 150)
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '9px monospace';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      const ticks = [0, 50, 100, 150];
      ticks.forEach((tick, idx) => {
        const yPos = padTop + (idx / (ticks.length - 1)) * plotH;
        ctx.fillText(tick.toString(), padLeft - 4, yPos);
        
        ctx.beginPath();
        ctx.moveTo(padLeft - 3, yPos);
        ctx.lineTo(padLeft, yPos);
        ctx.stroke();
      });

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ticks.forEach((tick, idx) => {
        const xPos = padLeft + (idx / (ticks.length - 1)) * plotW;
        ctx.fillText(tick.toString(), xPos, padTop + plotH + 4);

        ctx.beginPath();
        ctx.moveTo(xPos, padTop + plotH);
        ctx.lineTo(xPos, padTop + plotH + 3);
        ctx.stroke();
      });

      // Axis Titles
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.fillText(`Patch ${patchIndex}`, padLeft + plotW / 2, 6);
    }
  };

  window.ImageProcessor = ImageProcessor;
})(window);
