// Theme management
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Theme toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Announce theme change for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Theme changed to ${newTheme} mode`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Alt + T to toggle theme
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        if (themeToggle) {
            themeToggle.click();
        }
    }
});

// Detect system theme preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference if no saved preference exists
if (!localStorage.getItem('theme')) {
    const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    html.setAttribute('data-theme', systemTheme);
    localStorage.setItem('theme', systemTheme);
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    // Only update if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add skip to main content link for accessibility
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-from);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 100;
    border-radius: 0 0 4px 0;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Mark main content area
const mainContent = document.querySelector('.main-content');
if (mainContent) {
    mainContent.id = 'main-content';
    mainContent.setAttribute('tabindex', '-1');
}

// Console message for developers
console.log('%c👋 Developer FAQ Blog', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with accessibility and performance in mind', 'font-size: 14px; color: #764ba2;');
console.log('%cKeyboard shortcut: Alt + T to toggle theme', 'font-size: 12px; color: #666;');

// Contact Form Modal Management
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Web3Forms API key
const WEB3FORMS_API_KEY = 'b28b96ac-3be4-4dfa-9b88-7b2c210a80b6';

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        formStatus.style.display = 'none';
    });
}

// Close modal when clicking outside the content
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        formStatus.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.style.display === 'flex') {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        formStatus.style.display = 'none';
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        const formData = new FormData(contactForm);
        const data = {
            access_key: WEB3FORMS_API_KEY,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            from_name: 'Developer FAQ Contact Form'
        };
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                formStatus.className = 'form-status success';
                formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                formStatus.style.display = 'block';
                contactForm.reset();
                
                setTimeout(() => {
                    contactModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    formStatus.style.display = 'none';
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '✗ Error sending message. Please try again or email me directly.';
            formStatus.style.display = 'block';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}
// Visitor counter
function initVisitorCounter() {
    const counterElement = document.getElementById('visitor-counter');
    if (!counterElement) return;
    
    // Get or initialize visitor count
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }
    
    // Save updated count
    localStorage.setItem('visitorCount', visitorCount);
    
    // Update the display
    counterElement.textContent = `Developers: ${visitorCount.toLocaleString()}`;
}

// Initialize counter when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVisitorCounter);
} else {
    initVisitorCounter();
}