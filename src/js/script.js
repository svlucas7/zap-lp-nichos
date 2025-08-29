document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    initHeaderScroll();
    initBackToTop();
    initFormEnhancements();
    initTabsWidget();
    initAccordion();
    initVideoLoader();
    initFacebookPixelTracking();
    
    // Facebook Pixel tracking helper
    function initFacebookPixelTracking() {
        // Adicionar rastreamento específico para links do WhatsApp
        function enhanceWhatsAppTracking() {
            const whatsappLinks = document.querySelectorAll('a[href*="api.whatsapp.com"], a[href*="whatsapp.com"], .whatsapp-btn');
            
            whatsappLinks.forEach((link, index) => {
                link.addEventListener('click', function(e) {
                    console.log('WhatsApp link clicado:', this.href);
                    
                    // Disparar evento do Facebook Pixel
                    if (typeof fbq !== 'undefined') {
                        fbq('track', 'Contact', {
                            content_name: 'WhatsApp Contact',
                            content_category: 'Contact Method'
                        });
                        console.log('Facebook Pixel Contact event enviado');
                    }
                });
            });
        }
        
        // Monitorar formulário RD Station
        function enhanceFormTracking() {
            // Observer para detectar quando o formulário é carregado
            const formObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        const forms = document.querySelectorAll('form');
                        forms.forEach(form => {
                            if (!form.hasAttribute('data-fb-tracked')) {
                                form.setAttribute('data-fb-tracked', 'true');
                                
                                form.addEventListener('submit', function(e) {
                                    console.log('Formulário enviado:', form);
                                    
                                    if (typeof fbq !== 'undefined') {
                                        fbq('track', 'Lead', {
                                            content_name: 'Contact Form',
                                            content_category: 'Lead Generation'
                                        });
                                        console.log('Facebook Pixel Lead event enviado');
                                    }
                                });
                            }
                        });
                    }
                });
            });
            
            formObserver.observe(document.body, { childList: true, subtree: true });
        }
        
        // Executar imediatamente
        enhanceWhatsAppTracking();
        enhanceFormTracking();
        
        // Re-executar após delay para elementos dinâmicos
        setTimeout(() => {
            enhanceWhatsAppTracking();
        }, 3000);
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                
                // Animate hamburger icon
                const icon = menuButton.querySelector('svg');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(90deg)';
                }
            });

            // Close mobile menu when clicking on links
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuButton.querySelector('svg').style.transform = 'rotate(0deg)';
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    menuButton.querySelector('svg').style.transform = 'rotate(0deg)';
                }
            });
        }
    }

    // Scroll animations with Intersection Observer
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.scroll-animate');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
            
            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Back to top button
    function initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });

            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Form enhancements
    function initFormEnhancements() {
        // Phone number formatting
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 11) {
                    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                } else if (value.length >= 7) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else if (value.length >= 3) {
                    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
                }
                e.target.value = value;
            });
        });        // Form submission (only for non-RD Station forms)
        const contactForm = document.querySelector('footer form:not([data-rd-station])');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                // Loading state
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                submitButton.classList.add('loading');
                
                // Simulate form submission (replace with actual endpoint)
                setTimeout(() => {
                    // Success state
                    submitButton.textContent = '✓ Orçamento Enviado!';
                    submitButton.classList.remove('loading');
                    submitButton.classList.add('bg-green-500');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    showNotification('Orçamento enviado com sucesso! Entraremos em contato em breve.', 'success');
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        submitButton.classList.remove('bg-green-500');
                    }, 3000);
                }, 2000);
            });
        }
    }    // Notification system - iOS Style
    function showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        // iOS-style notification container - positioned at top center
        notification.className = 'notification-ios';
        
        // Apply inline styles for better mobile compatibility
        notification.style.cssText = `
            position: fixed;
            top: 1rem;
            left: 50%;
            z-index: 9999;
            width: calc(100vw - 2rem);
            max-width: 24rem;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            transition: all 0.5s ease-out;
            transform: translateX(-50%) translateY(-100%);
        `;
        
        // Different styles based on type
        let iconColor = 'text-blue-500';
        let icon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>`;
        
        if (type === 'success') {
            iconColor = 'text-green-500';
            icon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>`;
        } else if (type === 'error') {
            iconColor = 'text-red-500';
            icon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L5.268 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>`;
        } else if (type === 'whatsapp') {
            iconColor = 'text-green-600';
            icon = `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>`;
        }
        
        // iOS-style content
        notification.innerHTML = `
            <div class="flex items-start p-4">
                <div class="flex-shrink-0 ${iconColor}">
                    ${icon}
                </div>
                <div class="ml-3 flex-1">
                    <p class="text-sm font-medium text-gray-900 dark:text-white leading-5">
                        ${message}
                    </p>
                </div>
                <button class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" onclick="this.parentElement.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        `;        // Check for existing notifications and stack them
        const existingNotifications = document.querySelectorAll('.notification-ios');
        const offset = existingNotifications.length * 80; // 80px spacing between notifications
        
        document.body.appendChild(notification);
        
        // iOS-style slide down animation from top with better mobile support
        setTimeout(() => {
            notification.style.transform = `translateX(-50%) translateY(${offset}px)`;
            notification.style.opacity = '1';
        }, 50);
          // Add haptic-like effect (visual feedback)
        notification.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                this.style.transform = `translateX(-50%) translateY(${offset}px) scale(0.98)`;
                setTimeout(() => {
                    this.style.transform = `translateX(-50%) translateY(${offset}px) scale(1)`;
                }, 100);
            }
        });
        
        // Auto remove with iOS-style slide up animation
        setTimeout(() => {
            notification.style.transform = 'translateX(-50%) translateY(-100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                    // Restack remaining notifications
                    restackNotifications();
                }
            }, 500);
        }, duration);
        
        // Remove duplicates (keep only last 3 notifications)
        if (existingNotifications.length >= 3) {
            existingNotifications[0].remove();
        }
    }
    
    // Function to restack notifications after one is removed
    function restackNotifications() {
        const notifications = document.querySelectorAll('.notification-ios');
        notifications.forEach((notification, index) => {
            const offset = index * 80;
            notification.style.transform = `translateX(-50%) translateY(${offset}px)`;
        });
    }

    // Performance optimization: lazy load images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Initialize lazy loading
    initLazyLoading();

    // Add click tracking for analytics (optional)
    function trackClicks() {
        document.querySelectorAll('a[href^="#"], button').forEach(element => {
            element.addEventListener('click', (e) => {
                const elementText = e.target.textContent.trim();
                const elementType = e.target.tagName.toLowerCase();
                
                // Send to analytics (replace with your analytics code)
                console.log(`${elementType} clicked: ${elementText}`);
            });
        });
    }

    // Initialize click tracking
    trackClicks();

    // WhatsApp Click Tracking
    document.querySelectorAll('.whatsapp-btn, a[href*="whatsapp"]').forEach(button => {
        button.addEventListener('click', function() {
            // Show notification
            showNotification('Redirecionando para o WhatsApp...', 'success');
            
            // Track click (you can integrate with analytics here)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'WhatsApp',
                    event_label: 'Button Click',
                    value: 1
                });
            }
            
            // Add some visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });    // Create floating WhatsApp notifications
    function createWhatsAppNotification() {
        const notifications = [
            "💬 João acabou de solicitar um orçamento",
            "🎯 Maria está visualizando nossos produtos",
            "✅ Pedro confirmou seu pedido via WhatsApp",
            "📱 Ana está conversando conosco agora",
            "🚀 Carlos solicitou nosso portfólio completo",
            "✨ Beatriz aprovou a arte personalizada",
            "📞 Roberto está agendando uma reunião",
            "🎨 Fernanda recebeu sua proposta em 1h"
        ];
        
        const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
        showNotification(randomNotification, 'info', 4000);
    }

    // Show WhatsApp notifications periodically
    setInterval(createWhatsAppNotification, 15000); // Every 15 seconds    // Enhanced notification for WhatsApp interactions
    function showWhatsAppEngagement() {
        const engagementMessages = [
            "💡 Dica: Envie sua arte e receba orçamento em até 2h!",
            "⚡ Atendimento rápido via WhatsApp - estamos online!",
            "🎨 Precisa de arte personalizada? Fale conosco agora!",
            "📞 Dúvidas sobre prazos? WhatsApp é o mais rápido!",
            "🚀 Aprovação expressa em nosso sistema inteligente",
            "✨ Mais de 10.000 clientes satisfeitos confiam na Zap"
        ];
        
        const randomMessage = engagementMessages[Math.floor(Math.random() * engagementMessages.length)];
        
        setTimeout(() => {
            showNotification(randomMessage, 'whatsapp', 6000);
        }, 8000); // Show after 8 seconds on page
    }

    // Show engagement message once per session
    if (!sessionStorage.getItem('whatsapp-engagement-shown')) {
        showWhatsAppEngagement();
        sessionStorage.setItem('whatsapp-engagement-shown', 'true');
    }

    // Debug RD Station Form
    function checkRDStationForm() {
        const formContainer = document.getElementById('lp-vantagens-zap-b99ebee786b6cd7646e9');
        if (formContainer) {
            console.log('Container do formulário encontrado:', formContainer);
            
            // Verificar se o formulário foi criado após alguns segundos
            setTimeout(() => {
                const form = formContainer.querySelector('form');
                if (form) {
                    console.log('Formulário RD Station carregado com sucesso');
                } else {
                    console.warn('Formulário RD Station não foi carregado no container');
                }
            }, 3000);
        } else {
            console.error('Container do formulário não encontrado');
        }
    }

    // Verificar formulário após DOM carregar
    checkRDStationForm();

    // Tabs widget functionality
    function initTabsWidget() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length === 0 || tabContents.length === 0) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Show corresponding content
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Accordion functionality
    function initAccordion() {
        const accordionContainer = document.getElementById('diferenciais-accordion');
        if (!accordionContainer) return;

        const accordionItems = accordionContainer.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                const isActive = header.classList.contains('active');

                // Close all other items
                accordionItems.forEach(otherItem => {
                    otherItem.querySelector('.accordion-header').classList.remove('active');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherContent.classList.remove('show');
                    otherContent.style.maxHeight = null;
                });

                // Open the clicked item if it wasn't already active
                if (!isActive) {
                    header.classList.add('active');
                    content.classList.add('show');
                    // Set max-height to the content's scroll height for the animation
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });

        // Optional: Open the first item by default
        if (accordionItems.length > 0) {
            const firstHeader = accordionItems[0].querySelector('.accordion-header');
            const firstContent = accordionItems[0].querySelector('.accordion-content');
            
            firstHeader.classList.add('active');
            firstContent.classList.add('show');
            // We need to calculate scrollHeight after the element is rendered
            setTimeout(() => {
                 firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            }, 100);
        }
    }

    // YouTube Video Loader
    function initVideoLoader() {
        // This function is called from the onclick in HTML
        window.loadVideo = function(element, videoId) {
            const iframe = `
                <iframe 
                    class="w-full h-64 lg:h-96" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
                    title="Vídeo YouTube"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
            element.innerHTML = iframe;
            element.style.cursor = 'default';
        };
    }

});
