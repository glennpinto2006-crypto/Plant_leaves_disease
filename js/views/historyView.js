// FloraScan AI - Scan History & Field Log View Component
(function(window) {
  const HistoryView = {
    activeFilter: 'all',
    searchQuery: '',

    render() {
      const kpis = window.AppState.getKPIs();
      const records = this.getFilteredRecords();

      return `
        <div class="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex flex-col gap-8">
          <!-- Top Context & Header Banner -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div class="flex flex-col gap-2 max-w-2xl">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-diagnostic-mono text-diagnostic-mono">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Telemetry Synced • Sector Alpha
                </span>
              </div>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Scan History &amp; Field Log</h1>
              <p class="font-body-md text-body-md text-on-surface-variant">Review your past foliage diagnoses, track disease progression, and export high-precision clinical pathology dossiers.</p>
            </div>
            <!-- Quick Action Utility -->
            <div class="flex items-center gap-3 self-start md:self-auto">
              <a class="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-xl hover:bg-primary shadow-sm transition-all duration-200" href="#scan">
                <span class="material-symbols-outlined text-[18px]">add_a_photo</span>
                <span>New Leaf Scan</span>
              </a>
            </div>
          </div>

          <!-- Summary KPI Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <!-- Total Audited -->
            <div class="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-high">
              <div class="flex flex-col gap-1">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Scans Indexed</span>
                <div class="flex items-baseline gap-2">
                  <span class="font-display-lg text-headline-lg text-on-surface font-bold" id="kpi-total">${kpis.total}</span>
                  <span class="font-diagnostic-mono text-diagnostic-mono text-primary font-semibold">+6 this week</span>
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Across 5 distinct field sectors</span>
              </div>
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-2xl">document_scanner</span>
              </div>
            </div>

            <!-- Active Pathogen Alerts -->
            <div class="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-high">
              <div class="flex flex-col gap-1">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Pathogen Alerts</span>
                <div class="flex items-baseline gap-2">
                  <span class="font-display-lg text-headline-lg text-error font-bold" id="kpi-diseased">${kpis.diseased}</span>
                  <span class="font-diagnostic-mono text-diagnostic-mono text-error font-semibold">Triage Required</span>
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Crops requiring intervention</span>
              </div>
              <div class="w-12 h-12 rounded-xl bg-error-container/60 flex items-center justify-center text-error">
                <span class="material-symbols-outlined text-2xl">warning</span>
              </div>
            </div>

            <!-- Crop Health Quotient -->
            <div class="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-high">
              <div class="flex flex-col gap-1">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Vigorous Specimen Ratio</span>
                <div class="flex items-baseline gap-2">
                  <span class="font-display-lg text-headline-lg text-secondary font-bold" id="kpi-ratio">${kpis.healthyRatio}%</span>
                  <span class="font-diagnostic-mono text-diagnostic-mono text-secondary font-semibold">Healthy Baselines</span>
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${kpis.healthy} of ${kpis.total} samples non-pathogenic</span>
              </div>
              <div class="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-2xl">eco</span>
              </div>
            </div>
          </div>

          <!-- Filter & Search Toolbar -->
          <div class="flex flex-col lg:flex-row gap-4 lg:items-center justify-between bg-surface-container-lowest p-3 rounded-2xl shadow-sm border border-surface-container-high">
            <!-- Quick Filter Pills -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none" id="filter-container">
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'all' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('all')">
                All Scans (${kpis.total})
              </button>
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'diseased' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('diseased')">
                Diseased (${kpis.diseased})
              </button>
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'healthy' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('healthy')">
                Healthy (${kpis.healthy})
              </button>
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'tomato' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('tomato')">
                Tomatoes
              </button>
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'potato' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('potato')">
                Potatoes
              </button>
              <button class="filter-btn px-4 py-2 rounded-xl font-label-md text-label-md whitespace-nowrap transition-all duration-150 ${this.activeFilter === 'apple' ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}" onclick="HistoryView.setFilter('apple')">
                Apples
              </button>
            </div>

            <!-- Search Input Container -->
            <div class="relative w-full lg:w-80 min-w-[260px]">
              <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="history-search" placeholder="Search crop, plot, or disease name..." type="text" value="${this.searchQuery}" oninput="HistoryView.handleSearch(this.value)">
            </div>
          </div>

          <!-- Scan Records Table / Card Rows -->
          <div class="flex flex-col gap-3.5" id="records-list">
            ${records.length === 0 ? `
              <div class="bg-surface-container-lowest p-12 rounded-2xl text-center text-on-surface-variant flex flex-col items-center gap-3">
                <span class="material-symbols-outlined text-4xl text-outline">search_off</span>
                <p class="font-headline-sm">No diagnostic logs found</p>
                <p class="font-body-sm">Try modifying your search or filter criteria.</p>
              </div>
            ` : records.map(rec => `
              <div class="record-row group bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-200 p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 border border-surface-container-high">
                <div class="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-surface-container-highest shrink-0 shadow-inner">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${rec.imageUrl}" alt="${rec.title}">
                    <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-diagnostic-mono text-[10px] uppercase">Ref #${rec.id}</span>
                  </div>
                  <div class="flex flex-col gap-1 min-w-0">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">${rec.title}</span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${rec.isDiseased ? 'bg-error-container text-error' : 'bg-secondary-container text-secondary'} font-label-sm text-label-sm">
                        <span class="material-symbols-outlined text-[14px]">${rec.isDiseased ? 'coronavirus' : 'eco'}</span>
                        ${rec.disease}
                      </span>
                    </div>
                    <div class="flex flex-wrap items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
                      <span class="inline-flex items-center gap-1 font-diagnostic-mono text-diagnostic-mono text-tertiary font-semibold">
                        <span class="material-symbols-outlined text-[14px]">verified</span>
                        ${rec.confidence}% ML Confidence
                      </span>
                      <span class="text-outline-variant">•</span>
                      <span class="font-diagnostic-mono text-diagnostic-mono">${rec.date}</span>
                      <span class="text-outline-variant hidden sm:inline">•</span>
                      <span class="hidden sm:inline text-on-surface-variant/80">Action: ${rec.triageAction}</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0">
                  <button class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all duration-150" onclick="HistoryView.viewReport('${rec.id}')">
                    <span>View Full Report</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Actions & Export -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-high">
            <div class="flex items-center gap-3">
              <button class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors shadow-sm" onclick="HistoryView.exportCSV()">
                <span class="material-symbols-outlined text-[18px] text-primary">download</span>
                <span>Export History as CSV</span>
              </button>
              <button class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors shadow-sm" onclick="HistoryView.exportAllPDFs()">
                <span class="material-symbols-outlined text-[18px] text-tertiary">picture_as_pdf</span>
                <span>Batch PDF Export</span>
              </button>
            </div>
            <div class="flex items-center gap-2">
              <button class="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container">
                <span class="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <span class="w-8 h-8 rounded-lg bg-primary text-on-primary font-diagnostic-mono text-sm flex items-center justify-center font-semibold">1</span>
              <button class="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container">
                <span class="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      `;
    },

    getFilteredRecords() {
      let list = window.AppState.history;

      if (this.activeFilter === 'diseased') {
        list = list.filter(r => r.isDiseased);
      } else if (this.activeFilter === 'healthy') {
        list = list.filter(r => !r.isDiseased);
      } else if (this.activeFilter === 'tomato') {
        list = list.filter(r => (r.crop || '').toLowerCase().includes('tomato') || (r.title || '').toLowerCase().includes('tomato'));
      } else if (this.activeFilter === 'potato') {
        list = list.filter(r => (r.crop || '').toLowerCase().includes('potato') || (r.title || '').toLowerCase().includes('potato'));
      } else if (this.activeFilter === 'apple') {
        list = list.filter(r => (r.crop || '').toLowerCase().includes('apple') || (r.title || '').toLowerCase().includes('apple'));
      }

      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(r => 
          (r.title && r.title.toLowerCase().includes(q)) ||
          (r.disease && r.disease.toLowerCase().includes(q)) ||
          (r.crop && r.crop.toLowerCase().includes(q)) ||
          (r.scientificName && r.scientificName.toLowerCase().includes(q))
        );
      }

      return list;
    },

    setFilter(filter) {
      this.activeFilter = filter;
      window.App.renderCurrentView();
    },

    handleSearch(val) {
      this.searchQuery = val;
      const listContainer = document.getElementById('records-list');
      if (listContainer) {
        const records = this.getFilteredRecords();
        if (records.length === 0) {
          listContainer.innerHTML = `
            <div class="bg-surface-container-lowest p-12 rounded-2xl text-center text-on-surface-variant flex flex-col items-center gap-3">
              <span class="material-symbols-outlined text-4xl text-outline">search_off</span>
              <p class="font-headline-sm">No diagnostic logs found</p>
              <p class="font-body-sm">Try modifying your search or filter criteria.</p>
            </div>
          `;
        } else {
          listContainer.innerHTML = records.map(rec => `
            <div class="record-row group bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-200 p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 border border-surface-container-high">
              <div class="flex items-center gap-4 sm:gap-5 min-w-0">
                <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-surface-container-highest shrink-0 shadow-inner">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${rec.imageUrl}" alt="${rec.title}">
                  <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-diagnostic-mono text-[10px] uppercase">Ref #${rec.id}</span>
                </div>
                <div class="flex flex-col gap-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">${rec.title}</span>
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${rec.isDiseased ? 'bg-error-container text-error' : 'bg-secondary-container text-secondary'} font-label-sm text-label-sm">
                      <span class="material-symbols-outlined text-[14px]">${rec.isDiseased ? 'coronavirus' : 'eco'}</span>
                      ${rec.disease}
                    </span>
                  </div>
                  <div class="flex flex-wrap items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
                    <span class="inline-flex items-center gap-1 font-diagnostic-mono text-diagnostic-mono text-tertiary font-semibold">
                      <span class="material-symbols-outlined text-[14px]">verified</span>
                      ${rec.confidence}% ML Confidence
                    </span>
                    <span class="text-outline-variant">•</span>
                    <span class="font-diagnostic-mono text-diagnostic-mono">${rec.date}</span>
                    <span class="text-outline-variant hidden sm:inline">•</span>
                    <span class="hidden sm:inline text-on-surface-variant/80">Action: ${rec.triageAction}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0">
                <button class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all duration-150" onclick="HistoryView.viewReport('${rec.id}')">
                  <span>View Full Report</span>
                  <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          `).join('');
        }
      }
    },

    viewReport(recId) {
      const found = window.AppState.history.find(h => h.id === recId);
      if (found) {
        window.AppState.setCurrentDiagnosis(found);
        window.location.hash = '#result';
      }
    },

    exportCSV() {
      const records = window.AppState.history;
      let csvContent = 'data:text/csv;charset=utf-8,';
      csvContent += 'Specimen_ID,Crop,Scientific_Name,Pathology_Diagnosis,Status,ML_Confidence_Pct,Date,Triage_Prescription\n';

      records.forEach(r => {
        const row = [
          r.id,
          `"${r.crop || ''}"`,
          `"${r.scientificName || ''}"`,
          `"${r.disease || ''}"`,
          r.isDiseased ? 'Diseased' : 'Healthy',
          r.confidence,
          `"${r.date || ''}"`,
          `"${(r.triageAction || '').replace(/"/g, '""')}"`
        ];
        csvContent += row.join(',') + '\n';
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `FloraScan_Agronomy_Log_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.App.showToast('Diagnostic CSV archive exported successfully!', 'success');
    },

    exportAllPDFs() {
      window.App.showToast('Preparing batch dossiers for printing...', 'info');
      setTimeout(() => {
        window.print();
      }, 600);
    }
  };

  window.HistoryView = HistoryView;
})(window);
