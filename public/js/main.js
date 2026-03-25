/**
 * AutomateHub — Main JavaScript
 * Handles: tool grid rendering, waitlist forms, navigation, analytics
 */

(function() {
  'use strict';

  // ---- Tool Grid Rendering ----
  function renderToolsGrid() {
    const grid = document.getElementById('tools-grid');
    const footerList = document.getElementById('footer-tools-list');
    const toolCount = document.getElementById('tool-count');
    if (!grid || !window.TOOLS_REGISTRY) return;

    const tools = window.TOOLS_REGISTRY;
    toolCount.textContent = tools.length;

    grid.innerHTML = tools.map(tool => `
      <a href="${tool.path}" class="tool-tile" data-tool-id="${tool.id}">
        <span class="tool-badge badge-${tool.status}">${formatStatus(tool.status)}</span>
        <span class="tool-icon">${tool.icon}</span>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <div class="tool-tags">
          ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
        </div>
        <span class="tool-cta">${tool.status === 'demo' ? 'Try Demo' : tool.status === 'live' ? 'Use Tool' : 'Join Waitlist'}</span>
      </a>
    `).join('');

    // Footer links
    if (footerList) {
      footerList.innerHTML = tools.slice(0, 6).map(tool => `
        <li><a href="${tool.path}">${tool.name}</a></li>
      `).join('');
    }
  }

  function formatStatus(status) {
    const map = { 'demo': 'Demo', 'coming-soon': 'Coming Soon', 'live': 'Live' };
    return map[status] || status;
  }

  // ---- Waitlist Form Handling ----
  function initWaitlistForms() {
    document.querySelectorAll('.waitlist-form').forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const role = this.querySelector('select') ? this.querySelector('select').value : '';
        const toolId = this.dataset.toolId || 'general';

        // Store in localStorage for now (will connect to backend later)
        const waitlist = JSON.parse(localStorage.getItem('automatehub_waitlist') || '[]');
        waitlist.push({
          email,
          role,
          toolId,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('automatehub_waitlist', JSON.stringify(waitlist));

        // Show success toast
        showToast('You\'re on the list! We\'ll notify you when this tool launches.');

        // Reset form
        this.reset();

        // Track event
        trackEvent('waitlist_signup', { tool: toolId, role });
      });
    });
  }

  // ---- Toast Notification ----
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ---- Mobile Menu ----
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Smooth Scroll ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---- Analytics (placeholder) ----
  function trackEvent(eventName, data) {
    // Will connect to analytics backend later
    console.log('[AutomateHub]', eventName, data);
  }

  // Track page view
  function trackPageView() {
    const views = JSON.parse(localStorage.getItem('automatehub_views') || '{}');
    const today = new Date().toISOString().split('T')[0];
    views[today] = (views[today] || 0) + 1;
    localStorage.setItem('automatehub_views', JSON.stringify(views));
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function() {
    renderToolsGrid();
    initWaitlistForms();
    initMobileMenu();
    initSmoothScroll();
    trackPageView();
  });

})();
