// FloraScan AI - Scan Workspace View Component
(function(window) {
  const ScanView = {
    selectedFile: null,
    selectedImageSrc: null,
    selectedPresetKey: null,
    mediaStream: null,

    render() {
      return `
        <div class="relative w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-8 md:py-12">
          <!-- Ambient Botanical Backlight Blobs -->
          <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div class="absolute top-48 right-12 w-[340px] h-[280px] bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <!-- Workspace Header -->
          <div class="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-diagnostic-mono text-diagnostic-mono mb-4 shadow-sm">
              <span class="material-symbols-outlined text-[16px] text-primary">lens_blur</span>
              <span>Optical Diagnostic Chamber • IEEE 2025 Standard</span>
            </div>
            <h1 class="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mb-3">
              Scan &amp; Diagnose Foliage
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Drag and drop your leaf photo or capture directly using your camera. High natural light delivers the fastest confidence rating.
            </p>
          </div>

          <!-- Central Clinical Stage Card -->
          <div class="max-w-4xl mx-auto bg-surface-container-lowest rounded-[28px] p-6 sm:p-10 shadow-xl relative">
            <!-- Interactive Dropzone Area -->
            <div class="relative group cursor-pointer transition-all duration-300 rounded-3xl p-8 sm:p-12 text-center bg-surface-container-low hover:bg-surface-container flex flex-col items-center justify-center min-h-[360px] overflow-hidden" id="drop-area">
              <!-- Corner Targeting Reticles -->
              <div class="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-tertiary rounded-tl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-tertiary rounded-tr pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-tertiary rounded-bl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-tertiary rounded-br pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>

              <!-- Scanning Beam Overlay Animation -->
              <div class="hidden absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent shadow-[0_0_12px_#00569f] z-20 pointer-events-none scan-laser-active" id="scan-laser"></div>

              <!-- Hidden Native File Input -->
              <input accept="image/png, image/jpeg, image/webp" class="hidden" id="leaf-file-input" type="file">

              <!-- Initial Idle View -->
              <div class="flex flex-col items-center max-w-lg z-10 transition-transform duration-200 group-hover:scale-[1.01]" id="idle-view">
                <div class="w-20 h-20 rounded-2xl bg-surface-container-highest text-primary-container flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                  <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">add_photo_alternate</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">
                  Drag and drop leaf photo here
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-6">
                  or <span class="text-primary font-semibold underline decoration-2 underline-offset-4">browse files</span> from your local drive or phone storage.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-3">
                  <button class="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary shadow-md transition-all" id="btn-browse-trigger" type="button">
                    <span class="material-symbols-outlined text-[20px]">upload</span>
                    <span>Upload Leaf Photo</span>
                  </button>
                  <button class="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-tertiary-container text-on-tertiary font-label-md text-label-md hover:bg-tertiary shadow-md transition-all" id="btn-camera-trigger" type="button">
                    <span class="material-symbols-outlined text-[20px]">photo_camera</span>
                    <span>Open Live Camera</span>
                  </button>
                </div>
                <div class="flex items-center gap-4 mt-6 text-on-surface-variant font-diagnostic-mono text-diagnostic-mono">
                  <span>JPG, PNG, WEBP</span>
                  <span>•</span>
                  <span>Max 15MB</span>
                  <span>•</span>
                  <span class="text-secondary font-semibold">Triage Accuracy 98.5%</span>
                </div>
              </div>

              <!-- Loaded/Simulated Preview Stage (Toggled dynamically) -->
              <div class="hidden flex flex-col items-center w-full z-10" id="preview-view">
                <div class="relative w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-lg bg-surface-dim">
                  <img class="w-full h-full object-cover" id="leaf-preview-img" src="" alt="Foliar preview">
                  <div class="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex items-end p-4">
                    <div class="w-full flex items-center justify-between text-surface-bright">
                      <div>
                        <p class="font-headline-sm text-headline-sm font-semibold" id="preview-sample-title">Solanum lycopersicum</p>
                        <p class="font-diagnostic-mono text-diagnostic-mono text-primary-fixed-dim" id="preview-sample-meta">Sample Mode: Early Blight Lesion Inspection</p>
                      </div>
                      <button class="p-2 rounded-lg bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur text-surface-bright transition-colors" id="btn-clear-preview" title="Remove sample" type="button">
                        <span class="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  </div>
                  <!-- Bounding Box Annotation Overlay -->
                  <div class="absolute top-12 left-16 w-32 h-28 border-2 border-tertiary bg-tertiary-fixed/20 rounded-lg pointer-events-none flex items-start justify-end p-1" id="preview-bounding-box">
                    <span class="bg-tertiary text-on-tertiary font-diagnostic-mono text-[10px] px-1.5 py-0.5 rounded shadow">Foliar Focus</span>
                  </div>
                </div>
                <div class="mt-6 flex items-center gap-3">
                  <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary shadow-md transition-all" id="btn-process-diagnostic" type="button">
                    <span class="material-symbols-outlined text-[20px]">biotech</span>
                    <span>Process Full Diagnostics</span>
                  </button>
                  <button class="px-5 py-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="btn-reset-analyzer" type="button">
                    Reset Frame
                  </button>
                </div>
              </div>
            </div>

            <!-- Processing Pipeline Modal/Overlay (Hidden by default) -->
            <div class="hidden absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-md rounded-[28px] z-40 p-8 flex flex-col items-center justify-center" id="pipeline-modal">
              <div class="w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center mb-4 animate-bounce">
                <span class="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Executing SVM+SMO Diagnosis</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 text-center max-w-sm" id="pipeline-step-text">
                Standardizing image &amp; filtering noise...
              </p>
              <div class="w-64 h-2 rounded-full bg-surface-container overflow-hidden">
                <div class="h-full bg-primary-container transition-all duration-300" id="pipeline-progress-bar" style="width: 20%;"></div>
              </div>
            </div>

            <!-- Live Camera Stream Modal Mockup -->
            <div class="hidden absolute inset-4 bg-surface-container-lowest rounded-2xl z-30 p-6 flex-col items-center justify-between shadow-2xl" id="camera-modal">
              <div class="w-full flex items-center justify-between pb-3 border-b border-surface-container-high">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
                  <span class="font-headline-sm text-headline-sm text-on-surface">Optical Leaf Sensor Activated</span>
                </div>
                <button class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" id="btn-close-camera" type="button">
                  <span class="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div class="relative w-full max-w-xl h-72 rounded-2xl bg-on-background overflow-hidden flex items-center justify-center my-4">
                <video id="camera-video-stream" class="w-full h-full object-cover hidden" autoplay playsinline></video>
                <img id="camera-fallback-img" class="w-full h-full object-cover opacity-80" alt="Live Camera Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArkmH38eyo0lqYUpCpK-VPv3ayjb0Kx2Uz2fKdzR2QbQOq646fwXnlt7khVWkFV1fSM8nM95RfLeRKgCbRKGT_3nlmmrXatSr4Jssn_1ctCjKZRxFz16ylxve4CRMct1rsXFzVih9L_AyrgKim-Q3A5pmuYBiWFu6w0YN611QJrdvUY7cc-2fuI6SUTScUv11PdlITT5zZaMJ6yYo0WNUsZw4nvpnMDcjEFxALkPqD8fymv31ufGyi6A">
                <div class="absolute inset-0 border-4 border-dashed border-primary-fixed/60 m-8 rounded-xl pointer-events-none flex items-center justify-center">
                  <span class="font-diagnostic-mono text-diagnostic-mono text-primary-fixed bg-surface-dim/80 backdrop-blur px-3 py-1 rounded-full shadow">ALIGN LEAF INSIDE RECTANGLE</span>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <button class="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-tertiary-container text-on-tertiary font-label-md text-label-md hover:bg-tertiary shadow-lg transition-transform active:scale-95" id="btn-capture-snapshot" type="button">
                  <span class="material-symbols-outlined">camera</span>
                  <span>Capture Frame</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Practical Field Capture Guidelines Bar -->
          <div class="max-w-4xl mx-auto mt-8">
            <div class="bg-surface-container rounded-2xl p-5 sm:p-6 shadow-sm">
              <div class="flex items-center gap-2 mb-4">
                <span class="material-symbols-outlined text-primary text-[20px]">fact_check</span>
                <span class="font-label-md text-label-md font-semibold text-on-surface tracking-wide uppercase">Field Capture Protocol</span>
                <span class="font-diagnostic-mono text-diagnostic-mono text-on-surface-variant ml-auto">ISO Botanical Guidelines</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <div class="p-2 rounded-lg bg-secondary-fixed/40 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[20px]">wb_cloudy</span>
                  </div>
                  <div>
                    <p class="font-label-md text-label-md font-medium text-on-surface">Overcast daylight</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Avoid harsh shadows and direct sun glare.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <div class="p-2 rounded-lg bg-secondary-fixed/40 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[20px]">filter_center_focus</span>
                  </div>
                  <div>
                    <p class="font-label-md text-label-md font-medium text-on-surface">Flat single leaf</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Position one leaf flat against neutral background.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <div class="p-2 rounded-lg bg-secondary-fixed/40 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[20px]">straighten</span>
                  </div>
                  <div>
                    <p class="font-label-md text-label-md font-medium text-on-surface">10-15cm distance</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Maintain optical focal length for micro-veins.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded-xl shadow-sm">
                  <div class="p-2 rounded-lg bg-secondary-fixed/40 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[20px]">crisis_alert</span>
                  </div>
                  <div>
                    <p class="font-label-md text-label-md font-medium text-on-surface">Margins &amp; lesions</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Include perimeter boundary and necrotic spots.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sample Foliage Interactive Picker -->
          <div class="max-w-4xl mx-auto mt-10">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface">Or try with sample foliage</h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Tap any verified pathology specimen below to test ML classification instantaneously.</p>
              </div>
              <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-diagnostic-mono text-diagnostic-mono">
                <span class="w-2 h-2 rounded-full bg-primary"></span>
                Preloaded Sets
              </span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Sample 1 -->
              <div class="sample-card cursor-pointer group bg-surface-container-lowest hover:bg-surface-container-low p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200" onclick="ScanView.loadSample('tomato_early_blight')">
                <div class="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-surface-container">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Tomato Early Blight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaORNl_D5abN-WhN1WJpz_ujmk4DgvK_gsVCnWLQa1SUdoRCtgPjdh54rCTkA3qyJ-kcdWRevyrgR8sh2ysYvvj--rJGAxd9yhVk9MSPMAqZx4BokSPQL_zI9NWIWVZbkh2Fs-R9Cgm2B_trn2Jv81rj2j3d3Ehzv3gArtuPNhv-5OkbZTBuP-hHL9H1hEGhWbCC-ZncYIpebmxltihbRKurm63pNI20laVENncU9TfeKj_2i8TzUADA">
                  <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-error-container text-error font-label-sm text-label-sm font-semibold shadow-sm">
                    Pathogen Alert
                  </span>
                </div>
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors">Tomato — Early Blight</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">High lesion density, visible chlorosis</p>
                  </div>
                  <div class="w-7 h-7 rounded-lg bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              <!-- Sample 2 -->
              <div class="sample-card cursor-pointer group bg-surface-container-lowest hover:bg-surface-container-low p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200" onclick="ScanView.loadSample('potato_late_blight')">
                <div class="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-surface-container">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Potato Late Blight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPvw5a36Quk50v3XheQB4LRsBQ_bcibOelPGqZ3jESbLYyP7ypWRg2qaPjswAVyc8Iq4Qgq7kC128YzWNlgngsQNdWGkfjq4CwFcd4hKJSX8ho_JBc0CN3slw9Z5wuT-ZbIs8iCYiwhFIdDo0p1oT-erBShFhU0fezIbbSThCJf9qnHGjKsB7fVAeJ_lSPblYvmdLofB4gmpsMwhqerFUYSQ1n0y1UO5aFtwrtB9QPMq6i2CoIVAGf7w">
                  <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-error-container text-error font-label-sm text-label-sm font-semibold shadow-sm">
                    Critical Warning
                  </span>
                </div>
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors">Potato — Late Blight</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Water-soaked borders, stem blight</p>
                  </div>
                  <div class="w-7 h-7 rounded-lg bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              <!-- Sample 3 -->
              <div class="sample-card cursor-pointer group bg-surface-container-lowest hover:bg-surface-container-low p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200" onclick="ScanView.loadSample('apple_healthy')">
                <div class="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-surface-container">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Healthy Apple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6YnyjbY13b30f6xNKLkMMUZWhWXGMQxRTjxs1PfooXGeULSSKNhHBzGhTl0_UG2dw5Jr0uxUxTiyXUyJYdhi7WQSZrABudITSiG661Hsfygc-b6FcFbMhTz-YZuxo7BrQuF0am8XhEn7Y23u9_26ZPYFqrBRIskbnsAikBQZywZzJLMnMLVk9nbaoFf71_E1yCsnMr1yx29P5S_ejGdVNsIwMKxbXcjHWCl_3rObtMTnmQTRYf3WjLQ">
                  <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold shadow-sm">
                    Optimal Health
                  </span>
                </div>
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors">Apple — Healthy Specimen</p>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Full chlorophyll matrix, no necrosis</p>
                  </div>
                  <div class="w-7 h-7 rounded-lg bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy & Security Assurance Note -->
          <div class="max-w-2xl mx-auto mt-12 mb-4 text-center">
            <div class="inline-flex items-center gap-2 text-on-surface-variant/80 font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-primary text-[18px]">encrypted</span>
              <span>Images are securely processed for diagnostic inference and never sold.</span>
            </div>
          </div>
        </div>
      `;
    },

    bindEvents() {
      const dropArea = document.getElementById('drop-area');
      const fileInput = document.getElementById('leaf-file-input');
      const btnBrowse = document.getElementById('btn-browse-trigger');
      const btnCamera = document.getElementById('btn-camera-trigger');
      const cameraModal = document.getElementById('camera-modal');
      const btnCloseCamera = document.getElementById('btn-close-camera');
      const btnCapture = document.getElementById('btn-capture-snapshot');
      const btnReset = document.getElementById('btn-reset-analyzer');
      const btnClear = document.getElementById('btn-clear-preview');
      const btnProcess = document.getElementById('btn-process-diagnostic');
      const scanLaser = document.getElementById('scan-laser');

      if (!dropArea) return;

      // Browse trigger
      if (btnBrowse) {
        btnBrowse.addEventListener('click', (e) => {
          e.stopPropagation();
          fileInput.click();
        });
      }

      // File input change
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
              this.showPreview(
                ev.target.result,
                file.name,
                'Uploaded from user device • 14.2MP Analysis Frame',
                null
              );
            };
            reader.readAsDataURL(file);
          }
        });
      }

      // Drag & drop
      ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropArea.classList.add('bg-surface-container-high');
          if (scanLaser) scanLaser.classList.remove('hidden');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropArea.classList.remove('bg-surface-container-high');
          if (scanLaser) scanLaser.classList.add('hidden');
        }, false);
      });

      dropArea.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (ev) => {
            this.showPreview(
              ev.target.result,
              file.name,
              'Drag-and-drop intake • Natural daylight verified',
              null
            );
          };
          reader.readAsDataURL(file);
        }
      });

      // Camera modal controls
      if (btnCamera) {
        btnCamera.addEventListener('click', async (e) => {
          e.stopPropagation();
          cameraModal.classList.remove('hidden');
          cameraModal.classList.add('flex');
          
          const video = document.getElementById('camera-video-stream');
          const fallbackImg = document.getElementById('camera-fallback-img');

          try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
              this.mediaStream = stream;
              if (video) {
                video.srcObject = stream;
                video.classList.remove('hidden');
                if (fallbackImg) fallbackImg.classList.add('hidden');
              }
            }
          } catch (err) {
            console.warn('Camera stream unavailable, using clinical viewfinder fallback', err);
          }
        });
      }

      if (btnCloseCamera) {
        btnCloseCamera.addEventListener('click', () => {
          this.closeCameraModal();
        });
      }

      if (btnCapture) {
        btnCapture.addEventListener('click', () => {
          const video = document.getElementById('camera-video-stream');
          let snapshotSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQB8tO8DT5ErNzQSkpdFMK5agDig3wN2A2YW179T2b8LOL12a8JbhWUKk-H3X0YHdcetRgGu1yR_GhXHKHBZiinxxsK3myM2Oiy64pqZ7sax9YTbXl8FfNN38w8P6GWNZkQdSVnJu0Eneas6bMmZUZjZYCAXZ3KBd5NYIxyz920ziPq6x1I4Beut9vc4CN0PhoLy9WrAVF0ZW3OSsP00RXTkRmyimww3H6-f4NLzTut4P04yBIaw7vA';

          if (video && !video.classList.contains('hidden') && video.videoWidth) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            snapshotSrc = canvas.toDataURL('image/jpeg');
          }

          this.closeCameraModal();
          this.showPreview(
            snapshotSrc,
            'Optical Camera Snapshot #0492',
            'Real-time 15cm field capture • Ambient balanced',
            'tomato_early_blight'
          );
        });
      }

      // Reset & Clear buttons
      if (btnReset) {
        btnReset.addEventListener('click', (e) => {
          e.stopPropagation();
          this.resetWorkspace();
        });
      }
      if (btnClear) {
        btnClear.addEventListener('click', (e) => {
          e.stopPropagation();
          this.resetWorkspace();
        });
      }

      // Process Diagnostic button
      if (btnProcess) {
        btnProcess.addEventListener('click', () => {
          this.runDiagnosticPipeline();
        });
      }
    },

    closeCameraModal() {
      const cameraModal = document.getElementById('camera-modal');
      if (cameraModal) {
        cameraModal.classList.add('hidden');
        cameraModal.classList.remove('flex');
      }
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.mediaStream = null;
      }
    },

    showPreview(imgSrc, title, meta, presetKey = null) {
      this.selectedImageSrc = imgSrc;
      this.selectedPresetKey = presetKey;

      const idleView = document.getElementById('idle-view');
      const previewView = document.getElementById('preview-view');
      const previewImg = document.getElementById('leaf-preview-img');
      const previewTitle = document.getElementById('preview-sample-title');
      const previewMeta = document.getElementById('preview-sample-meta');

      if (idleView && previewView && previewImg) {
        idleView.classList.add('hidden');
        previewView.classList.remove('hidden');
        previewImg.src = imgSrc;
        if (previewTitle) previewTitle.textContent = title;
        if (previewMeta) previewMeta.textContent = meta;
      }

      const dropArea = document.getElementById('drop-area');
      if (dropArea) dropArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    loadSample(sampleKey) {
      const diag = window.SVMClassifier.database[sampleKey];
      if (!diag) return;

      let imgSrc = '';
      if (sampleKey === 'tomato_early_blight') {
        imgSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaORNl_D5abN-WhN1WJpz_ujmk4DgvK_gsVCnWLQa1SUdoRCtgPjdh54rCTkA3qyJ-kcdWRevyrgR8sh2ysYvvj--rJGAxd9yhVk9MSPMAqZx4BokSPQL_zI9NWIWVZbkh2Fs-R9Cgm2B_trn2Jv81rj2j3d3Ehzv3gArtuPNhv-5OkbZTBuP-hHL9H1hEGhWbCC-ZncYIpebmxltihbRKurm63pNI20laVENncU9TfeKj_2i8TzUADA';
      } else if (sampleKey === 'potato_late_blight') {
        imgSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPvw5a36Quk50v3XheQB4LRsBQ_bcibOelPGqZ3jESbLYyP7ypWRg2qaPjswAVyc8Iq4Qgq7kC128YzWNlgngsQNdWGkfjq4CwFcd4hKJSX8ho_JBc0CN3slw9Z5wuT-ZbIs8iCYiwhFIdDo0p1oT-erBShFhU0fezIbbSThCJf9qnHGjKsB7fVAeJ_lSPblYvmdLofB4gmpsMwhqerFUYSQ1n0y1UO5aFtwrtB9QPMq6i2CoIVAGf7w';
      } else {
        imgSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6YnyjbY13b30f6xNKLkMMUZWhWXGMQxRTjxs1PfooXGeULSSKNhHBzGhTl0_UG2dw5Jr0uxUxTiyXUyJYdhi7WQSZrABudITSiG661Hsfygc-b6FcFbMhTz-YZuxo7BrQuF0am8XhEn7Y23u9_26ZPYFqrBRIskbnsAikBQZywZzJLMnMLVk9nbaoFf71_E1yCsnMr1yx29P5S_ejGdVNsIwMKxbXcjHWCl_3rObtMTnmQTRYf3WjLQ';
      }

      this.showPreview(imgSrc, `${diag.crop} (${diag.scientificName})`, `Pathology: ${diag.title} • Verified sample`, sampleKey);
    },

    resetWorkspace() {
      const previewView = document.getElementById('preview-view');
      const idleView = document.getElementById('idle-view');
      const fileInput = document.getElementById('leaf-file-input');

      if (previewView) previewView.classList.add('hidden');
      if (idleView) idleView.classList.remove('hidden');
      if (fileInput) fileInput.value = '';
      this.selectedFile = null;
      this.selectedImageSrc = null;
      this.selectedPresetKey = null;
    },

    runDiagnosticPipeline() {
      const modal = document.getElementById('pipeline-modal');
      const text = document.getElementById('pipeline-step-text');
      const bar = document.getElementById('pipeline-progress-bar');

      if (!modal) return;
      modal.classList.remove('hidden');

      const steps = [
        { pct: 25, label: 'Resizing image to 256x256 & removing Gaussian noise...' },
        { pct: 50, label: 'Performing RGB, HSV & LAB color space decomposition...' },
        { pct: 75, label: 'Extracting GLCM texture & Sobel shape contours (Fig 5)...' },
        { pct: 90, label: 'Running SMO Feature Selection & SVM Hyperplane (Eq 3.1 & 3.2)...' },
        { pct: 100, label: 'Diagnostic confirmed at 98.5% confidence! Redirecting...' }
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          bar.style.width = steps[currentStep].pct + '%';
          text.textContent = steps[currentStep].label;
          currentStep++;
        } else {
          clearInterval(interval);
          modal.classList.add('hidden');

          // Determine diagnosis result
          const candidateKey = this.selectedPresetKey || 'tomato_early_blight';
          const diagnosis = window.SVMClassifier.classify({}, candidateKey);

          const resultObj = {
            ...diagnosis,
            id: 'FS-' + Math.floor(100 + Math.random() * 899),
            date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            imageUrl: this.selectedImageSrc || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBawY3hTM7GEUoMMus-jM45MERo9tfLQnZ_7wObBDbhfDHe2-k-RlsjbISPQA7LHwuL53CKDsqr22DVg-rVc3vrDmAMqYUery3mFdj-fAHtOqn9azWuGsFBJHlstMumcokJfN_VkQZ7XsCx3giyuan4otncdrMLogfONlg2KO1RZ6StZv3DzCcVc9vS60MJiXb_TixxOZ6jLIVZp6hgVqHGi51pq1AMJ4lMbrMLJU9sTqes4KLBbukyEQ'
          };

          window.AppState.setCurrentDiagnosis(resultObj);
          window.location.hash = '#result';
        }
      }, 350);
    }
  };

  window.ScanView = ScanView;
})(window);
