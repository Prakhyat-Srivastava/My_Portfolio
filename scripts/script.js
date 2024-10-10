// Section Scroll Animations
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.innerHeight / 1.3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < scrollPosition) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealSectionsOnScroll);
revealSectionsOnScroll();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a, .mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Active Link Highlighting for Navbar
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a, .mobile-nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 80) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-active');
});

// Continuous Scrolling Effect for Certifications Section
const certificationsContainer = document.querySelector('.certifications-container');
const certificationCards = document.querySelectorAll('.certification-card');

// Clone certification cards to create a seamless scrolling effect
if (certificationsContainer) {
    certificationCards.forEach(card => {
        const clone = card.cloneNode(true);
        certificationsContainer.appendChild(clone);
    });

    function adjustScrollSpeed() {
        const containerWidth = certificationsContainer.scrollWidth;
        const cardWidth = certificationCards[0].offsetWidth;
        const speed = (containerWidth / cardWidth) * 6; // Adjust speed ratio here
        certificationsContainer.style.animationDuration = `${speed}s`;
    }
    adjustScrollSpeed();
}

// Continuous Scrolling Effect for Projects Section
const projectsContainer = document.querySelector('.projects-container');
const projectCards = document.querySelectorAll('.project-card');

// Clone project cards to create a seamless scrolling effect
if (projectsContainer) {
    projectCards.forEach(card => {
        const clone = card.cloneNode(true);
        projectsContainer.appendChild(clone);
    });
}


// Modal Handling for "Hire Me" Section
const hireMeBtn = document.querySelector(".hire-me-btn");
const hireMeModal = document.getElementById("hire-me-modal");
const closeHireMeBtn = hireMeModal.querySelector(".close-btn");

// Open the Hire Me modal
if (hireMeBtn && hireMeModal) {
    hireMeBtn.addEventListener("click", () => {
        hireMeModal.style.display = "block";
    });
}

// Close the modal on click of close button or outside the modal
if (closeHireMeBtn) {
    closeHireMeBtn.addEventListener("click", () => {
        closeModal(hireMeModal);
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === hireMeModal) {
            closeModal(hireMeModal);
        }
    });
}

// Function to close the modal with animation
function closeModal(modalElement) {
    const modalContent = modalElement.querySelector('.modal-content');
    modalContent.style.animation = 'slideUp 0.5s ease-in'; // Trigger slide-up animation
    setTimeout(() => {
        modalElement.style.display = "none";
        modalContent.style.animation = 'slideDown 0.5s ease-out'; // Reset animation
    }, 500); // Duration of the slide-up animation
}

// Experience Item Expansion
const experienceItems = document.querySelectorAll('.experience-card');

experienceItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});

// Full Certificate Modal Handling
const certificateModal = document.getElementById('certificate-modal');
const fullCertificateImage = document.getElementById('full-certificate');
const certificateThumbnails = document.querySelectorAll('.certificate-thumbnail');
const certificateClose = document.querySelector('#certificate-modal .close-btn');

certificateThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        const certificateSrc = thumbnail.querySelector('img').src;
        fullCertificateImage.src = certificateSrc;
        certificateModal.style.display = "block";
    });
});

if (certificateClose) {
    certificateClose.addEventListener('click', () => {
        certificateModal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === certificateModal) {
            certificateModal.style.display = "none";
        }
    });
}

// Additional Slide-Up Animation for Exit
const style = document.createElement('style');
style.textContent = `
@keyframes slideUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100px); opacity: 0; }
}
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');

    function showSkillProgress() {
        skillItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Add 'visible' class when the item is within the viewport
            if (itemPosition < windowHeight - 50) {
                item.classList.add('visible');
            }
        });
    }

    // Trigger the function on scroll and when the page loads
    window.addEventListener('scroll', showSkillProgress);
    showSkillProgress();
});

// Close Mobile Navigation on Link Click
document.querySelectorAll('.mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        // Scroll to the section as usual
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close the mobile navigation menu after clicking a link
        mobileNav.classList.remove('nav-active');
    });
});

