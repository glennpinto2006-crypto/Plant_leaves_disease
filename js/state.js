// FloraScan AI - State Management & Storage
(function(window) {
  const STORAGE_KEY_HISTORY = 'florascan_history_v1';
  const STORAGE_KEY_CURRENT = 'florascan_current_diag_v1';
  const STORAGE_KEY_USER = 'florascan_user_session_v1';

  // Default preloaded scan records matching UI mockups
  const DEFAULT_HISTORY = [
    {
      id: 'FS-882',
      title: 'Tomato (Field Plot B4)',
      disease: 'Early Blight (Alternaria solani)',
      isDiseased: true,
      category: 'diseased tomato',
      crop: 'Tomato',
      scientificName: 'Solanum lycopersicum',
      confidence: 98.5,
      date: 'Oct 24, 2025 • 10:42 AM',
      severity: 'Critical (Severity 3/4)',
      foliarSpread: '18.2%',
      triageAction: 'Copper Fungicide & Leaf Pruning',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCKW7JlY8lYaKEfoT_Q59fOXD-xuuJ7GxHI0QQa8-lT0blkF1un6MOTPiFRDfpnESj7zcdmi0Fpvg5MV3b5NeBOkUtq2r-dUmevJ42AXyj1k6WDBilPWGqXJCsAJu_P9pvMsDOu2gUKbWuHPKjRV8IOFg05Jn3bbFDvZRsREaT3Xlm7dvQY99qRyqvPwaPX-NmYf7Bq9YJCutxwgTjIHwAh9fW--HTvkDNPQ-pcONDUAqJPBEn_i1qLw',
      lesions: [
        { label: 'Lesion Core [P1: 98.5%]', x: 38, y: 34, w: 26, h: 32, diameter: '14.8 mm' },
        { label: 'Halo [P2: 96.2%]', x: 23, y: 18, w: 19, h: 25, diameter: '11.2 mm' },
        { label: 'L3 [91.4%]', x: 63, y: 35, w: 17, h: 24, diameter: '8.5 mm' }
      ]
    },
    {
      id: 'FS-879',
      title: 'Potato (Greenhouse 2)',
      disease: 'Late Blight (Phytophthora infestans)',
      isDiseased: true,
      category: 'diseased potato',
      crop: 'Potato',
      scientificName: 'Solanum tuberosum',
      confidence: 96.1,
      date: 'Oct 22, 2025 • 03:15 PM',
      severity: 'Critical (Severity 4/4)',
      foliarSpread: '24.7%',
      triageAction: 'Systemic Fungicide (Metalaxyl)',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPvw5a36Quk50v3XheQB4LRsBQ_bcibOelPGqZ3jESbLYyP7ypWRg2qaPjswAVyc8Iq4Qgq7kC128YzWNlgngsQNdWGkfjq4CwFcd4hKJSX8ho_JBc0CN3slw9Z5wuT-ZbIs8iCYiwhFIdDo0p1oT-erBShFhU0fezIbbSThCJf9qnHGjKsB7fVAeJ_lSPblYvmdLofB4gmpsMwhqerFUYSQ1n0y1UO5aFtwrtB9QPMq6i2CoIVAGf7w',
      lesions: [
        { label: 'Spore Cluster [96.1%]', x: 30, y: 28, w: 35, h: 40, diameter: '22.1 mm' }
      ]
    },
    {
      id: 'FS-874',
      title: 'Sweet Corn (South Field)',
      disease: 'Healthy Foliage — Optimal Chlorophyll',
      isDiseased: false,
      category: 'healthy maize',
      crop: 'Corn/Maize',
      scientificName: 'Zea mays',
      confidence: 99.1,
      date: 'Oct 19, 2025 • 11:30 AM',
      severity: 'None (Healthy)',
      foliarSpread: '0.0%',
      triageAction: 'Continue Balanced Nitrogen Irrigation',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjjQYhG87sJNRN_CuoaL33irPU-fEaS1pq8gP_QQEuTB_sidVwfjYFtcSpOHKpsbE1F2lat8LUZ56qaX1mofdl2nWLqbnrtZOxeMVWFq3klIvA1mhg6KHgWt5mLatnnNPLZ87k7AXmOqwenXhB2dQDho6c-xVeUVphhKEvyvszw_bPQZlCEjHae_vsZqWAUmfvPY7c-WVC21VAhQusjMbGZJOZvMec9BUTKek8X8PVyinJlfpiKefwyg',
      lesions: []
    },
    {
      id: 'FS-869',
      title: 'Apple Orchard (Block 1)',
      disease: 'Apple Scab (Venturia inaequalis)',
      isDiseased: true,
      category: 'diseased apple',
      crop: 'Apple',
      scientificName: 'Malus domestica',
      confidence: 94.6,
      date: 'Oct 15, 2025 • 09:12 AM',
      severity: 'Moderate (Severity 2/4)',
      foliarSpread: '12.4%',
      triageAction: 'Sulfur Dusting & Myclobutanil',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gm-7S9yx9edhSqFVjb5SGoRDnVrZaLz47RczalaBzz_X0uthE7ZofjXkRK5sEeNXWn9fz2iUPbveh15n1RBil_eJ4U5Fgc1uOppSijlgnN8T4eQiNH8IdH92soFMIVyGlAI0QeWevKvc_3AD2AjNqKUwrrzgGKcr-Gx7LjjMxWj2AlzJbvAsrEMUPk06CkeQ4WoA0LlHsU_xXOfT1j0_WV37MjfLtAU0vv0dbkb6qC9DYQyq3bES5g',
      lesions: [
        { label: 'Scab Lesion [94.6%]', x: 35, y: 30, w: 30, h: 30, diameter: '13.5 mm' }
      ]
    },
    {
      id: 'FS-865',
      title: 'Apple Specimen (Lab Lot A)',
      disease: 'Healthy Specimen — Optimal Cuticle',
      isDiseased: false,
      category: 'healthy apple',
      crop: 'Apple',
      scientificName: 'Malus domestica',
      confidence: 99.8,
      date: 'Oct 12, 2025 • 02:00 PM',
      severity: 'None (Healthy)',
      foliarSpread: '0.0%',
      triageAction: 'Standard Orchard Monitoring',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6YnyjbY13b30f6xNKLkMMUZWhWXGMQxRTjxs1PfooXGeULSSKNhHBzGhTl0_UG2dw5Jr0uxUxTiyXUyJYdhi7WQSZrABudITSiG661Hsfygc-b6FcFbMhTz-YZuxo7BrQuF0am8XhEn7Y23u9_26ZPYFqrBRIskbnsAikBQZywZzJLMnMLVk9nbaoFf71_E1yCsnMr1yx29P5S_ejGdVNsIwMKxbXcjHWCl_3rObtMTnmQTRYf3WjLQ',
      lesions: []
    }
  ];

  const AppState = {
    history: [],
    currentDiagnosis: null,
    user: {
      isLoggedIn: true,
      name: 'Dr. Elena Ramos',
      role: 'Agronomist',
      email: 'elena.ramos@agriscan.org'
    },

    init() {
      // Load history
      try {
        const stored = localStorage.getItem(STORAGE_KEY_HISTORY);
        if (stored) {
          this.history = JSON.parse(stored);
        } else {
          this.history = [...DEFAULT_HISTORY];
          this.saveHistory();
        }
      } catch (e) {
        console.warn('LocalStorage error:', e);
        this.history = [...DEFAULT_HISTORY];
      }

      // Load current diagnosis if available, otherwise default to first item
      try {
        const storedCurr = localStorage.getItem(STORAGE_KEY_CURRENT);
        if (storedCurr) {
          this.currentDiagnosis = JSON.parse(storedCurr);
        } else {
          this.currentDiagnosis = this.history[0];
          this.saveCurrentDiagnosis();
        }
      } catch (e) {
        this.currentDiagnosis = this.history[0];
      }

      // Load user session
      try {
        const storedUser = localStorage.getItem(STORAGE_KEY_USER);
        if (storedUser) {
          this.user = JSON.parse(storedUser);
        }
      } catch (e) {}
    },

    saveHistory() {
      try {
        localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(this.history));
      } catch (e) {
        console.warn('Failed to save history', e);
      }
    },

    addHistoryItem(item) {
      // Add to front of history
      this.history.unshift(item);
      this.saveHistory();
    },

    saveCurrentDiagnosis() {
      try {
        localStorage.setItem(STORAGE_KEY_CURRENT, JSON.stringify(this.currentDiagnosis));
      } catch (e) {
        console.warn('Failed to save current diagnosis', e);
      }
    },

    setCurrentDiagnosis(diagnosis) {
      this.currentDiagnosis = diagnosis;
      this.saveCurrentDiagnosis();
    },

    saveUser(user) {
      this.user = user;
      try {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(this.user));
      } catch (e) {}
    },

    getKPIs() {
      const total = this.history.length;
      const diseased = this.history.filter(h => h.isDiseased).length;
      const healthy = total - diseased;
      const healthyRatio = total > 0 ? Math.round((healthy / total) * 100) : 100;
      return { total, diseased, healthy, healthyRatio };
    }
  };

  AppState.init();
  window.AppState = AppState;
})(window);
