// FeelVision User Guide - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const siteNav = document.querySelector('.site-nav');

    if (mobileMenuToggle && siteNav) {
        mobileMenuToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (siteNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Active navigation highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.site-nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });

    // Table of Contents highlighting
    const tocLinks = document.querySelectorAll('.table-of-contents a');
    const headings = document.querySelectorAll('.page-content h2, .page-content h3');

    if (tocLinks.length > 0 && headings.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            headings.forEach(heading => {
                const sectionTop = heading.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = heading.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Copy code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--radius-sm);
            cursor: pointer;
            font-size: 0.875rem;
        `;

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);

        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });

    // External link indicator
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('aria-label', 'Opens in new tab');
        }
    });

    // Search functionality (basic)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            const content = document.querySelector('.page-content');
            
            if (query.length < 2) {
                // Reset highlighting
                content.innerHTML = content.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
                return;
            }

            // Remove existing highlights
            content.innerHTML = content.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');

            // Add new highlights
            const walker = document.createTreeWalker(
                content,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            const textNodes = [];
            let node;
            while (node = walker.nextNode()) {
                if (node.textContent.toLowerCase().includes(query)) {
                    textNodes.push(node);
                }
            }

            textNodes.forEach(textNode => {
                const span = document.createElement('span');
                const regex = new RegExp(`(${query})`, 'gi');
                span.innerHTML = textNode.textContent.replace(regex, '<mark>$1</mark>');
                textNode.parentNode.replaceChild(span, textNode);
            });
        });
    }

    // Progress indicator for long pages
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--primary-color);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: var(--shadow-md);
        transition: all 0.3s;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Escape to close mobile menu
        if (e.key === 'Escape' && siteNav.classList.contains('active')) {
            siteNav.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }

        // Ctrl/Cmd + K for search (if search exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print';
    printButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        padding: 0.75rem 1.5rem;
        background: var(--bg-dark);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        cursor: pointer;
        z-index: 1000;
        box-shadow: var(--shadow-md);
        display: none;
    `;
    document.body.appendChild(printButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            printButton.style.display = 'block';
        } else {
            printButton.style.display = 'none';
        }
    });

    printButton.addEventListener('click', function() {
        window.print();
    });

    console.log('FeelVision User Guide loaded successfully');
});
