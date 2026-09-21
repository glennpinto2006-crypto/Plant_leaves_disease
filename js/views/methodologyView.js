// FloraScan AI - Research Paper & Methodology View ("How It Works")
// Directly reproducing Pathan, Sakalle & Munir (2025 IEEE ICoEIT)
(function(window) {
  const MethodologyView = {
    selectedDemoImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQB8tO8DT5ErNzQSkpdFMK5agDig3wN2A2YW179T2b8LOL12a8JbhWUKk-H3X0YHdcetRgGu1yR_GhXHKHBZiinxxsK3myM2Oiy64pqZ7sax9YTbXl8FfNN38w8P6GWNZkQdSVnJu0Eneas6bMmZUZjZYCAXZ3KBd5NYIxyz920ziPq6x1I4Beut9vc4CN0PhoLy9WrAVF0ZW3OSsP00RXTkRmyimww3H6-f4NLzTut4P04yBIaw7vA',

    render() {
      const bm = window.SVMClassifier.benchmarks;

      return `
        <div class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex flex-col gap-10">
          <!-- Paper Header & Meta Banner -->
          <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 rounded-full bg-primary-container text-on-primary font-diagnostic-mono text-label-sm font-semibold">
                IEEE ICoEIT 2025
              </span>
              <span class="text-outline-variant">•</span>
              <span class="font-diagnostic-mono text-diagnostic-mono text-on-surface-variant">
                DOI: 10.1109/ICoEIT.2025.103
              </span>
              <span class="text-outline-variant">•</span>
              <span class="font-diagnostic-mono text-diagnostic-mono text-tertiary">
                Peer-Reviewed Research Architecture
              </span>
            </div>

            <h1 class="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight font-bold">
              ${bm.paperTitle}
            </h1>

            <div class="flex flex-wrap items-center gap-6 text-body-sm text-on-surface-variant border-t border-surface-container-high pt-4">
              <div>
                <span class="font-semibold text-on-surface">Authors:</span> ${bm.authors}
              </div>
              <div>
                <span class="font-semibold text-on-surface">Institution:</span> Lakshmi Narain College of Technology University, Bhopal, MP, India
              </div>
            </div>

            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed italic bg-surface-container-low p-4 rounded-2xl">
              "Detecting plant diseases early becomes essential for maintaining agricultural output because plant diseases deeply impact farming sustainability. The research implements Support Vector Machine (SVM) as an effective machine learning method for agricultural plant leaf disease detection through image processing techniques. The classifier utilizing Support Vector Machine and feature using SMO delivers both high precision and recall performance alongside superior computational speed."
            </p>
          </div>

          <!-- Section 1: Interactive System Architecture & Flowchart (Fig 2) -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 text-primary font-diagnostic-mono text-label-sm font-semibold">
              <span class="material-symbols-outlined text-[18px]">account_tree</span>
              SECTION III • METHODOLOGY
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">
              Machine Learning Pipeline Architecture (Fig 2)
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              The flowchart outlines the sequence of stages to predict plant leaf diseases in agriculture with Support Vector Machines and Sequential Minimal Optimization (SMO) feature selection.
            </p>

            <!-- Flowchart Nodes Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
              <div class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold mb-3">
                    1
                  </div>
                  <h3 class="font-label-md text-label-md font-semibold text-on-surface mb-1">Data Set &amp; Intake</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Collection from field observations &amp; PlantVillage dataset across solanaceae, rosaceae, and healthy baselines.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-surface-container-high text-[11px] font-diagnostic-mono text-outline">
                  Stage: Input Acquisition
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold mb-3">
                    2
                  </div>
                  <h3 class="font-label-md text-label-md font-semibold text-on-surface mb-1">Preprocessing</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Image resizing, Gaussian/Median filter noise removal, and color space conversion (RGB, HSV, LAB).
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-surface-container-high text-[11px] font-diagnostic-mono text-outline">
                  Stage: Noise &amp; Norm
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold mb-3">
                    3
                  </div>
                  <h3 class="font-label-md text-label-md font-semibold text-on-surface mb-1">Feature Optimization</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    GLCM texture (contrast, energy), LBP, Sobel edge shape, and SMO subset selection (Eq 3.1).
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-surface-container-high text-[11px] font-diagnostic-mono text-outline">
                  Stage: SMO Optimization
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold mb-3">
                    4
                  </div>
                  <h3 class="font-label-md text-label-md font-semibold text-on-surface mb-1">SVM Classification</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Identifies maximum margin hyperplane dividing healthy leaves from diseased tissue: f(x) = w·x + b.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-surface-container-high text-[11px] font-diagnostic-mono text-outline">
                  Stage: Decision Boundary
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold mb-3">
                    5
                  </div>
                  <h3 class="font-label-md text-label-md font-semibold text-on-surface mb-1">Performance Analysis</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Accuracy 98.5%, Classification error 1.5%, Precision 98.9%, Recall 97.2%, F1-measure 96.5%.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-surface-container-high text-[11px] font-diagnostic-mono text-outline">
                  Stage: Verification
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Live Feature Extraction & Fig 6 Patch Subplots -->
          <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col gap-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div class="inline-flex items-center gap-1.5 text-tertiary font-diagnostic-mono text-label-sm font-semibold mb-1">
                  <span class="material-symbols-outlined text-[18px]">biotech</span>
                  FIGURE 5 &amp; 6 REPRODUCTION
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">
                  Live Patch Segmentation Subplots &amp; Feature Optimization
                </h2>
              </div>
              <div class="flex items-center gap-2">
                <button class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" onclick="MethodologyView.runLiveExtraction()">
                  <span class="material-symbols-outlined text-[16px] text-primary align-middle mr-1">refresh</span>
                  Re-run Extraction
                </button>
              </div>
            </div>

            <p class="font-body-md text-body-md text-on-surface-variant">
              In Figure 6 of the research paper, the input leaf image gets divided into smaller areas through the use of patch segmentation subplots so that the system can focus on specific disease patterns for better feature extraction. Below is a real-time client-side reproduction running on HTML5 canvas:
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <!-- Left: Original Image & Canvas Patch Subplots -->
              <div class="lg:col-span-7 flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <!-- Patch 1 Subplot Canvas -->
                  <div class="flex flex-col items-center gap-2 bg-surface-container-low p-3 rounded-2xl border border-surface-container-high">
                    <span class="font-diagnostic-mono text-label-sm text-on-surface font-semibold">Figure 6: Patch 1 Subplot</span>
                    <canvas id="patch1-canvas" width="220" height="200" class="patch-canvas-container w-full h-auto"></canvas>
                    <span class="font-diagnostic-mono text-[10px] text-on-surface-variant">X-label Image pixel (0 to 150)</span>
                  </div>

                  <!-- Patch 2 Subplot Canvas -->
                  <div class="flex flex-col items-center gap-2 bg-surface-container-low p-3 rounded-2xl border border-surface-container-high">
                    <span class="font-diagnostic-mono text-label-sm text-on-surface font-semibold">Figure 6: Patch 2 Subplot</span>
                    <canvas id="patch2-canvas" width="220" height="200" class="patch-canvas-container w-full h-auto"></canvas>
                    <span class="font-diagnostic-mono text-[10px] text-on-surface-variant">X-label Image pixel (0 to 150)</span>
                  </div>
                </div>

                <!-- Color Spaces -->
                <div class="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-2">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Color Space Decompositions (RGB, HSV, LAB)</span>
                  <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center" id="color-stats-grid">
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">R-Mean</div>
                      <div class="font-bold text-sm text-on-surface" id="r-mean">118.4</div>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">G-Mean</div>
                      <div class="font-bold text-sm text-primary" id="g-mean">142.1</div>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">B-Mean</div>
                      <div class="font-bold text-sm text-tertiary" id="b-mean">88.7</div>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">Hue (H)</div>
                      <div class="font-bold text-sm text-on-surface" id="h-mean">86.2°</div>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">Sat (S)</div>
                      <div class="font-bold text-sm text-on-surface" id="s-mean">41.8%</div>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg">
                      <div class="text-[10px] font-diagnostic-mono text-outline">Val (V)</div>
                      <div class="font-bold text-sm text-on-surface" id="v-mean">55.7%</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Fig 5 Feature Optimization Table & GLCM -->
              <div class="lg:col-span-5 flex flex-col gap-4">
                <div class="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-label-md text-on-surface font-semibold">Figure 5: Feature Optimization</span>
                    <span class="font-diagnostic-mono text-label-sm text-primary font-semibold">SMO Selected</span>
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Attributes receive optimization through removal of unessential features.
                  </p>
                  
                  <div class="overflow-x-auto">
                    <table class="w-full text-left font-body-sm text-body-sm">
                      <thead>
                        <tr class="border-b border-surface-container-high text-on-surface-variant font-diagnostic-mono text-[11px]">
                          <th class="py-1.5 px-2">Index</th>
                          <th class="py-1.5 px-2">Type</th>
                          <th class="py-1.5 px-2">Attribute</th>
                          <th class="py-1.5 px-2">Value</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-surface-container-high font-diagnostic-mono text-xs">
                        <tr>
                          <td class="py-2 px-2">0</td>
                          <td class="py-2 px-2">str 1</td>
                          <td class="py-2 px-2 font-semibold text-primary">edge</td>
                          <td class="py-2 px-2" id="val-edge">0.246 (Sobel)</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-2">1</td>
                          <td class="py-2 px-2">str 1</td>
                          <td class="py-2 px-2 font-semibold text-primary">flat</td>
                          <td class="py-2 px-2" id="val-flat">0.682 (Uniform)</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-2">2</td>
                          <td class="py-2 px-2">str 1</td>
                          <td class="py-2 px-2 font-semibold text-primary">corner</td>
                          <td class="py-2 px-2" id="val-corner">0.072 (Necrotic)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- GLCM Texture Matrix Features -->
                <div class="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-3">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">GLCM Texture Attributes</span>
                  <div class="grid grid-cols-2 gap-2 text-xs font-diagnostic-mono">
                    <div class="bg-surface-container-lowest p-2 rounded-lg flex justify-between">
                      <span class="text-on-surface-variant">Contrast:</span>
                      <span class="font-bold text-on-surface" id="glcm-contrast">1.8420</span>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg flex justify-between">
                      <span class="text-on-surface-variant">Homogeneity:</span>
                      <span class="font-bold text-on-surface" id="glcm-homo">0.8640</span>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg flex justify-between">
                      <span class="text-on-surface-variant">Dissimilarity:</span>
                      <span class="font-bold text-on-surface" id="glcm-dissim">0.6310</span>
                    </div>
                    <div class="bg-surface-container-lowest p-2 rounded-lg flex justify-between">
                      <span class="text-on-surface-variant">Energy:</span>
                      <span class="font-bold text-on-surface" id="glcm-energy">0.2180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Simulation Results & Result Comparison (Table 1 & 2, Fig 7) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Left: Table 1 & Table 2 -->
            <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col gap-6">
              <div>
                <div class="inline-flex items-center gap-1.5 text-primary font-diagnostic-mono text-label-sm font-semibold mb-1">
                  <span class="material-symbols-outlined text-[18px]">table_chart</span>
                  BENCHMARK VALIDATION
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">
                  Simulation &amp; Comparative Results
                </h2>
              </div>

              <!-- Table 1 -->
              <div>
                <div class="font-label-md text-label-md text-on-surface font-semibold mb-2">
                  TABLE 1: SIMULATION RESULT
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left font-body-sm text-body-sm border border-surface-container-high rounded-xl overflow-hidden">
                    <thead class="bg-surface-container font-diagnostic-mono text-xs">
                      <tr>
                        <th class="py-2.5 px-3">Sr. No.</th>
                        <th class="py-2.5 px-3">Parameters</th>
                        <th class="py-2.5 px-3 text-right">Values (%)</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-container-high font-diagnostic-mono text-xs">
                      <tr class="bg-secondary-container/20">
                        <td class="py-2 px-3">1</td>
                        <td class="py-2 px-3 font-semibold text-primary">Accuracy</td>
                        <td class="py-2 px-3 text-right font-bold text-primary">98.5%</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3">2</td>
                        <td class="py-2 px-3">Classification error</td>
                        <td class="py-2 px-3 text-right font-semibold text-error">1.5%</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3">3</td>
                        <td class="py-2 px-3">Precision</td>
                        <td class="py-2 px-3 text-right">98.9%</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3">4</td>
                        <td class="py-2 px-3">Recall (Sensitivity)</td>
                        <td class="py-2 px-3 text-right">97.2%</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3">5</td>
                        <td class="py-2 px-3">F-measure</td>
                        <td class="py-2 px-3 text-right">96.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Table 2 -->
              <div>
                <div class="font-label-md text-label-md text-on-surface font-semibold mb-2">
                  TABLE 2: RESULT COMPARISON
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left font-body-sm text-body-sm border border-surface-container-high rounded-xl overflow-hidden">
                    <thead class="bg-surface-container font-diagnostic-mono text-xs">
                      <tr>
                        <th class="py-2.5 px-3">Sr. No.</th>
                        <th class="py-2.5 px-3">Parameters</th>
                        <th class="py-2.5 px-3 text-center">Previous Work [1]</th>
                        <th class="py-2.5 px-3 text-right">Present Work</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-container-high font-diagnostic-mono text-xs">
                      <tr class="bg-surface-container-low">
                        <td class="py-2 px-3">2</td>
                        <td class="py-2 px-3 font-semibold">Accuracy (%)</td>
                        <td class="py-2 px-3 text-center text-tertiary">97.0%</td>
                        <td class="py-2 px-3 text-right font-bold text-primary">98.5%</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3">3</td>
                        <td class="py-2 px-3 font-semibold">Classification Error (%)</td>
                        <td class="py-2 px-3 text-center text-error">3.0%</td>
                        <td class="py-2 px-3 text-right font-bold text-primary">1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Right: Fig 7 Graphical Representation -->
            <div class="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between gap-6">
              <div>
                <div class="inline-flex items-center gap-1.5 text-primary font-diagnostic-mono text-label-sm font-semibold mb-1">
                  <span class="material-symbols-outlined text-[18px]">bar_chart</span>
                  FIGURE 7 REPRODUCTION
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Comparison Graph — Accuracy (%)
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Comparison in accuracy between Mumtaz et al. [1] and the proposed SVM + SMO technique.
                </p>
              </div>

              <!-- CSS Visual Bar Chart -->
              <div class="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-6">
                <div class="h-56 flex items-end justify-center gap-12 pt-6 pb-2 border-b border-surface-container-high relative">
                  <!-- Gridlines -->
                  <div class="absolute inset-x-0 top-0 border-b border-dashed border-outline-variant/40"></div>
                  <div class="absolute inset-x-0 top-1/4 border-b border-dashed border-outline-variant/40"></div>
                  <div class="absolute inset-x-0 top-2/4 border-b border-dashed border-outline-variant/40"></div>
                  <div class="absolute inset-x-0 top-3/4 border-b border-dashed border-outline-variant/40"></div>

                  <!-- Bar 1: Previous Work (97%) -->
                  <div class="flex flex-col items-center gap-2 z-10">
                    <span class="font-diagnostic-mono font-bold text-xs text-tertiary">97.0%</span>
                    <div class="w-16 rounded-t-xl bg-tertiary transition-all duration-1000 shadow-md" style="height: 170px;"></div>
                    <span class="font-diagnostic-mono text-[11px] text-on-surface font-medium mt-1">Previous Work [1]</span>
                  </div>

                  <!-- Bar 2: Proposed Work (98.5%) -->
                  <div class="flex flex-col items-center gap-2 z-10">
                    <span class="font-diagnostic-mono font-bold text-xs text-primary">98.5%</span>
                    <div class="w-16 rounded-t-xl bg-primary-container transition-all duration-1000 shadow-lg" style="height: 196px;"></div>
                    <span class="font-diagnostic-mono text-[11px] text-primary font-bold mt-1">Proposed Work</span>
                  </div>
                </div>

                <div class="flex items-center justify-between text-xs font-diagnostic-mono text-on-surface-variant">
                  <span>Delta: +1.5% Accuracy Gain</span>
                  <span>Error Reduction: 50%</span>
                </div>
              </div>

              <div class="pt-2">
                <a class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold transition-colors shadow-sm" href="#scan">
                  <span class="material-symbols-outlined text-[18px]">play_arrow</span>
                  <span>Test This Model on Your Leaf</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    bindEvents() {
      // Automatically load and render patch subplots
      this.runLiveExtraction();
    },

    runLiveExtraction() {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = this.selectedDemoImg;
      
      img.onload = () => {
        const patch1 = document.getElementById('patch1-canvas');
        const patch2 = document.getElementById('patch2-canvas');

        if (patch1 && patch2 && window.ImageProcessor) {
          window.ImageProcessor.renderPatchSubplot(img, patch1, 1);
          window.ImageProcessor.renderPatchSubplot(img, patch2, 2);

          const pre = window.ImageProcessor.preprocess(img, 128);
          const glcm = window.ImageProcessor.extractGLCM(pre.grayData, 128, 128);
          const shape = window.ImageProcessor.extractShapeFeatures(pre.grayData, 128, 128);

          // Update stats in UI
          const rMean = document.getElementById('r-mean');
          const gMean = document.getElementById('g-mean');
          const bMean = document.getElementById('b-mean');
          const hMean = document.getElementById('h-mean');
          const sMean = document.getElementById('s-mean');
          const vMean = document.getElementById('v-mean');

          if (rMean) rMean.textContent = pre.colorStats.rMean;
          if (gMean) gMean.textContent = pre.colorStats.gMean;
          if (bMean) bMean.textContent = pre.colorStats.bMean;
          if (hMean) hMean.textContent = pre.colorStats.hMean + '°';
          if (sMean) sMean.textContent = pre.colorStats.sMean + '%';
          if (vMean) vMean.textContent = pre.colorStats.vMean + '%';

          const cCont = document.getElementById('glcm-contrast');
          const cHomo = document.getElementById('glcm-homo');
          const cDissim = document.getElementById('glcm-dissim');
          const cEnergy = document.getElementById('glcm-energy');

          if (cCont) cCont.textContent = glcm.contrast;
          if (cHomo) cHomo.textContent = glcm.homogeneity;
          if (cDissim) cDissim.textContent = glcm.dissimilarity;
          if (cEnergy) cEnergy.textContent = glcm.energy;

          const vEdge = document.getElementById('val-edge');
          const vFlat = document.getElementById('val-flat');
          const vCorner = document.getElementById('val-corner');

          if (vEdge) vEdge.textContent = shape.edge.ratio + ' (Sobel)';
          if (vFlat) vFlat.textContent = shape.flat.ratio + ' (Uniform)';
          if (vCorner) vCorner.textContent = shape.corner.ratio + ' (Necrotic)';
        }
      };
    }
  };

  window.MethodologyView = MethodologyView;
})(window);
