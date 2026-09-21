// FloraScan AI - Main Application Router & Controller
(function(window) {
  const App = {
    currentRoute: 'home',

    routes: {
      'home': window.HomeView,
      'scan': window.ScanView,
      'result': window.ResultView,
      'history': window.HistoryView,
      'auth': window.AuthView,
      'methodology': window.MethodologyView,
      'how-it-works': window.MethodologyView
    },

    init() {
      // Listen to hash changes
      window.addEventListener('hashchange', () => this.handleRouting());

      // Setup mobile menu toggle
      const mobileToggle = document.getElementById('mobile-menu-toggle');
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Initial route
      if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = '#home';
      } else {
        this.handleRouting();
      }
    },

    handleRouting() {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase() || 'home';
      // Strip query or sub-paths if any
      const routeKey = hash.split('?')[0].split('/')[0];
      
      this.currentRoute = this.routes[routeKey] ? routeKey : 'home';
      this.renderCurrentView();
      this.updateNavState();

      // Scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Close mobile menu if open
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
      }
    },

    renderCurrentView() {
      const main = document.getElementById('app-main');
      const view = this.routes[this.currentRoute] || this.routes['home'];

      if (main && view && typeof view.render === 'function') {
        main.innerHTML = view.render();
        if (typeof view.bindEvents === 'function') {
          view.bindEvents();
        }
      }
    },

    updateNavState() {
      const links = document.querySelectorAll('[data-route]');
      links.forEach(link => {
        const route = link.getAttribute('data-route');
        if (route === this.currentRoute || (route === 'how-it-works' && this.currentRoute === 'methodology')) {
          link.classList.add('text-primary-container', 'font-semibold');
          link.classList.remove('text-on-surface-variant');
        } else {
          link.classList.remove('text-primary-container', 'font-semibold');
          link.classList.add('text-on-surface-variant');
        }
      });
    },

    showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast';

      let icon = 'check_circle';
      let iconColor = 'text-primary';
      if (type === 'error') {
        icon = 'error';
        iconColor = 'text-error';
      } else if (type === 'info') {
        icon = 'info';
        iconColor = 'text-tertiary';
      }

      toast.innerHTML = `
        <span class="material-symbols-outlined ${iconColor} text-2xl">${icon}</span>
        <div class="flex-1 font-body-sm text-on-surface">${message}</div>
        <button class="text-outline hover:text-on-surface" onclick="this.parentElement.remove()">
          <span class="material-symbols-outlined text-lg">close</span>
        </button>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(12px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }
  };

  window.App = App;

  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });
})(window);
