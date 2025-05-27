// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('preferredLang') || 'en';
    const telegramBotToken = '8068702402:AAESlu_bsAGy5k1ThuzjxrkkpBZ1f4ZCbZo';
    const telegramChatId = '6076273140';

    // --- Language Functionality ---
    const langToggle = document.getElementById('lang-toggle');
    const langEn = document.getElementById('lang-en');
    const langBn = document.getElementById('lang-bn');
    const banglaIntroP = document.getElementById('bangla-intro');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);

        if (lang === 'bn') {
            langEn.classList.remove('active-lang');
            langBn.classList.add('active-lang');
            if (banglaIntroP) banglaIntroP.style.display = 'inline-block';
        } else {
            langBn.classList.remove('active-lang');
            langEn.classList.add('active-lang');
            if (banglaIntroP) banglaIntroP.style.display = 'none';
        }

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.hasAttribute('data-lang-key-placeholder')) {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'TITLE' || el.id === 'about-content' || el.id === 'why-donate-content' || el.id === 'faq-content') {
                     // For elements where we set innerHTML or textContent for large blocks
                    if (el.tagName === 'TITLE') {
                        el.textContent = translations[lang][key] + " - Ayat's Halal Support";
                    } else {
                         el.innerHTML = translations[lang][key];
                    }
                } else {
                    el.innerHTML = translations[lang][key]; // Use innerHTML to render emojis if any in keys
                }
            }
        });
        parseTwemoji();
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'en' ? 'bn' : 'en';
            setLanguage(newLang);
        });
    }
    setLanguage(currentLang); // Set initial language

    // --- Twemoji Parsing ---
    function parseTwemoji() {
        if (typeof twemoji !== 'undefined') {
            twemoji.parse(document.body, {
                folder: 'svg',
                ext: '.svg'
            });
        }
    }
    parseTwemoji(); // Initial parse

    // --- Hamburger Menu ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // --- Active Nav Link ---
    // This simple version assumes file names match keys or specific logic is needed
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('#main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active-nav');
        } else {
            link.classList.remove('active-nav');
        }
    });


    // --- Lottie Animation (Homepage only) ---
    const lottieContainer = document.getElementById('lottie-welcome');
    if (lottieContainer) {
        const player = document.createElement('lottie-player');
        player.setAttribute('src', 'assets/lottie/welcome-animation.json'); // PATH TO YOUR LOTTIE JSON
        player.setAttribute('background', 'transparent');
        player.setAttribute('speed', '1');
        player.setAttribute('style', 'width: 100%; height: 100%;');
        player.setAttribute('loop', '');
        player.setAttribute('autoplay', '');
        lottieContainer.appendChild(player);
    }

    // --- Copy Buttons (Homepage only) ---
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const numberElement = document.getElementById(targetId);
            if (numberElement) {
                navigator.clipboard.writeText(numberElement.textContent)
                    .then(() => {
                        const originalText = translations[document.documentElement.lang].copyButtonText;
                        button.textContent = translations[document.documentElement.lang].copiedButtonText;
                        button.classList.add('copied');
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.classList.remove('copied');
                            parseTwemoji(); // Re-parse if originalText had an emoji
                        }, 2000);
                    })
                    .catch(err => console.error('Failed to copy: ', err));
            }
        });
    });

    // --- Donate Form Submission (Homepage only) ---
    const donateForm = document.getElementById('donate-form');
    const formStatus = document.getElementById('form-status');

    if (donateForm && formStatus) {
        donateForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const donorName = document.getElementById('donor-name').value.trim();
            const donorDescription = document.getElementById('donor-description').value.trim();
            const lang = document.documentElement.lang;

            let message = `🔔 New Support Note!\n\n`;
            if (donorName) message += `👤 Name: ${donorName}\n`;
            if (donorDescription) message += `💬 Message: ${donorDescription}\n`;
            if (!donorName && !donorDescription) message += `Someone sent an empty support note. Maybe they'll donate directly! 😊`;

            // Show loading/sending status
            formStatus.textContent = 'Sending...';
            formStatus.className = '';


            try {
                const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: telegramChatId,
                        text: message,
                        parse_mode: 'Markdown' // Or 'HTML' if you prefer
                    }),
                });

                const result = await response.json();

                if (result.ok) {
                    formStatus.textContent = translations[lang].donationThanks;
                    formStatus.className = 'success-message';
                    donateForm.reset();
                } else {
                    formStatus.textContent = translations[lang].donationError + ` (TG: ${result.description || 'Unknown error'})`;
                    formStatus.className = 'error-message';
                    console.error('Telegram API error:', result);
                }
            } catch (error) {
                formStatus.textContent = translations[lang].donationError;
                formStatus.className = 'error-message';
                console.error('Fetch error:', error);
            }
            parseTwemoji(); // Re-parse for emojis in status messages
        });
    }
});
