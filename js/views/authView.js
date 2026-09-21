// FloraScan AI - Authentication & Role Selection View
(function(window) {
  const AuthView = {
    mode: 'signin',
    selectedRole: 'farmer',
    passwordVisible: false,

    render() {
      return `
        <div class="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center">
          <!-- Ambient Glows -->
          <div class="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div class="absolute bottom-10 right-10 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <!-- Main Auth Container Card -->
          <div class="w-full max-w-4xl bg-surface-container-lowest rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-surface-container-high">
            <!-- Left Column: Form Hub -->
            <div class="w-full lg:w-7/12 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <!-- Brand Identity Header -->
                <div class="flex items-center gap-3.5 mb-8">
                  <div class="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center shadow-sm p-1.5 text-primary">
                    <span class="material-symbols-outlined text-3xl">eco</span>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">FloraScan AI</span>
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        v3.2 Clinical
                      </span>
                    </div>
                    <p class="font-label-sm text-label-sm text-outline">Clinical Agronomic Intelligence</p>
                  </div>
                </div>

                <!-- Title & Subtitle -->
                <div class="mb-8">
                  <h1 class="font-headline-md text-headline-md text-on-surface tracking-tight mb-2" id="auth-title">
                    ${this.mode === 'signin' ? 'Welcome Back to FloraScan' : 'Create Agronomy Account'}
                  </h1>
                  <p class="font-body-md text-body-md text-on-surface-variant max-w-md" id="auth-desc">
                    ${this.mode === 'signin' ? 'Sign in to access your field logs and high-precision leaf pathology diagnostic reports.' : 'Register to unlock field telemedicine and real-time plant disease alerts.'}
                  </p>
                </div>

                <!-- Interactive Tab Switcher -->
                <div class="flex p-1.5 bg-surface-container-low rounded-2xl mb-8 shadow-inner">
                  <button class="flex-1 py-2.5 rounded-xl font-label-md text-label-md transition-all duration-200 flex items-center justify-center gap-2 ${this.mode === 'signin' ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold' : 'text-outline hover:text-on-surface'}" onclick="AuthView.setMode('signin')" type="button">
                    <span class="material-symbols-outlined text-lg">login</span>
                    <span>Sign In</span>
                  </button>
                  <button class="flex-1 py-2.5 rounded-xl font-label-md text-label-md transition-all duration-200 flex items-center justify-center gap-2 ${this.mode === 'signup' ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold' : 'text-outline hover:text-on-surface'}" onclick="AuthView.setMode('signup')" type="button">
                    <span class="material-symbols-outlined text-lg">person_add</span>
                    <span>Create Account</span>
                  </button>
                </div>

                <!-- Role Selector -->
                <div class="${this.mode === 'signup' ? 'block' : 'hidden'} mb-6" id="role-selector-wrapper">
                  <label class="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2.5">Select Primary Diagnostic Role</label>
                  <div class="grid grid-cols-3 gap-2.5">
                    <button class="p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1.5 ${this.selectedRole === 'farmer' ? 'border-primary bg-surface-container text-primary font-semibold' : 'border-surface-container-high bg-surface-container-low text-on-surface-variant'}" onclick="AuthView.setRole('farmer')" type="button">
                      <span class="material-symbols-outlined text-xl">potted_plant</span>
                      <span class="font-label-sm text-label-sm">Grower / Farmer</span>
                    </button>
                    <button class="p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1.5 ${this.selectedRole === 'consultant' ? 'border-primary bg-surface-container text-primary font-semibold' : 'border-surface-container-high bg-surface-container-low text-on-surface-variant'}" onclick="AuthView.setRole('consultant')" type="button">
                      <span class="material-symbols-outlined text-xl">biotech</span>
                      <span class="font-label-sm text-label-sm">Agronomist</span>
                    </button>
                    <button class="p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1.5 ${this.selectedRole === 'student' ? 'border-primary bg-surface-container text-primary font-semibold' : 'border-surface-container-high bg-surface-container-low text-on-surface-variant'}" onclick="AuthView.setRole('student')" type="button">
                      <span class="material-symbols-outlined text-xl">school</span>
                      <span class="font-label-sm text-label-sm">Researcher</span>
                    </button>
                  </div>
                </div>

                <!-- Form Fields Container -->
                <form class="space-y-4" onsubmit="AuthView.handleSubmit(event)">
                  <!-- Full Name (Only for Registration) -->
                  <div class="${this.mode === 'signup' ? 'block' : 'hidden'}" id="name-field-wrapper">
                    <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1.5" for="user-name">Full Name</label>
                    <div class="relative flex items-center">
                      <span class="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">badge</span>
                      <input class="w-full pl-11 pr-4 py-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition" id="user-name" placeholder="Dr. Elena Ramos" type="text" value="${window.AppState.user.name || ''}">
                    </div>
                  </div>

                  <!-- Email or Phone -->
                  <div>
                    <label class="block font-label-sm text-label-sm text-on-surface-variant mb-1.5" for="identifier-input">Email Address or Field ID</label>
                    <div class="relative flex items-center">
                      <span class="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">alternate_email</span>
                      <input class="w-full pl-11 pr-4 py-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition" id="identifier-input" placeholder="grower@flora-sanctuary.org" required type="text" value="${window.AppState.user.email || ''}">
                    </div>
                  </div>

                  <!-- Password -->
                  <div>
                    <div class="flex items-center justify-between mb-1.5">
                      <label class="block font-label-sm text-label-sm text-on-surface-variant" for="password-input">Password</label>
                      <a class="font-label-sm text-label-sm text-primary hover:underline transition" href="#" onclick="alert('Password reset link dispatched to registered email.'); return false;">Forgot password?</a>
                    </div>
                    <div class="relative flex items-center">
                      <span class="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">lock</span>
                      <input class="w-full pl-11 pr-11 py-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition" id="password-input" placeholder="••••••••••••" required type="${this.passwordVisible ? 'text' : 'password'}" value="pass1234">
                      <button aria-label="Toggle password visibility" class="absolute right-3 text-outline hover:text-on-surface p-1 rounded-lg transition" onclick="AuthView.togglePassword()" type="button">
                        <span class="material-symbols-outlined text-lg" id="pwd-icon">${this.passwordVisible ? 'visibility_off' : 'visibility'}</span>
                      </button>
                    </div>
                  </div>

                  <!-- Remember Me Checkbox -->
                  <div class="flex items-center justify-between pt-1">
                    <label class="flex items-center gap-2.5 cursor-pointer select-none">
                      <input checked class="w-4 h-4 rounded accent-primary-container text-primary cursor-pointer" type="checkbox">
                      <span class="font-body-sm text-body-sm text-on-surface-variant">Remember this workstation</span>
                    </label>
                  </div>

                  <!-- Primary Action Button -->
                  <button class="w-full mt-2 py-3.5 px-6 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-semibold tracking-wide shadow-md hover:bg-secondary transition flex items-center justify-center gap-2" id="submit-button" type="submit">
                    <span>${this.mode === 'signin' ? 'Sign In to FloraScan' : 'Create Free Account'}</span>
                    <span class="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </form>

                <!-- Divider -->
                <div class="relative my-6 flex items-center justify-center">
                  <div class="w-full h-px bg-surface-container-high"></div>
                  <span class="absolute bg-surface-container-lowest px-4 font-label-sm text-label-sm text-outline uppercase tracking-wider">or rapid credentials</span>
                </div>

                <!-- Google SSO -->
                <div class="flex justify-center w-full">
                  <button class="w-full max-w-sm flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition shadow-sm border border-surface-container-high" type="button" onclick="AuthView.handleGoogleSSO()">
                    <svg class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.8 5 12 5z" fill="#EA4335"></path>
                      <path d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" fill="#4285F4"></path>
                      <path d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3 0-.9.2-1.7.4-2.4L1.6 7.1C.6 9.1 0 11.5 0 14s.6 4.9 1.6 6.9l3.7-2.9z" fill="#FBBC05"></path>
                      <path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.2-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z" fill="#34A853"></path>
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>
              </div>

              <!-- Security Tagline -->
              <div class="mt-8 pt-4 flex items-center justify-between text-outline font-label-sm text-label-sm border-t border-surface-container-high">
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-base text-primary">verified_user</span>
                  End-to-End Cryptographic AgData
                </span>
                <span class="hover:text-on-surface cursor-pointer">Security Protocol v4</span>
              </div>
            </div>

            <!-- Right Column: Visual Pathology Info -->
            <div class="w-full lg:w-5/12 bg-surface-container-low p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-surface-container-high">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-diagnostic-mono text-label-sm mb-4">
                  <span>IEEE RESEARCH PROVEN</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold mb-3">
                  Calibrated Support Vector Classifier
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Trained on diverse agricultural foliage across solanaceae, rosaceae, and gramineae crops with Sequential Minimal Optimization (SMO).
                </p>

                <div class="space-y-4">
                  <div class="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl shadow-sm">
                    <span class="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    <div>
                      <div class="font-label-md text-label-md text-on-surface font-semibold">98.5% Accuracy</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">1.5% classification error on field trials</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl shadow-sm">
                    <span class="material-symbols-outlined text-primary text-2xl">speed</span>
                    <div>
                      <div class="font-label-md text-label-md text-on-surface font-semibold">Sub-2s Processing</div>
                      <div class="font-body-sm text-body-sm text-on-surface-variant">Real-time GLCM texture & edge extraction</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-6 border-t border-surface-container-high text-on-surface-variant font-body-sm text-body-sm">
                <span class="italic">"The classifier utilizing Support Vector Machine and feature using SMO delivers both high precision and recall performance."</span>
                <div class="font-diagnostic-mono text-label-sm text-on-surface font-semibold mt-2">
                  — 2025 ICoEIT Conference Proceedings
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    setMode(mode) {
      this.mode = mode;
      window.App.renderCurrentView();
    },

    setRole(role) {
      this.selectedRole = role;
      window.App.renderCurrentView();
    },

    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
      const pwdInput = document.getElementById('password-input');
      const pwdIcon = document.getElementById('pwd-icon');
      if (pwdInput && pwdIcon) {
        pwdInput.type = this.passwordVisible ? 'text' : 'password';
        pwdIcon.innerText = this.passwordVisible ? 'visibility_off' : 'visibility';
      }
    },

    handleSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('user-name');
      const emailInput = document.getElementById('identifier-input');

      const name = nameInput && nameInput.value ? nameInput.value : 'Dr. Elena Ramos';
      const email = emailInput && emailInput.value ? emailInput.value : 'elena.ramos@agriscan.org';

      let roleName = 'Agronomist';
      if (this.selectedRole === 'farmer') roleName = 'Grower / Farmer';
      else if (this.selectedRole === 'student') roleName = 'Agricultural Researcher';

      window.AppState.saveUser({
        isLoggedIn: true,
        name,
        email,
        role: roleName
      });

      window.App.showToast(`Logged in successfully as ${name} (${roleName})!`, 'success');
      window.location.hash = '#home';
    },

    handleGoogleSSO() {
      window.AppState.saveUser({
        isLoggedIn: true,
        name: 'Dr. Elena Ramos',
        email: 'elena.ramos@agriscan.org',
        role: 'Senior Agronomist'
      });
      window.App.showToast('Google credentials verified! Welcome back, Dr. Ramos.', 'success');
      window.location.hash = '#home';
    }
  };

  window.AuthView = AuthView;
})(window);
