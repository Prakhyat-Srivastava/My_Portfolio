/* ============================================
   PORTFOLIO MAIN JAVASCRIPT - PREMIUM EDITION
   Prakhyat Nandan Srivastava - Data Analyst
   Enhanced with 3D Effects, Notification Toast & Dynamic Rendering
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initCustomCursor();
    initTypewriter();
    initScrollAnimations();
    initScrollToTop();
    initDataParticles();
    initParallax();
    init3DTilt();
    
    // Render all dynamic content
    renderAboutStats();
    renderSkills();
    renderTechnologies();
    renderAITools();
    renderProjects();
    renderCertifications();
    renderCertStats();
    renderExperience();
    renderEducation();
    renderResearch();
    
    // Initialize modals and popups
    initModal();
    initNotificationToast();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const cursorRing = document.querySelector('.cursor-ring');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (!cursorRing || !cursorDot) return;
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .cert-card, .skill-tag, .tech-card, .ai-tool-card, .contact-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorRing.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement || typeof typewriterTexts === 'undefined') return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = typewriterTexts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item, .edu-card, .about-glass-card, .research-card, .tech-card, .ai-tool-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });
}

// Add animation CSS
const animStyle = document.createElement('style');
animStyle.textContent = `
    .animate-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animStyle);

// ============================================
// SCROLL TO TOP
// ============================================
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// DATA PARTICLES BACKGROUND
// ============================================
function initDataParticles() {
    const container = document.getElementById('dataParticles');
    if (!container) return;
    
    const dataSymbols = ['0', '1', '∑', 'π', '√', '∫', 'Δ', 'λ', 'θ', 'σ', 'μ', 'α', 'β', 'γ', '∂', '∞', '≠', '≈', '≤', '≥'];
    const particleCount = window.innerWidth < 768 ? 15 : 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.textContent = dataSymbols[Math.floor(Math.random() * dataSymbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.fontSize = (Math.random() * 8 + 10) + 'px';
        container.appendChild(particle);
    }
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    if (!orbs.length) return;
    
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    let ticking = false;
    
    document.addEventListener('mousemove', (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                
                orbs.forEach((orb, index) => {
                    const speed = (index + 1) * 15;
                    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ============================================
// 3D TILT EFFECT
// ============================================
function init3DTilt() {
    const cards = document.querySelectorAll('.project-card, .cert-card, .skill-category, .about-glass-card, .edu-card, .timeline-content, .research-card, .tech-card, .ai-tool-card');
    
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ============================================
// RENDER ABOUT STATS (AUTO-CALCULATED)
// ============================================
function renderAboutStats() {
    const container = document.getElementById('aboutStats');
    if (!container || typeof statsData === 'undefined') return;
    
    container.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${statsData.certifications}+</span>
            <span class="stat-label">Certifications</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${statsData.projects}+</span>
            <span class="stat-label">Projects</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${statsData.technologies}+</span>
            <span class="stat-label">Technologies</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${statsData.since}</span>
            <span class="stat-label">Since</span>
        </div>
    `;
}

// ============================================
// RENDER SKILLS
// ============================================
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container || typeof technicalSkillsData === 'undefined') return;
    
    const iconMap = {
        analytics: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
        chart: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
        code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
        brain: '<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 12h.01"/>'
    };
    
    container.innerHTML = technicalSkillsData.map(skill => `
        <div class="skill-category">
            <div class="skill-header">
                <div class="skill-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${iconMap[skill.icon] || iconMap.analytics}
                    </svg>
                </div>
                <h3>${skill.category}</h3>
            </div>
            <div class="skill-tags">
                ${skill.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER TECHNOLOGIES
// ============================================
function renderTechnologies() {
    const container = document.getElementById('technologiesGrid');
    if (!container || typeof technologiesData === 'undefined') return;
    
    const techIcons = {
        python: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>',
        sql: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
        excel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
        powerbi: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
        tableau: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/>',
        aws: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',
        azure: '<path d="M12 2L2 12h10v10l10-10H12V2z"/>',
        r: '<circle cx="12" cy="12" r="10"/><path d="M8 8h4c2 0 3 1 3 3s-1 3-3 3h-1v4H8V8zm2 2v4h2c1 0 1.5-.5 1.5-1.5S13 11 12 11h-2z"/>',
        jupyter: '<circle cx="12" cy="12" r="9"/><path d="M8 12c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4-1-4-3z"/>',
        git: '<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M9 6h6"/>',
        pandas: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        numpy: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'
    };
    
    const techColors = {
        python: '#3776ab',
        sql: '#f29111',
        excel: '#217346',
        powerbi: '#f2c811',
        tableau: '#e97627',
        aws: '#ff9900',
        azure: '#0078d4',
        r: '#276dc3',
        jupyter: '#f37626',
        git: '#f05032',
        pandas: '#150458',
        numpy: '#013243'
    };
    
    container.innerHTML = technologiesData.map(tech => `
        <div class="tech-card">
            <div class="tech-icon" style="color: ${techColors[tech.icon] || '#8b5cf6'}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    ${techIcons[tech.icon] || techIcons.python}
                </svg>
            </div>
            <div class="tech-name">${tech.name}</div>
            <div class="tech-category">${tech.category}</div>
            <span class="tech-proficiency">${tech.proficiency}</span>
        </div>
    `).join('');
}

// ============================================
// RENDER AI TOOLS
// ============================================
function renderAITools() {
    const container = document.getElementById('aiToolsGrid');
    if (!container || typeof aiToolsData === 'undefined') return;
    
    const aiIcons = {
        chatgpt: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
        gemini: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
        claude: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',
        cursor: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',
        kimi: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/>',
        grok: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/>'
    };
    
    const aiColors = {
        chatgpt: '#10a37f',
        gemini: '#4285f4',
        claude: '#d4a574',
        cursor: '#6366f1',
        kimi: '#8b5cf6',
        grok: '#f97316'
    };
    
    container.innerHTML = aiToolsData.map(tool => `
        <div class="ai-tool-card">
            <div class="ai-tool-icon" style="color: ${aiColors[tool.icon] || '#8b5cf6'}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${aiIcons[tool.icon] || aiIcons.chatgpt}
                </svg>
            </div>
            <div class="ai-tool-content">
                <div class="ai-tool-name">${tool.name}</div>
                <div class="ai-tool-description">${tool.description}</div>
                <div class="ai-tool-usecase">${tool.useCase}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container || typeof projectsData === 'undefined') return;
    
    container.innerHTML = projectsData.map(project => `
        <article class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.githubLink ? `
                            <a href="${project.githubLink}" target="_blank" class="project-link">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GitHub
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================
// RENDER CERTIFICATIONS
// ============================================
function renderCertifications() {
    const container = document.getElementById('certificationsGrid');
    if (!container || typeof certificationsData === 'undefined') return;
    
    container.innerHTML = certificationsData.map(cert => `
        <article class="cert-card" data-cert-id="${cert.id}">
            <div class="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <div class="cert-image">
                <img src="${cert.image}" alt="${cert.name}" loading="lazy">
                <div class="cert-overlay">
                    <span class="cert-view-text">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="16"/>
                            <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                        Click to View
                    </span>
                </div>
            </div>
            <div class="cert-content">
                <h3 class="cert-title">${cert.name}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <div class="cert-meta">
                    <span class="cert-date">${cert.date}</span>
                    <span class="cert-verified">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Verified
                    </span>
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================
// RENDER CERT STATS (AUTO-CALCULATED)
// ============================================
function renderCertStats() {
    const container = document.getElementById('certStats');
    if (!container || typeof statsData === 'undefined') return;
    
    container.innerHTML = `
        <div class="cert-stat-item">
            <span class="cert-stat-number">${statsData.certifications}</span>
            <span class="cert-stat-label">Certifications</span>
        </div>
        <div class="cert-stat-item">
            <span class="cert-stat-number">3</span>
            <span class="cert-stat-label">Cloud Platforms</span>
        </div>
        <div class="cert-stat-item">
            <span class="cert-stat-number">${statsData.awsCerts}</span>
            <span class="cert-stat-label">AWS Certs</span>
        </div>
        <div class="cert-stat-item">
            <span class="cert-stat-number">IIT</span>
            <span class="cert-stat-label">Premier Institute</span>
        </div>
        <div class="cert-stat-item">
            <span class="cert-stat-number">${statsData.since}</span>
            <span class="cert-stat-label">Since</span>
        </div>
    `;
}

// ============================================
// RENDER EXPERIENCE
// ============================================
function renderExperience() {
    const container = document.getElementById('experienceTimeline');
    if (!container || typeof experienceData === 'undefined') return;
    
    container.innerHTML = experienceData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title-group">
                        <div class="timeline-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                            </svg>
                        </div>
                        <div class="timeline-title-wrap">
                            <h3>${exp.role}</h3>
                            <p class="timeline-company">${exp.company}</p>
                        </div>
                    </div>
                    <span class="timeline-type">${exp.type}</span>
                </div>
                <div class="timeline-meta">
                    <span class="timeline-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${exp.duration}
                    </span>
                    <span class="timeline-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        ${exp.location}
                    </span>
                </div>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-skills">
                    ${exp.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER EDUCATION
// ============================================
function renderEducation() {
    const container = document.getElementById('educationGrid');
    if (!container || typeof educationData === 'undefined') return;
    
    container.innerHTML = educationData.map(edu => `
        <div class="edu-card">
            <div class="edu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
            </div>
            <div class="edu-content">
                <div class="edu-header">
                    <h3 class="edu-title">${edu.degree}</h3>
                    ${edu.showCgpa ? `<span class="edu-cgpa">${edu.cgpa}</span>` : ''}
                </div>
                <p class="edu-school">${edu.school}</p>
                <p class="edu-year">${edu.year}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER RESEARCH
// ============================================
function renderResearch() {
    const container = document.getElementById('researchCard');
    if (!container || typeof researchData === 'undefined') return;
    
    container.innerHTML = `
        <div class="research-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
            ${researchData.indexed}
        </div>
        <h3 class="research-title">${researchData.title}</h3>
        <p class="research-journal">${researchData.journal} | DOI: ${researchData.doi}</p>
        <p class="research-abstract">${researchData.abstract}</p>
        <a href="${researchData.link}" target="_blank" class="research-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            View Publication
        </a>
    `;
}

// ============================================
// CERTIFICATE MODAL
// ============================================
function initModal() {
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    const modalInfo = document.getElementById('modalInfo');
    const modalClose = document.getElementById('modalClose');
    
    if (!modal || !modalImage || !modalInfo || !modalClose) return;
    
    document.addEventListener('click', (e) => {
        const certCard = e.target.closest('.cert-card');
        if (certCard) {
            const certId = parseInt(certCard.dataset.certId);
            const cert = certificationsData.find(c => c.id === certId);
            
            if (cert) {
                modalImage.src = cert.image;
                modalImage.alt = cert.name;
                modalInfo.innerHTML = `
                    <h3>${cert.name}</h3>
                    <p>Issued by: <span style="color: var(--color-cyan);">${cert.issuer}</span></p>
                    <p>Date: <span style="color: var(--color-purple);">${cert.date}</span></p>
                    ${cert.credentialId ? `<p>Credential ID: ${cert.credentialId}</p>` : ''}
                    ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">Verify Credential</a>` : ''}
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// NOTIFICATION TOAST (SMALL SIDEBAR STYLE)
// ============================================
function initNotificationToast() {
    const toast = document.getElementById('notificationToast');
    const toastClose = document.getElementById('toastClose');
    const toastHireBtn = document.getElementById('toastHireBtn');
    
    if (!toast || !toastClose) return;
    
    // Create notification sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playNotificationSound() {
        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('Notification sound not available');
        }
    }
    
    // Helper function to show toast
    function showToast() {
        if (!sessionStorage.getItem('toastShown')) {
            toast.classList.add('active');
            playNotificationSound();
            sessionStorage.setItem('toastShown', 'true');
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                toast.classList.remove('active');
            }, 10000);
        }
    }
    
    // Show toast after 8 seconds
    setTimeout(() => {
        showToast();
    }, 8000);
    
    // Track clicks and show after 3 clicks
    let clickCount = 0;
    document.addEventListener('click', () => {
        if (!sessionStorage.getItem('toastShown')) {
            clickCount++;
            if (clickCount === 3) {
                showToast();
            }
        }
    });
    
    // Close toast
    toastClose.addEventListener('click', () => {
        toast.classList.remove('active');
    });
    
    // Handle Hire Me button
    if (toastHireBtn) {
        toastHireBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toast.classList.remove('active');
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
