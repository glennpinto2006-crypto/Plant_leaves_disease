// FloraScan AI - Diagnostic Result View Component
(function(window) {
  const ResultView = {
    render() {
      const diag = window.AppState.currentDiagnosis || window.SVMClassifier.database['tomato_early_blight'];
      const isDiseased = diag.isDiseased;
      const confidence = diag.confidence || 98.5;
      const imageUrl = diag.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBawY3hTM7GEUoMMus-jM45MERo9tfLQnZ_7wObBDbhfDHe2-k-RlsjbISPQA7LHwuL53CKDsqr22DVg-rVc3vrDmAMqYUery3mFdj-fAHtOqn9azWuGsFBJHlstMumcokJfN_VkQZ7XsCx3giyuan4otncdrMLogfONlg2KO1RZ6StZv3DzCcVc9vS60MJiXb_TixxOZ6jLIVZp6hgVqHGi51pq1AMJ4lMbrMLJU9sTqes4KLBbukyEQ';

      return `
        <div class="flex flex-col w-full pb-16">
          <!-- Top Context Header & Metadata Bar -->
          <section class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 pt-6 pb-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex flex-wrap items-center gap-3">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-diagnostic-mono text-diagnostic-mono">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Specimen ID: ${diag.id || 'FS-882'}
                </span>
                <span class="text-outline-variant">•</span>
                <div class="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                  <span class="material-symbols-outlined text-[18px]">schedule</span>
                  <span>${diag.date || 'Today, 10:42 AM'}</span>
                </div>
                <span class="text-outline-variant">•</span>
                <div class="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                  <span class="material-symbols-outlined text-[18px] text-primary">potted_plant</span>
                  <span class="italic font-semibold">${diag.scientificName || 'Solanum lycopersicum'}</span>
                  <span class="text-outline">(${diag.crop || 'Tomato'})</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button class="px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm transition-colors flex items-center gap-1.5" id="btn-share-link" onclick="ResultView.copyShareLink()">
                  <span class="material-symbols-outlined text-[16px]">share</span>
                  <span id="share-btn-text">Share Report</span>
                </button>
              </div>
            </div>
          </section>

          <!-- Top Alert Banner -->
          <section class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 pb-6">
            <div class="w-full rounded-2xl ${isDiseased ? 'bg-error-container/70' : 'bg-secondary-container/60'} shadow-sm p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-start sm:items-center gap-3">
                <div class="w-10 h-10 rounded-xl ${isDiseased ? 'bg-error/10 text-error' : 'bg-secondary/10 text-secondary'} flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">${isDiseased ? 'warning' : 'verified'}</span>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="${isDiseased ? 'text-error' : 'text-secondary'} font-headline-sm text-headline-sm tracking-tight">
                      ${isDiseased ? 'Disease Detected — High Priority Action Advised' : 'Optimal Foliar Health — Zero Pathogens Detected'}
                    </span>
                    <span class="hidden md:inline-block px-2 py-0.5 rounded-md ${isDiseased ? 'bg-error text-on-error' : 'bg-secondary text-on-secondary'} font-label-sm text-label-sm uppercase">
                      ${diag.severity || 'Severity 3/4'}
                    </span>
                  </div>
                  <p class="text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                    ${isDiseased ? 'Pathological symptoms match standard Early Blight morphology with risk of foliar spore transmission under humid canopy conditions.' : 'Leaf shows pristine photosynthetic cellular matrix and balanced laminar nutrition.'}
                  </p>
                </div>
              </div>
              <a class="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl ${isDiseased ? 'bg-error text-on-error' : 'bg-secondary text-on-secondary'} font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm" href="#treatment-section">
                Jump to Treatment
                <span class="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
          </section>

          <!-- Main Diagnostic 60/40 Grid -->
          <section class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 pb-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <!-- Left Column: Visual Pathology Reticle Pane (7 cols / ~58%) -->
              <div class="lg:col-span-7 flex flex-col gap-4">
                <div class="bg-surface-container-lowest rounded-3xl shadow-sm p-5 flex flex-col gap-4 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                      <span class="font-label-md text-label-md text-on-surface font-semibold">Micro-Pathology Viewfinder</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-colors flex items-center gap-1" id="toggle-boxes-btn" onclick="ResultView.toggleBoundingBoxes()">
                        <span class="material-symbols-outlined text-[16px]">layers</span>
                        <span id="box-btn-label">Hide AI Mask</span>
                      </button>
                      <button class="p-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" onclick="ResultView.toggleZoomModal(true)" title="Fullscreen high-resolution view">
                        <span class="material-symbols-outlined text-[18px]">fullscreen</span>
                      </button>
                    </div>
                  </div>

                  <!-- Interactive Visual Inspection Container -->
                  <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high select-none flex items-center justify-center group">
                    <img class="w-full h-full object-cover" id="diagnostic-image" src="${imageUrl}" alt="Analyzed leaf specimen">

                    <!-- AI Bounding Reticle Overlays -->
                    <div class="absolute inset-0 pointer-events-none transition-opacity duration-300" id="ai-annotations">
                      ${isDiseased ? `
                        <!-- Lesion 1 -->
                        <div class="absolute top-[34%] left-[38%] w-[26%] h-[32%] rounded-xl shadow-[0_0_0_1.5px_#1976D2] bg-tertiary-container/10 flex flex-col justify-between p-1.5">
                          <div class="self-start px-2 py-0.5 rounded bg-tertiary text-on-primary font-diagnostic-mono text-[10px] tracking-wide shadow-sm flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-surface-bright"></span>
                            Lesion Core [P1: 98.5%]
                          </div>
                          <div class="self-end px-1.5 py-0.5 rounded bg-surface-container-lowest/90 text-tertiary font-diagnostic-mono text-[9px] shadow-sm">
                            Ø 14.8 mm
                          </div>
                        </div>

                        <!-- Lesion 2 -->
                        <div class="absolute top-[18%] left-[23%] w-[19%] h-[25%] rounded-xl shadow-[0_0_0_1.5px_#1976D2] bg-tertiary-container/10 p-1 flex items-start">
                          <div class="px-1.5 py-0.5 rounded bg-tertiary text-on-primary font-diagnostic-mono text-[10px] shadow-sm">
                            Halo [P2: 96.2%]
                          </div>
                        </div>

                        <!-- Lesion 3 -->
                        <div class="absolute top-[35%] right-[20%] w-[17%] h-[24%] rounded-xl shadow-[0_0_0_1.5px_#1976D2] bg-tertiary-container/10 p-1 flex items-end justify-end">
                          <div class="px-1.5 py-0.5 rounded bg-tertiary text-on-primary font-diagnostic-mono text-[10px] shadow-sm">
                            L3 [91.4%]
                          </div>
                        </div>
                      ` : `
                        <!-- Healthy Reticle Grid -->
                        <div class="absolute top-[25%] left-[30%] w-[40%] h-[50%] rounded-2xl border-2 border-dashed border-secondary bg-secondary/10 flex items-center justify-center p-2">
                          <span class="bg-secondary text-on-secondary font-diagnostic-mono text-label-sm px-3 py-1 rounded-full shadow">Healthy Cuticle • 99.8%</span>
                        </div>
                      `}
                      <!-- Real-time optical reticle crosshairs -->
                      <div class="absolute inset-x-0 top-1/2 h-px bg-tertiary/20"></div>
                      <div class="absolute inset-y-0 left-1/2 w-px bg-tertiary/20"></div>
                    </div>

                    <!-- Bottom Floating Quick-Switch Controls -->
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto bg-surface-container-lowest/90 backdrop-blur-md px-3 py-2 rounded-xl text-on-surface shadow-md">
                      <span class="font-diagnostic-mono text-diagnostic-mono text-on-surface-variant flex items-center gap-1">
                        <span class="material-symbols-outlined text-tertiary text-[16px]">center_focus_strong</span>
                        ${isDiseased ? '4 Active Target Lesions' : 'Uniform Laminar Surface'}
                      </span>
                      <span class="font-label-sm text-label-sm ${isDiseased ? 'text-error' : 'text-secondary'} font-semibold">
                        Necrosis Area: ${diag.foliarSpread || '18.2%'}
                      </span>
                    </div>
                  </div>

                  <!-- Specimen & Crop Metric Badges -->
                  <div class="grid grid-cols-3 gap-3 pt-1">
                    <div class="rounded-xl bg-surface-container-low p-3 flex flex-col gap-1">
                      <span class="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px]">psychiatry</span>
                        Host Crop
                      </span>
                      <span class="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold">${diag.crop || 'Tomato'}</span>
                    </div>
                    <div class="rounded-xl bg-surface-container-low p-3 flex flex-col gap-1">
                      <span class="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px]">cloud_download</span>
                        Phenology Stage
                      </span>
                      <span class="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold">Early Fruiting</span>
                    </div>
                    <div class="rounded-xl bg-surface-container-low p-3 flex flex-col gap-1">
                      <span class="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px]">grid_goldenratio</span>
                        Foliar Spread
                      </span>
                      <span class="font-headline-sm text-headline-sm ${isDiseased ? 'text-error' : 'text-secondary'} text-[15px] font-semibold">${diag.foliarSpread || '18.2%'}</span>
                    </div>
                  </div>

                  <!-- Comparative Healthy Reference Thumbnail Strip -->
                  <div class="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-xl bg-surface-container-high overflow-hidden shrink-0">
                        <img class="w-full h-full object-cover" alt="Healthy reference" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoi4a2028SbPe7gDuCYRZmmLSK6E4dRqFtzi938hIFRgjBGOJEjfpAbd8oevCLKF2bcVr6jIhx4xk7TxMefEYjRbnl4l18A4xDPNr_IHikVI-oHSP543b5E6yhSwNo_yvOwgW5-Znk7DfIdpZhN3Z-B90pE5mwmR0NjpKEfzyW1bSVbaER1cBCCBHZr4AZAK0oweWurTxVyUajY6LqqaDLoIN1FXdwbF3yi1aXHSqgUbWZUtJJfj5Apg">
                      </div>
                      <div>
                        <p class="font-label-md text-label-md text-on-surface font-semibold">Baseline Comparison</p>
                        <p class="font-body-sm text-body-sm text-on-surface-variant">Optimal ${diag.scientificName || 'Crop'} chlorophyll: 98%</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full ${isDiseased ? 'bg-error-container text-error' : 'bg-secondary-container text-on-secondary-container'} font-diagnostic-mono text-diagnostic-mono font-semibold">
                      ${isDiseased ? '-42.6% Delta' : 'Optimal Baseline'}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right Column: AI Confidence & Diagnosis Details (5 cols / ~42%) -->
              <div class="lg:col-span-5 flex flex-col gap-5">
                <div class="bg-surface-container-lowest rounded-3xl shadow-sm p-6 flex flex-col gap-6">
                  <!-- Diagnosis Name Card -->
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2.5 py-1 rounded-full ${isDiseased ? 'bg-error-container text-error' : 'bg-secondary-container text-secondary'} font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        ${isDiseased ? 'Fungal Pathogen' : 'Healthy Foliage'}
                      </span>
                      <span class="font-diagnostic-mono text-diagnostic-mono text-on-surface-variant">Taxon: ${diag.taxon || 'Ascomycota'}</span>
                    </div>
                    <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight mt-1">
                      ${diag.title || 'Tomato — Early Blight'}
                    </h1>
                    <p class="font-body-md text-body-md text-on-surface-variant italic">
                      ${diag.pathogenName || 'Alternaria solani (Sorauer)'}
                    </p>
                  </div>

                  <!-- AI Confidence Gauge Section -->
                  <div class="rounded-2xl bg-surface-container-low p-4 flex flex-col gap-3">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[20px]">verified</span>
                        <span class="font-label-md text-label-md text-on-surface font-semibold">Confidence Rating</span>
                      </div>
                      <span class="font-headline-md text-headline-md text-primary font-bold">${confidence}%</span>
                    </div>
                    <!-- Clean Progress Bar -->
                    <div class="w-full h-3 rounded-full bg-surface-container overflow-hidden p-0.5">
                      <div class="h-full rounded-full bg-primary-container transition-all duration-1000" style="width: ${confidence}%;"></div>
                    </div>
                    <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                      <span class="flex items-center gap-1 text-primary">
                        <span class="material-symbols-outlined text-[16px]">check_circle</span>
                        Model Calibrated (SVM + SMO)
                      </span>
                      <span class="font-diagnostic-mono text-diagnostic-mono">P-Value ${diag.pVal || '< 0.001'}</span>
                    </div>
                  </div>

                  <!-- Clinical Phenotype Summary -->
                  <div class="flex flex-col gap-2">
                    <h2 class="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary text-[18px]">notes</span>
                      Pathological Assessment
                    </h2>
                    <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      ${diag.assessment || 'Distinct circular target-like necrotic rings surrounded by chlorotic yellow halos identified on lower leaf tissue.'}
                    </p>
                  </div>

                  <!-- Symptom Progression Breakdown -->
                  <div class="flex flex-col gap-3 pt-2">
                    <span class="font-label-sm text-label-sm text-outline font-semibold uppercase tracking-wider">Identified Symptoms</span>
                    <div class="grid grid-cols-2 gap-2 font-body-sm text-body-sm">
                      ${(diag.symptoms || [
                        { name: 'Concentric Rings', icon: 'radio_button_checked' },
                        { name: 'Chlorotic Halo', icon: 'lens_blur' },
                        { name: 'Basal Leaf Attack', icon: 'nature' },
                        { name: 'Cuticle Desiccation', icon: 'water_loss' }
                      ]).map(s => `
                        <div class="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low text-on-surface">
                          <span class="material-symbols-outlined ${isDiseased ? 'text-error' : 'text-secondary'} text-[18px]">${s.icon}</span>
                          <span>${s.name}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Environmental Factors Callout -->
                  <div class="p-4 rounded-2xl bg-surface-container flex items-start gap-3">
                    <span class="material-symbols-outlined text-tertiary text-2xl shrink-0">dew_point</span>
                    <div class="flex flex-col gap-0.5">
                      <span class="font-label-md text-label-md text-on-surface font-semibold">Favorable Conditions</span>
                      <p class="font-body-sm text-body-sm text-on-surface-variant">
                        ${diag.conditions || 'High ambient humidity (>80%) with canopy temperatures between 24°C–29°C expedite spore germination.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Treatment & Care Plan Section -->
          <section class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 pb-10" id="treatment-section">
            <div class="bg-surface-container-lowest rounded-3xl shadow-sm p-6 lg:p-10 flex flex-col gap-8">
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div class="flex flex-col gap-1">
                  <div class="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                    <span class="material-symbols-outlined text-[20px]">medical_services</span>
                    Actionable Prescription
                  </div>
                  <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Agronomy Care &amp; Remediation Plan
                  </h2>
                  <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Execute these calibrated intervention steps to eradicate spore dissemination and protect neighboring healthy foliage.
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px] text-secondary">check</span>
                    Organic &amp; GAP Compliant
                  </span>
                </div>
              </div>

              <!-- 3-Step Treatment Protocol Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Step 1 -->
                <div class="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between gap-5 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                      <span class="w-10 h-10 rounded-xl ${isDiseased ? 'bg-error text-on-error' : 'bg-primary text-on-primary'} font-headline-sm text-headline-sm flex items-center justify-center font-bold">1</span>
                      <span class="px-2.5 py-0.5 rounded-full ${isDiseased ? 'bg-error-container text-error' : 'bg-secondary-container text-secondary'} font-label-sm text-label-sm font-semibold">
                        ${diag.prescription?.step1?.timing || 'Triage (Hours 0-2)'}
                      </span>
                    </div>
                    <div class="flex flex-col gap-2">
                      <h3 class="font-headline-sm text-headline-sm text-on-surface">
                        ${diag.prescription?.step1?.title || 'Immediate Physical Triage'}
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface-variant">
                        ${diag.prescription?.step1?.desc || 'Prune all lower affected foliage using sanitized bypass shears.'}
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-1">
                      <span class="font-semibold text-error flex items-center gap-1">
                        <span class="material-symbols-outlined text-[16px]">do_not_disturb_on</span>
                        Critical Directive:
                      </span>
                      <span>${diag.prescription?.step1?.warning || 'Incinerate or isolate cuttings immediately.'}</span>
                    </div>
                  </div>
                  <div class="pt-2 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span class="material-symbols-outlined text-[18px] text-primary">handyman</span>
                    <span>${diag.prescription?.step1?.tool || 'Required Tool: Bypass Pruner, Sanitizer'}</span>
                  </div>
                </div>

                <!-- Step 2 -->
                <div class="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between gap-5 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                      <span class="w-10 h-10 rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">2</span>
                      <span class="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        ${diag.prescription?.step2?.timing || 'Chemical / Bio'}
                      </span>
                    </div>
                    <div class="flex flex-col gap-2">
                      <h3 class="font-headline-sm text-headline-sm text-on-surface">
                        ${diag.prescription?.step2?.title || 'Organic Spray Remediation'}
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface-variant">
                        ${diag.prescription?.step2?.desc || 'Apply liquid copper fungicide or bio-fungicide containing Bacillus subtilis.'}
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-1">
                      <span class="font-semibold text-primary flex items-center gap-1">
                        <span class="material-symbols-outlined text-[16px]">schedule</span>
                        Timing Window:
                      </span>
                      <span>${diag.prescription?.step2?.warning || 'Spray during dawn or dusk to avoid phototoxicity.'}</span>
                    </div>
                  </div>
                  <div class="pt-2 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span class="material-symbols-outlined text-[18px] text-primary">eco</span>
                    <span>${diag.prescription?.step2?.tool || 'Rate: 15–20ml / 5L Water'}</span>
                  </div>
                </div>

                <!-- Step 3 -->
                <div class="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between gap-5 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                      <span class="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary font-headline-sm text-headline-sm flex items-center justify-center font-bold">3</span>
                      <span class="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        ${diag.prescription?.step3?.timing || 'Culture Control'}
                      </span>
                    </div>
                    <div class="flex flex-col gap-2">
                      <h3 class="font-headline-sm text-headline-sm text-on-surface">
                        ${diag.prescription?.step3?.title || 'Irrigation Management'}
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface-variant">
                        ${diag.prescription?.step3?.desc || 'Immediately switch to drip tubes or direct ground-level watering.'}
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-1">
                      <span class="font-semibold text-tertiary flex items-center gap-1">
                        <span class="material-symbols-outlined text-[16px]">water_drop</span>
                        Hydro Dynamics:
                      </span>
                      <span>${diag.prescription?.step3?.warning || 'Water root zone only. Mulch heavily to reduce splash dispersal.'}</span>
                    </div>
                  </div>
                  <div class="pt-2 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span class="material-symbols-outlined text-[18px] text-primary">waves</span>
                    <span>${diag.prescription?.step3?.tool || 'Water at Root Zone Only'}</span>
                  </div>
                </div>
              </div>

              <!-- Secondary Agronomy Recommendation Note -->
              <div class="p-4 rounded-2xl bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-on-primary text-[18px]">verified_user</span>
                  </div>
                  <span class="font-body-sm text-body-sm text-on-surface">
                    Follow up scan recommended in <strong class="font-semibold">5 to 7 days</strong> to ensure lesion margins have stabilized and arrested.
                  </span>
                </div>
                <button class="shrink-0 font-label-sm text-label-sm text-primary hover:text-primary-container underline font-semibold transition-colors" onclick="ResultView.scheduleReminder()">
                  Set Scan Reminder
                </button>
              </div>
            </div>
          </section>

          <!-- Sticky Action Command Bar -->
          <section class="w-full max-w-[1280px] mx-auto px-6 lg:px-12">
            <div class="w-full rounded-3xl bg-surface-container-lowest shadow-lg p-5 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-surface-container-high">
              <!-- Secondary Actions Group -->
              <div class="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                <button class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" id="btn-pdf-download" onclick="ResultView.triggerReportDownload()">
                  <span class="material-symbols-outlined text-[20px] text-primary">picture_as_pdf</span>
                  <span>Download Agronomy Report</span>
                </button>
                <button class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" id="btn-save-history" onclick="ResultView.toggleSaveHistory(this)">
                  <span class="material-symbols-outlined text-[20px] text-primary" id="save-icon">bookmark_border</span>
                  <span id="save-text">Save to My History</span>
                </button>
                <button class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" onclick="ResultView.shareWithExpert()">
                  <span class="material-symbols-outlined text-[20px] text-tertiary">support_agent</span>
                  <span>Share with Agronomist</span>
                </button>
              </div>

              <!-- Primary Call to Action -->
              <div class="w-full md:w-auto flex justify-center">
                <a class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm text-[16px] font-semibold transition-all shadow-md hover:shadow-lg" href="#scan">
                  <span class="material-symbols-outlined text-[22px]">document_scanner</span>
                  <span>Scan Another Leaf</span>
                </a>
              </div>
            </div>
          </section>

          <!-- Fullscreen Leaf Lightbox Modal -->
          <div class="hidden fixed inset-0 z-50 bg-inverse-surface/80 backdrop-blur-sm flex items-center justify-center p-4" id="leaf-zoom-modal">
            <div class="bg-surface-container-lowest rounded-3xl p-6 max-w-4xl w-full flex flex-col gap-4 shadow-2xl relative">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="font-headline-sm text-headline-sm text-on-surface">Microscopic Foliar Inspection</span>
                  <span class="px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-diagnostic-mono text-diagnostic-mono">High-Res</span>
                </div>
                <button class="p-2 rounded-full hover:bg-surface-container transition-colors" onclick="ResultView.toggleZoomModal(false)">
                  <span class="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
              <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface-container-high">
                <img class="w-full h-full object-contain" alt="Microscopic leaf view" src="${imageUrl}">
              </div>
              <div class="flex items-center justify-between text-on-surface-variant font-diagnostic-mono text-diagnostic-mono">
                <span>Specimen: #${diag.id || 'FS-882'}</span>
                <span>Calibrated Resolution: 4032 x 3024 px @ 300 DPI</span>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    toggleBoundingBoxes() {
      const annot = document.getElementById('ai-annotations');
      const label = document.getElementById('box-btn-label');
      if (!annot || !label) return;
      if (annot.classList.contains('opacity-0')) {
        annot.classList.remove('opacity-0');
        label.innerText = 'Hide AI Mask';
      } else {
        annot.classList.add('opacity-0');
        label.innerText = 'Show AI Mask';
      }
    },

    toggleZoomModal(show) {
      const modal = document.getElementById('leaf-zoom-modal');
      if (!modal) return;
      if (show) modal.classList.remove('hidden');
      else modal.classList.add('hidden');
    },

    toggleSaveHistory(btn) {
      const icon = document.getElementById('save-icon');
      const text = document.getElementById('save-text');
      const diag = window.AppState.currentDiagnosis;

      if (!diag) return;

      if (btn.dataset.saved === 'true') {
        btn.dataset.saved = 'false';
        if (icon) icon.innerText = 'bookmark_border';
        if (text) text.innerText = 'Save to My History';
        window.App.showToast('Removed from saved records', 'info');
      } else {
        btn.dataset.saved = 'true';
        if (icon) icon.innerText = 'bookmark';
        if (text) text.innerText = 'Saved in Records';
        
        // Add to history if not already present
        const exists = window.AppState.history.some(h => h.id === diag.id);
        if (!exists) {
          window.AppState.addHistoryItem({
            ...diag,
            date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
        }
        window.App.showToast('Diagnostic dossier saved to Scan History!', 'success');
      }
    },

    shareWithExpert() {
      const diag = window.AppState.currentDiagnosis || {};
      const email = 'agronomy@florascan.ai';
      const subject = encodeURIComponent(`Diagnostic Review #${diag.id || 'FS-882'} — ${diag.title || 'Crop Issue'}`);
      const body = encodeURIComponent(`Hello Agronomy Team,\n\nPlease review my diagnostic report #${diag.id || 'FS-882'} for ${diag.scientificName || 'specimen'}.\nClassification: ${diag.title}\nConfidence: ${diag.confidence}%\nFoliar Spread: ${diag.foliarSpread}\n\nGenerated with FloraScan AI IEEE 2025 Model.`);
      window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    },

    copyShareLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const btnText = document.getElementById('share-btn-text');
        if (btnText) {
          btnText.innerText = 'Link Copied!';
          setTimeout(() => { btnText.innerText = 'Share Report'; }, 2500);
        }
        window.App.showToast('Report URL copied to clipboard', 'info');
      });
    },

    scheduleReminder() {
      window.App.showToast('Reminder scheduled for 5 days from today (Thursday, 10:42 AM). Agronomy notification alert set.', 'success');
    },

    triggerReportDownload() {
      const btn = document.getElementById('btn-pdf-download');
      if (!btn) return;
      const origContent = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>Generating PDF Dossier...</span>';
      
      setTimeout(() => {
        btn.innerHTML = '<span class="material-symbols-outlined text-[20px] text-primary">check</span><span>PDF Ready</span>';
        window.print();
        setTimeout(() => { btn.innerHTML = origContent; }, 3000);
      }, 900);
    }
  };

  window.ResultView = ResultView;
})(window);
