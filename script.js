 // Love Popup Functions
        function openLovePopup() {
            document.getElementById('lovePopup').classList.add('active');
            document.getElementById('popupOverlay').classList.add('active');
            createConfetti();
        }

        function closeLovePopup() {
            document.getElementById('lovePopup').classList.remove('active');
            document.getElementById('popupOverlay').classList.remove('active');
        }

        // Create confetti when popup opens
        function createConfetti() {
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.fontSize = '2rem';
                confetti.textContent = ['❤️', '💖', '💕', '💝', '🌟', '✨'][Math.floor(Math.random() * 6)];
                confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
                confetti.style.zIndex = '2001';
                confetti.style.pointerEvents = 'none';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }
        }

        // Add confetti animation
        const confettiStyle = document.createElement('style');
        confettiStyle.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(confettiStyle);

        // Create floating hearts
        function createFloatingHearts() {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = ['❤️', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (8 + Math.random() * 4) + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 12000);
            }, 2000);
        }

        // Create sparkles
        function createSparkles() {
            for (let i = 0; i < 30; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 8 + 's';
                document.body.appendChild(sparkle);
            }
        }

        // Create floating particles
        function createParticles() {
            const particleCount = window.innerWidth < 768 ? 40 : 80;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                document.body.appendChild(particle);
            }
        }

        // Parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            document.querySelectorAll('.orb').forEach((orb, index) => {
                const speed = (index + 1) * 0.3;
                orb.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });

            // Parallax for gallery items
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                const speed = 0.05 + (index * 0.01);
                const x = (e.clientX - window.innerWidth / 2) * speed;
                const y = (e.clientY - window.innerHeight / 2) * speed;
                item.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Smooth scroll reveal effect
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Initialize
        window.addEventListener('load', () => {
            createParticles();
            createFloatingHearts();
            createSparkles();
            
            // Observe all gallery items
            document.querySelectorAll('.gallery-item').forEach(item => {
                observer.observe(item);
            });
        });

        // Add sparkle effect on click
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function(e) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.left = e.clientX + 'px';
                sparkle.style.top = e.clientY + 'px';
                sparkle.style.width = '10px';
                sparkle.style.height = '10px';
                sparkle.style.background = '#d4af37';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
                document.body.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 600);
            });
        });

        // Sparkle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% { transform: scale(0) rotate(0deg); opacity: 1; }
                100% { transform: scale(3) rotate(180deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Hello Kitty interactions
        const helloKitty = document.getElementById('helloKitty');
        
        // Add heart explosion animation
        const explosionStyle = document.createElement('style');
        explosionStyle.textContent = `
            @keyframes heartExplode {
                0% { 
                    transform: translate(0, 0) scale(0) rotate(0deg); 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(var(--tx), var(--ty)) scale(1) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(explosionStyle);
        
        // Blink randomly
        setInterval(() => {
            if (Math.random() > 0.7) {
                helloKitty.classList.add('blink');
                setTimeout(() => {
                    helloKitty.classList.remove('blink');
                }, 300);
            }
        }, 3000);

        // Click interaction - hearts explosion
        helloKitty.addEventListener('click', function() {
            const rect = this.getBoundingClientRect();
            
            // Create hearts explosion
            for (let i = 0; i < 12; i++) {
                const heart = document.createElement('div');
                heart.textContent = ['💕', '💖', '💝', '❤️', '🎀'][Math.floor(Math.random() * 5)];
                heart.style.position = 'fixed';
                heart.style.left = rect.left + rect.width / 2 + 'px';
                heart.style.top = rect.top + rect.height / 2 + 'px';
                heart.style.fontSize = '2rem';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1001';
                
                const angle = (Math.PI * 2 * i) / 12;
                const distance = 80 + Math.random() * 40;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                heart.style.animation = `heartExplode 1.2s ease-out forwards`;
                heart.style.setProperty('--tx', tx + 'px');
                heart.style.setProperty('--ty', ty + 'px');
                
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 1200);
            }
            
            // Play cute sound effect (visual feedback)
            this.style.transform = 'scale(0.8) rotate(10deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });