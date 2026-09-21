// FloraScan AI - Home View Component
(function(window) {
  const HomeView = {
    render() {
      return `
        <div class="flex flex-col w-full">
          <!-- Dynamic Hero Section -->
          <section class="relative w-full overflow-hidden px-6 lg:px-12 py-12 lg:py-20">
            <div class="absolute -top-32 -right-32 w-96 h-96 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute top-1/2 -left-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
            
            <div class="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
              <!-- Left Column: Value Proposition -->
              <div class="lg:col-span-7 flex flex-col items-start gap-6">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-diagnostic-mono text-diagnostic-mono shadow-sm">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>🌿 AI Plant Pathology Assistant • IEEE 2025 Paper Edition</span>
                </div>
                <h1 class="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
                  Detect <span class="text-primary-container">Plant Diseases</span> Before They Spread
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  Upload a photo of any crop leaf. Our calibrated Support Vector Machine (SVM) and SMO optimization model identifies foliar blights, fungal lesions, and chlorosis in under 2 seconds.
                </p>
                
                <!-- CTA Cluster -->
                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <a class="inline-flex items-center gap-3 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5" href="#scan">
                    <span class="material-symbols-outlined text-[20px]">document_scanner</span>
                    <span>Scan Leaf Now</span>
                  </a>
                  <a class="inline-flex items-center gap-2 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200" href="#quick-demo">
                    <span class="material-symbols-outlined text-[18px]">biotech</span>
                    <span>Explore Demo Diagnostic</span>
                  </a>
                  <a class="inline-flex items-center gap-2 bg-surface-container-lowest border border-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200" href="#methodology">
                    <span class="material-symbols-outlined text-[18px] text-primary">menu_book</span>
                    <span>Research Paper</span>
                  </a>
                </div>

                <!-- Floating Trust Indicator Pill -->
                <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-[0_4px_20px_-2px_rgba(24,59,31,0.06)] mt-2">
                  <span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  <span class="font-semibold text-on-surface">98.5% SVM+SMO accuracy (Table 1)</span>
                  <span class="text-outline-variant">•</span>
                  <span>50+ common crop varieties</span>
                </div>
              </div>

              <!-- Right Column: Interactive Diagnostic Visualizer -->
              <div class="lg:col-span-5 relative w-full">
                <div class="relative bg-surface-container-lowest rounded-3xl p-4 shadow-xl overflow-hidden">
                  <div class="relative w-full h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-surface-container-high group">
                    <img class="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105" alt="Tomato Leaf infected with Alternaria solani early blight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQB8tO8DT5ErNzQSkpdFMK5agDig3wN2A2YW179T2b8LOL12a8JbhWUKk-H3X0YHdcetRgGu1yR_GhXHKHBZiinxxsK3myM2Oiy64pqZ7sax9YTbXl8FfNN38w8P6GWNZkQdSVnJu0Eneas6bMmZUZjZYCAXZ3KBd5NYIxyz920ziPq6x1I4Beut9vc4CN0PhoLy9WrAVF0ZW3OSsP00RXTkRmyimww3H6-f4NLzTut4P04yBIaw7vA">
                    
                    <!-- Scan Bounding Box 1 -->
                    <div class="absolute top-[28%] left-[22%] w-24 h-24 pointer-events-none">
                      <div class="absolute inset-0 bg-tertiary/10 rounded-xl animate-pulse"></div>
                      <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tertiary"></div>
                      <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tertiary"></div>
                      <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tertiary"></div>
                      <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tertiary"></div>
                      <span class="absolute -top-6 left-0 bg-tertiary text-on-tertiary font-diagnostic-mono text-label-sm px-2 py-0.5 rounded shadow-sm">
                        Lesion 01 • 98.5%
                      </span>
                    </div>

                    <!-- Scan Bounding Box 2 -->
                    <div class="absolute top-[34%] right-[24%] w-32 h-32 pointer-events-none">
                      <div class="absolute inset-0 bg-error/10 rounded-xl"></div>
                      <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-error"></div>
                      <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-error"></div>
                      <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-error"></div>
                      <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-error"></div>
                      <span class="absolute -bottom-6 right-0 bg-error text-on-error font-diagnostic-mono text-label-sm px-2 py-0.5 rounded shadow-sm">
                        Target Spot Necrosis
                      </span>
                    </div>

                    <!-- Reticle Crosshair UI Overlay -->
                    <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-tertiary/20 pointer-events-none"></div>
                    <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-tertiary/20 pointer-events-none"></div>

                    <!-- Floating Micro Report Pill -->
                    <div class="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
                          <span class="material-symbols-outlined text-[20px]">coronavirus</span>
                        </div>
                        <div>
                          <div class="font-headline-sm text-label-md text-on-surface font-semibold">Early Blight (Alternaria)</div>
                          <div class="font-body-sm text-body-sm text-on-surface-variant">Solanum lycopersicum (Tomato)</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-diagnostic-mono text-label-sm font-semibold">
                          Triage: High
                        </div>
                        <div class="font-diagnostic-mono text-label-sm text-tertiary font-semibold mt-0.5">Confidence 98.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Minimalist Clinical Stats Strip -->
          <section class="w-full bg-surface-container-lowest py-8 px-6 lg:px-12 shadow-sm border-y border-surface-container-high">
            <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-surface-container-high">
              <div class="flex items-center gap-4 py-2 md:py-0">
                <div class="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span class="material-symbols-outlined text-2xl">query_stats</span>
                </div>
                <div>
                  <div class="font-headline-lg text-headline-md text-on-surface font-semibold tracking-tight">14,200+</div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">Scans Completed Worldwide</div>
                </div>
              </div>
              <div class="flex items-center gap-4 py-2 md:py-0 md:pl-12">
                <div class="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <span class="material-symbols-outlined text-2xl">psychology_alt</span>
                </div>
                <div>
                  <div class="font-headline-lg text-headline-md text-on-surface font-semibold tracking-tight">98.5% Accuracy</div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">SVM + SMO Feature Optimization</div>
                </div>
              </div>
              <div class="flex items-center gap-4 py-2 md:py-0 md:pl-12">
                <div class="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-tertiary shrink-0">
                  <span class="material-symbols-outlined text-2xl">install_desktop</span>
                </div>
                <div>
                  <div class="font-headline-lg text-headline-md text-on-surface font-semibold tracking-tight">Instant Browser Web</div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">Zero App Install Required</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Interactive Feature Highlights -->
          <section class="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
            <div class="flex flex-col items-center text-center mb-16">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary-container font-diagnostic-mono text-label-sm mb-3">
                CLINICAL ARCHITECTURE
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface max-w-xl">
                Precision Field Diagnostics Without Expensive Lab Rigs
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-lg mt-3">
                Designed for agronomic speed and botanical certainty under varied natural field lighting based on 2025 IEEE research.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Feature Card 1 -->
              <div class="bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div class="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-6">
                    <span class="material-symbols-outlined text-[28px]">photo_camera</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface mb-3">Instant Camera Capture</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Snap directly in the field with any smartphone or webcam. Auto-centering target guides isolate the leaf blade instantly.
                  </p>
                </div>
                <div class="mt-8 pt-6 flex items-center gap-2 text-primary font-label-md text-label-md">
                  <span class="material-symbols-outlined text-[18px]">speed</span>
                  <span>Zero cloud latency under 2s</span>
                </div>
              </div>

              <!-- Feature Card 2 -->
              <div class="bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div class="w-14 h-14 rounded-2xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-6">
                    <span class="material-symbols-outlined text-[28px]">neurology</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface mb-3">SMO Feature Selection & SVM</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Combines color analysis (RGB, HSV, LAB), texture (GLCM, LBP), and shape edge detection with Sequential Minimal Optimization for maximum hyperplane accuracy.
                  </p>
                </div>
                <div class="mt-8 pt-6 flex items-center gap-2 text-tertiary font-label-md text-label-md">
                  <span class="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Peer-reviewed IEEE 2025 Model</span>
                </div>
              </div>

              <!-- Feature Card 3 -->
              <div class="bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div class="w-14 h-14 rounded-2xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center mb-6">
                    <span class="material-symbols-outlined text-[28px]">medical_services</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface mb-3">Actionable Remedies</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Clear dosage charts, organic bio-fungicide options, and targeted chemical spray intervals delivered without confusing technical jargon.
                  </p>
                </div>
                <div class="mt-8 pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md">
                  <span class="material-symbols-outlined text-[18px]">shield_with_heart</span>
                  <span>USDA &amp; EU Bio-compliant</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Live Quick Demo Teaser Section -->
          <section class="w-full bg-surface-container-low py-16 lg:py-24 px-6 lg:px-12" id="quick-demo">
            <div class="max-w-[1280px] mx-auto">
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <div class="inline-flex items-center gap-2 font-diagnostic-mono text-label-sm text-primary font-semibold mb-2">
                    <span class="material-symbols-outlined text-[18px]">dataset</span>
                    REAL-TIME BENCHMARKS
                  </div>
                  <h2 class="font-headline-lg text-headline-lg text-on-surface">Explore Diagnostic Presets</h2>
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Inspect how FloraScan AI detects nuanced morphological differences between fungal necrotrophs, bacterial spots, and healthy foliage.
                </p>
              </div>

              <!-- Interactive Sample Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Preset 1: Early Blight -->
                <div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer" onclick="HomeView.selectPreset('tomato_early_blight')">
                  <div class="relative h-56 bg-surface-container overflow-hidden">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tomato Early Blight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlz3KCwt2Rh2fVwZjJFGjHn0zgvq9ACSBpejesqzTZYEgTlKkj7JjtUS1Fq56T9d3B-yKuzpP8ygB7Jxq0EAsGyfLkxW5iARSWOVmyHlPurYGv84v52AyNgLtpgJmeag2job_hVXW2_PYDwg-zIgBX0oB5t1nOAIZvCJZWXhrkZ5GR75fzecr4rGjSqnbopqsUSXZxsptpaugBDjDh7QIfdCSXXZohfTUNy-Ii-U2OjyzvHwy5SG8ZyQ">
                    <div class="absolute top-4 right-4 bg-error-container text-on-error-container font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold shadow-sm">
                      Pathogen Detected
                    </div>
                    <div class="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-on-surface font-diagnostic-mono text-label-sm">
                      98.5% Match
                    </div>
                  </div>
                  <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">Solanum lycopersicum</div>
                      <h4 class="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">Early Blight</h4>
                      <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        Concentric dark brown rings with chlorotic yellow halo. High risk of leaf senescence if unmanaged.
                      </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between">
                      <span class="text-error font-diagnostic-mono text-label-sm font-semibold">Action: Copper Fungicide</span>
                      <span class="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>

                <!-- Preset 2: Apple Scab -->
                <div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer" onclick="HomeView.selectPreset('apple_scab')">
                  <div class="relative h-56 bg-surface-container overflow-hidden">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Apple Scab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0gm-7S9yx9edhSqFVjb5SGoRDnVrZaLz47RczalaBzz_X0uthE7ZofjXkRK5sEeNXWn9fz2iUPbveh15n1RBil_eJ4U5Fgc1uOppSijlgnN8T4eQiNH8IdH92soFMIVyGlAI0QeWevKvc_3AD2AjNqKUwrrzgGKcr-Gx7LjjMxWj2AlzJbvAsrEMUPk06CkeQ4WoA0LlHsU_xXOfT1j0_WV37MjfLtAU0vv0dbkb6qC9DYQyq3bES5g">
                    <div class="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold shadow-sm">
                      Moderate Warning
                    </div>
                    <div class="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-on-surface font-diagnostic-mono text-label-sm">
                      94.6% Match
                    </div>
                  </div>
                  <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">Malus domestica</div>
                      <h4 class="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">Apple Scab</h4>
                      <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        Velvety dark olive lesions on upper leaf surface, causing curling and premature leaf drop.
                      </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between">
                      <span class="text-tertiary font-diagnostic-mono text-label-sm font-semibold">Action: Sulfur Dusting</span>
                      <span class="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>

                <!-- Preset 3: Healthy Maize -->
                <div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer" onclick="HomeView.selectPreset('corn_healthy')">
                  <div class="relative h-56 bg-surface-container overflow-hidden">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Healthy Maize" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjQYhG87sJNRN_CuoaL33irPU-fEaS1pq8gP_QQEuTB_sidVwfjYFtcSpOHKpsbE1F2lat8LUZ56qaX1mofdl2nWLqbnrtZOxeMVWFq3klIvA1mhg6KHgWt5mLatnnNPLZ87k7AXmOqwenXhB2dQDho6c-xVeUVphhKEvyvszw_bPQZlCEjHae_vsZqWAUmfvPY7c-WVC21VAhQusjMbGZJOZvMec9BUTKek8X8PVyinJlfpiKefwyg">
                    <div class="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold shadow-sm">
                      Optimal Health
                    </div>
                    <div class="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-on-surface font-diagnostic-mono text-label-sm">
                      99.1% Confidence
                    </div>
                  </div>
                  <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">Zea mays</div>
                      <h4 class="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">Healthy Maize</h4>
                      <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        Optimal photosynthetic density, zero chlorosis, and balanced nitrogen pigment across laminar veins.
                      </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between">
                      <span class="text-secondary font-diagnostic-mono text-label-sm font-semibold">Status: Continue Irrigation</span>
                      <span class="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Interactive Scan Workspace Secondary CTA Block -->
          <section class="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
            <div class="relative bg-gradient-to-br from-primary via-primary-container to-secondary rounded-3xl p-8 lg:p-16 text-on-primary overflow-hidden shadow-2xl">
              <div class="max-w-2xl relative z-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-diagnostic-mono text-label-sm mb-4">
                  READY IN SECONDS
                </div>
                <h2 class="font-headline-lg text-headline-lg text-on-primary mb-4 leading-tight">
                  Protect Your Harvest With Immediate Plant Intelligence
                </h2>
                <p class="font-body-lg text-body-lg text-primary-fixed-dim mb-8 max-w-xl">
                  Whether managing 500 acres of commercial legumes or tending your home greenhouse, FloraScan AI detects tissue distress early.
                </p>
                <div class="flex flex-wrap items-center gap-4">
                  <a class="inline-flex items-center gap-2 bg-surface-container-lowest text-primary hover:bg-surface-bright font-label-md text-label-md px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5" href="#scan">
                    <span class="material-symbols-outlined text-[20px]">add_a_photo</span>
                    <span>Launch Scan Workspace</span>
                  </a>
                  <a class="inline-flex items-center gap-2 text-surface-bright hover:text-white font-label-md text-label-md px-6 py-4 rounded-xl transition-colors" href="#methodology">
                    <span>Learn How SVM & SMO Works</span>
                    <span class="material-symbols-outlined text-[18px]">east</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    },

    selectPreset(presetKey) {
      const diag = window.SVMClassifier.database[presetKey];
      if (diag) {
        // Set sample image url according to preset
        let img = '';
        if (presetKey === 'tomato_early_blight') {
          img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCKW7JlY8lYaKEfoT_Q59fOXD-xuuJ7GxHI0QQa8-lT0blkF1un6MOTPiFRDfpnESj7zcdmi0Fpvg5MV3b5NeBOkUtq2r-dUmevJ42AXyj1k6WDBilPWGqXJCsAJu_P9pvMsDOu2gUKbWuHPKjRV8IOFg05Jn3bbFDvZRsREaT3Xlm7dvQY99qRyqvPwaPX-NmYf7Bq9YJCutxwgTjIHwAh9fW--HTvkDNPQ-pcONDUAqJPBEn_i1qLw';
        } else if (presetKey === 'apple_scab') {
          img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gm-7S9yx9edhSqFVjb5SGoRDnVrZaLz47RczalaBzz_X0uthE7ZofjXkRK5sEeNXWn9fz2iUPbveh15n1RBil_eJ4U5Fgc1uOppSijlgnN8T4eQiNH8IdH92soFMIVyGlAI0QeWevKvc_3AD2AjNqKUwrrzgGKcr-Gx7LjjMxWj2AlzJbvAsrEMUPk06CkeQ4WoA0LlHsU_xXOfT1j0_WV37MjfLtAU0vv0dbkb6qC9DYQyq3bES5g';
        } else {
          img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjjQYhG87sJNRN_CuoaL33irPU-fEaS1pq8gP_QQEuTB_sidVwfjYFtcSpOHKpsbE1F2lat8LUZ56qaX1mofdl2nWLqbnrtZOxeMVWFq3klIvA1mhg6KHgWt5mLatnnNPLZ87k7AXmOqwenXhB2dQDho6c-xVeUVphhKEvyvszw_bPQZlCEjHae_vsZqWAUmfvPY7c-WVC21VAhQusjMbGZJOZvMec9BUTKek8X8PVyinJlfpiKefwyg';
        }

        window.AppState.setCurrentDiagnosis({
          ...diag,
          id: 'FS-' + Math.floor(100 + Math.random() * 899),
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          imageUrl: img
        });
        window.location.hash = '#result';
      }
    }
  };

  window.HomeView = HomeView;
})(window);
