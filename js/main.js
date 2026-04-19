// ===== Translations =====
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Ana Sayfa',
        'nav.analyze': 'Analiz',
        'nav.history': 'Geçmiş',
        'nav.api': 'API Anahtarı Al',
        
        // Hero
        'hero.title1': 'Yapay Zeka Üretimi',
        'hero.title2': 'İçerikleri Tespit Edin',
        'hero.subtitle': 'Deepfake videoları, ses klonlamayı, yapay zeka ile üretilmiş görselleri ve sentetik metinleri yüksek doğruluk oranıyla tespit edin. Dijital manipülasyonlara karşı korunun.',
        'hero.cta': 'Analiz Başlat',
        'hero.accuracy': '% Doğruluk',
        'hero.speed': 'sn Ort. Hız',
        'hero.scanned': 'K+ Dosya Tarandı',
        
        // Demo
        'demo.riskScore': 'Risk Skoru',
        'demo.signal1': 'Yüz manipülasyonu tespit edildi',
        'demo.signal2': 'Doğal olmayan göz hareketi',
        
        // Features
        'features.badge': 'Özellikler',
        'features.title': 'Her Tür <span class="gradient-text">Yapay Zeka Manipülasyonunu</span> Tespit Edin',
        'features.subtitle': 'Çoklu ortam tespit motorumuz ses, video, görsel ve metinleri en güncel modellerle analiz eder.',
        'features.audio.title': 'Ses Deepfake',
        'features.audio.desc': 'Ses klonlama, sentetik konuşma ve ses manipülasyonlarını spektral analiz ile tespit edin.',
        'features.audio.item1': 'Ses klonlama tespiti',
        'features.audio.item2': 'Sentetik konuşma tanıma',
        'features.audio.item3': 'Ses birleştirme tespiti',
        'features.video.badge': 'En Popüler',
        'features.video.title': 'Video Deepfake',
        'features.video.desc': 'Yüz değiştirme, dudak senkronizasyonu ve sentetik video tespiti için kare kare analiz.',
        'features.video.item1': 'Yüz değiştirme tespiti',
        'features.video.item2': 'Zamansal tutarlılık kontrolü',
        'features.video.item3': 'GAN artifakt tespiti',
        'features.image.title': 'Yapay Zeka Görselleri',
        'features.image.desc': 'DALL-E, Stable Diffusion, Midjourney ve diğer yapay zeka modelleriyle üretilen görselleri tespit edin.',
        'features.image.item1': 'Diffusion model imzaları',
        'features.image.item2': 'GAN artifakt tespiti',
        'features.image.item3': 'Manipülasyon bölgesi haritalama',
        'features.text.title': 'Yapay Zeka Metni',
        'features.text.desc': 'ChatGPT, Claude ve diğer büyük dil modelleri tarafından üretilen içerikleri tespit edin.',
        'features.text.item1': 'Perplexity analizi',
        'features.text.item2': 'Stilometrik örüntü analizi',
        'features.text.item3': 'Cümle bazlı puanlama',
        'features.accuracy': 'Doğruluk',
        
        // How it works
        'how.badge': 'Süreç',
        'how.title': 'Nasıl <span class="gradient-text">Çalışır</span>',
        'how.subtitle': 'İçerik doğruluğunu doğrulamak için üç basit adım',
        'how.step1.title': 'Yükle',
        'how.step1.desc': 'Dosyanızı sürükleyip bırakın veya seçin. Ses, video, görsel ve metin desteği.',
        'how.step2.title': 'Analiz Et',
        'how.step2.desc': 'Yapay zeka modellerimiz içeriğinizi gelişmiş tespit algoritmalarıyla işler.',
        'how.step3.title': 'Sonuçlar',
        'how.step3.desc': 'Detaylı risk skorları, anahtar sinyaller ve dışa aktarma seçenekleri.',
        
        // CTA
        'cta.title': 'Yapay Zeka İçeriklerini Tespit Etmeye Hazır mısınız?',
        'cta.subtitle': 'Ücretsiz analiz yapmaya başlayın. Kredi kartı gerekmez.',
        'cta.button': 'Hemen Dene',
        
        // Footer
        'footer.tagline': 'Modern dünya için kurumsal düzeyde yapay zeka içerik tespiti.',
        'footer.product': 'Ürün',
        'footer.resources': 'Kaynaklar',
        'footer.docs': 'Dokümantasyon',
        'footer.blog': 'Blog',
        'footer.research': 'Araştırma',
        'footer.company': 'Şirket',
        'footer.about': 'Hakkımızda',
        'footer.contact': 'İletişim',
        'footer.careers': 'Kariyer',
        'footer.copyright': '© 2026 CyberShieldAI. Tüm hakları saklıdır.',
        'footer.pricing': 'Fiyatlandırma',
        
        // Banner
        'banner.text': '<strong>Demo:</strong> Modeller hata yapabilir. Sonuçları bağımsız olarak teyit ediniz.',
        
        // Analyze page
        'analyze.title': 'İçerik Analizi',
        'analyze.subtitle': 'Yapay zeka üretimi içerikleri tespit etmek için ses, video veya görsel yükleyin',
        'analyze.upload': 'Dosya Yükle',
        'analyze.text': 'Metin Analizi',
        'analyze.url': "URL'den",
        'analyze.dropzone': 'Dosyanızı buraya sürükleyin',
        'analyze.browse': 'veya seçmek için tıklayın',
        'analyze.audio': 'Ses',
        'analyze.video': 'Video',
        'analyze.image': 'Görsel',
        'analyze.limits': 'Maks dosya boyutu: 100MB • Desteklenen: MP3, WAV, MP4, MOV, JPG, PNG, WEBP',
        'analyze.result': 'Tespit Sonucu',
        'analyze.riskScore': 'Risk Skoru',
        'analyze.confidence': 'Model Güvenilirliği',
        'analyze.signals': 'Anahtar Sinyaller',
        'analyze.detected': 'tespit edildi',
        'analyze.download': 'Raporu İndir',
        'analyze.share': 'Paylaş',
        'analyze.new': 'Yeni Analiz',
        'analyze.noResult': 'Henüz Sonuç Yok',
        'analyze.noResultDesc': 'Analiz sonuçlarını görmek için bir dosya yükleyin',
        'analyze.pasteText': 'Analiz Edilecek Metni Yapıştırın',
        'analyze.textPlaceholder': 'Yapay zeka üretimi olup olmadığını analiz etmek istediğiniz metni buraya yapıştırın...',
        'analyze.chars': 'karakter',
        'analyze.analyzeText': 'Metni Analiz Et',
        'analyze.textResult': 'Metin Analiz Sonucu',
        'analyze.aiProb': 'YZ Olasılığı',
        'analyze.sentenceAnalysis': 'Cümle Analizi',
        'analyze.highAI': 'Yüksek YZ',
        'analyze.mediumAI': 'Orta',
        'analyze.lowAI': 'Düşük YZ',
        'analyze.urlTitle': "URL'den Analiz Et",
        'analyze.urlDesc': 'Ses, video veya görsel dosyasına doğrudan bağlantı girin',
        'analyze.sources': 'Desteklenen kaynaklar:',
        'analyze.directLink': 'Doğrudan Link',
        
        // History page
        'history.title': 'Analiz Geçmişi',
        'history.subtitle': 'Geçmiş analizlerinizi görüntüleyin ve yönetin',
        'history.clearAll': 'Tümünü Temizle',
        'history.newAnalysis': 'Yeni Analiz',
        'history.type': 'Tür',
        'history.allTypes': 'Tüm Türler',
        'history.riskLevel': 'Risk Seviyesi',
        'history.allLevels': 'Tüm Seviyeler',
        'history.low': 'Düşük (0-30)',
        'history.medium': 'Orta (31-60)',
        'history.high': 'Yüksek (61-100)',
        'history.search': 'Dosya ara...',
        'history.totalScans': 'Toplam Tarama',
        'history.highRisk': 'Yüksek Risk',
        'history.safe': 'Muhtemelen Güvenli',
        'history.avgScore': 'Ort. Risk Skoru',
        'history.noHistory': 'Analiz Geçmişi Yok',
        'history.noHistoryDesc': 'Geçmişinizi görmek için dosya analiz etmeye başlayın',
        'history.firstFile': 'İlk Dosyayı Analiz Et',
        
        // API page
        'api.badge': 'Beta Yakında',
        'api.title': 'API Hizmeti',
        'api.desc1': 'Beta sürümü yakın zamanda aktif olacaktır.',
        'api.desc2': 'REST tabanlı API altyapımız; ses, video, görsel ve metin analizi için ayrı endpoint\'ler, detaylı dokümantasyon ve SDK desteği ile geliştiricilere sunulacaktır.',
        'api.back': 'Ana Sayfaya Dön',
        
        // Pricing page
        'pricing.badge': 'Yakında',
        'pricing.title': 'Fiyatlandırma',
        'pricing.desc1': 'Kurumsal ve bireysel kullanıcılara özel planlar yakında sunulacaktır.',
        'pricing.desc2': '<strong>API Tabanlı:</strong> Kullanım bazlı fiyatlandırma, kurumsal hacim indirimleri ve özel SLA seçenekleri.<br><strong>Uygulama Tabanlı:</strong> Bireysel kullanıcılar için freemium model, gelişmiş özellikler için aylık/yıllık abonelik paketleri.',
        'pricing.desc3': 'Detaylı fiyat bilgisi ve erken erişim fırsatları için bizi takip edin.',
        
        // About page
        'about.title': 'Ekibimiz',
        'about.university': 'Bilkent Üniversitesi',
        'about.desc1': 'CyberShieldAI, Bilkent Üniversitesi Elektrik-Elektronik Mühendisliği bölümünde öğrenim gören üç 4. sınıf mühendislik öğrencisi tarafından geliştirilen, ürünleşme ve ticarileşme odaklı bir girişim projesidir.',
        'about.desc2': 'Ekibimiz; yapay zekâ, makine öğrenmesi, sinyal işleme ve bilgisayar ağları alanlarında araştırma ve geliştirme çalışmaları yürütmektedir.',
        'about.desc3': 'Akademik altyapımızı, gerçek dünyada karşılaşılan problemlere doğrudan karşılık verebilen, uygulanabilir ve sürdürülebilir mühendislik çözümlerine dönüştürmeyi hedefliyoruz.',
        'about.desc4': 'Erken aşamadan itibaren ürün geliştirme, hızlı prototipleme ve teknik demo oluşturma süreçlerinde aktif olarak yer aldık. CyberShieldAI, yapay zekâ kaynaklı yanıltıcı içeriklere karşı güvenilir, şeffaf ve doğrulanabilir çözümler geliştirmeyi amaçlayan; teknik derinliği uygulama odağıyla birleştiren bir yaklaşım üzerine inşa edilmektedir.',
        'about.teamMembers': 'Ekip Üyesi',
        'about.department': 'Bölüm',
        'about.graduation': 'Mezuniyet',
        
        // Contact page
        'contact.title': 'İletişim',
        'contact.desc': 'CyberShieldAI ekibiyle iletişime geçmek, iş birliği fırsatlarını değerlendirmek veya sorularınızı iletmek için bize ulaşın.',
        'contact.linkedin': 'LinkedIn'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.analyze': 'Analyze',
        'nav.history': 'History',
        'nav.api': 'Get API Key',
        
        // Hero
        'hero.title1': 'AI-Generated',
        'hero.title2': 'Content Detection',
        'hero.subtitle': 'Detect deepfake videos, voice cloning, AI-generated images, and synthetic text with high accuracy. Protect yourself against digital manipulation.',
        'hero.cta': 'Start Analysis',
        'hero.accuracy': '% Accuracy',
        'hero.speed': 's Avg. Speed',
        'hero.scanned': 'K+ Files Scanned',
        
        // Demo
        'demo.riskScore': 'Risk Score',
        'demo.signal1': 'Face manipulation detected',
        'demo.signal2': 'Unnatural eye movement',
        
        // Features
        'features.badge': 'Features',
        'features.title': 'Detect All Types of <span class="gradient-text">AI Manipulation</span>',
        'features.subtitle': 'Our multi-media detection engine analyzes audio, video, images, and text with cutting-edge models.',
        'features.audio.title': 'Audio Deepfake',
        'features.audio.desc': 'Detect voice cloning, synthetic speech, and audio manipulation with spectral analysis.',
        'features.audio.item1': 'Voice cloning detection',
        'features.audio.item2': 'Synthetic speech recognition',
        'features.audio.item3': 'Audio splicing detection',
        'features.video.badge': 'Most Popular',
        'features.video.title': 'Video Deepfake',
        'features.video.desc': 'Frame-by-frame analysis for face swapping, lip sync, and synthetic video detection.',
        'features.video.item1': 'Face swap detection',
        'features.video.item2': 'Temporal consistency check',
        'features.video.item3': 'GAN artifact detection',
        'features.image.title': 'AI Images',
        'features.image.desc': 'Detect images generated by DALL-E, Stable Diffusion, Midjourney, and other AI models.',
        'features.image.item1': 'Diffusion model signatures',
        'features.image.item2': 'GAN artifact detection',
        'features.image.item3': 'Manipulation region mapping',
        'features.text.title': 'AI Text',
        'features.text.desc': 'Detect content generated by ChatGPT, Claude, and other large language models.',
        'features.text.item1': 'Perplexity analysis',
        'features.text.item2': 'Stylometric pattern analysis',
        'features.text.item3': 'Sentence-level scoring',
        'features.accuracy': 'Accuracy',
        
        // How it works
        'how.badge': 'Process',
        'how.title': 'How It <span class="gradient-text">Works</span>',
        'how.subtitle': 'Three simple steps to verify content authenticity',
        'how.step1.title': 'Upload',
        'how.step1.desc': 'Drag and drop or select your file. Audio, video, image, and text support.',
        'how.step2.title': 'Analyze',
        'how.step2.desc': 'Our AI models process your content with advanced detection algorithms.',
        'how.step3.title': 'Results',
        'how.step3.desc': 'Detailed risk scores, key signals, and export options.',
        
        // CTA
        'cta.title': 'Ready to Detect AI Content?',
        'cta.subtitle': 'Start analyzing for free. No credit card required.',
        'cta.button': 'Try Now',
        
        // Footer
        'footer.tagline': 'Enterprise-grade AI content detection for the modern world.',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.docs': 'Documentation',
        'footer.blog': 'Blog',
        'footer.research': 'Research',
        'footer.company': 'Company',
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.careers': 'Careers',
        'footer.copyright': '© 2026 CyberShieldAI. All rights reserved.',
        'footer.pricing': 'Pricing',
        
        // Banner
        'banner.text': '<strong>Demo:</strong> Models may make mistakes. Please verify results independently.',
        
        // Analyze page
        'analyze.title': 'Content Analysis',
        'analyze.subtitle': 'Upload audio, video, or image to detect AI-generated content',
        'analyze.upload': 'Upload File',
        'analyze.text': 'Text Analysis',
        'analyze.url': 'From URL',
        'analyze.dropzone': 'Drag your file here',
        'analyze.browse': 'or click to browse',
        'analyze.audio': 'Audio',
        'analyze.video': 'Video',
        'analyze.image': 'Image',
        'analyze.limits': 'Max file size: 100MB • Supported: MP3, WAV, MP4, MOV, JPG, PNG, WEBP',
        'analyze.result': 'Detection Result',
        'analyze.riskScore': 'Risk Score',
        'analyze.confidence': 'Model Confidence',
        'analyze.signals': 'Key Signals',
        'analyze.detected': 'detected',
        'analyze.download': 'Download Report',
        'analyze.share': 'Share',
        'analyze.new': 'New Analysis',
        'analyze.noResult': 'No Results Yet',
        'analyze.noResultDesc': 'Upload a file to see analysis results',
        'analyze.pasteText': 'Paste Text to Analyze',
        'analyze.textPlaceholder': 'Paste the text you want to analyze for AI generation here...',
        'analyze.chars': 'characters',
        'analyze.analyzeText': 'Analyze Text',
        'analyze.textResult': 'Text Analysis Result',
        'analyze.aiProb': 'AI Probability',
        'analyze.sentenceAnalysis': 'Sentence Analysis',
        'analyze.highAI': 'High AI',
        'analyze.mediumAI': 'Medium',
        'analyze.lowAI': 'Low AI',
        'analyze.urlTitle': 'Analyze from URL',
        'analyze.urlDesc': 'Enter a direct link to audio, video, or image file',
        'analyze.sources': 'Supported sources:',
        'analyze.directLink': 'Direct Link',
        
        // History page
        'history.title': 'Analysis History',
        'history.subtitle': 'View and manage your past analyses',
        'history.clearAll': 'Clear All',
        'history.newAnalysis': 'New Analysis',
        'history.type': 'Type',
        'history.allTypes': 'All Types',
        'history.riskLevel': 'Risk Level',
        'history.allLevels': 'All Levels',
        'history.low': 'Low (0-30)',
        'history.medium': 'Medium (31-60)',
        'history.high': 'High (61-100)',
        'history.search': 'Search files...',
        'history.totalScans': 'Total Scans',
        'history.highRisk': 'High Risk',
        'history.safe': 'Likely Safe',
        'history.avgScore': 'Avg. Risk Score',
        'history.noHistory': 'No Analysis History',
        'history.noHistoryDesc': 'Start analyzing files to see your history',
        'history.firstFile': 'Analyze First File',
        
        // API page
        'api.badge': 'Beta Coming Soon',
        'api.title': 'API Service',
        'api.desc1': 'Beta version will be available soon.',
        'api.desc2': 'Our REST-based API infrastructure will be offered to developers with separate endpoints for audio, video, image, and text analysis, detailed documentation, and SDK support.',
        'api.back': 'Back to Home',
        
        // Pricing page
        'pricing.badge': 'Coming Soon',
        'pricing.title': 'Pricing',
        'pricing.desc1': 'Special plans for enterprise and individual users coming soon.',
        'pricing.desc2': '<strong>API-Based:</strong> Usage-based pricing, enterprise volume discounts, and custom SLA options.<br><strong>App-Based:</strong> Freemium model for individual users, monthly/annual subscription packages for advanced features.',
        'pricing.desc3': 'Follow us for detailed pricing information and early access opportunities.',
        
        // About page
        'about.title': 'Our Team',
        'about.university': 'Bilkent University',
        'about.desc1': 'CyberShieldAI is a startup project developed by three senior engineering students from Bilkent University\'s Electrical and Electronics Engineering department, focused on productization and commercialization.',
        'about.desc2': 'Our team conducts research and development in artificial intelligence, machine learning, signal processing, and computer networks.',
        'about.desc3': 'We aim to transform our academic background into applicable and sustainable engineering solutions that directly address real-world problems.',
        'about.desc4': 'From early stages, we have been actively involved in product development, rapid prototyping, and technical demo creation. CyberShieldAI is built on an approach that combines technical depth with application focus, aiming to develop reliable, transparent, and verifiable solutions against AI-generated misleading content.',
        'about.teamMembers': 'Team Members',
        'about.department': 'Department',
        'about.graduation': 'Graduation',
        
        // Contact page
        'contact.title': 'Contact',
        'contact.desc': 'Reach out to the CyberShieldAI team to get in touch, explore collaboration opportunities, or ask questions.',
        'contact.linkedin': 'LinkedIn'
    }
};

// Current language (default: Turkish)
let currentLang = localStorage.getItem('lang') || 'tr';

// Apply translations
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update page title based on current page
    const pageTitles = {
        'index.html': lang === 'tr' ? 'CyberShieldAI - Yapay Zeka İçerik Tespit Platformu' : 'CyberShieldAI - AI Content Detection Platform',
        'analyze.html': lang === 'tr' ? 'Analiz - CyberShieldAI' : 'Analyze - CyberShieldAI',
        'history.html': lang === 'tr' ? 'Geçmiş - CyberShieldAI' : 'History - CyberShieldAI',
        'api.html': lang === 'tr' ? 'API - CyberShieldAI' : 'API - CyberShieldAI',
        'pricing.html': lang === 'tr' ? 'Fiyatlandırma - CyberShieldAI' : 'Pricing - CyberShieldAI',
        'about.html': lang === 'tr' ? 'Hakkımızda - CyberShieldAI' : 'About Us - CyberShieldAI',
        'contact.html': lang === 'tr' ? 'İletişim - CyberShieldAI' : 'Contact - CyberShieldAI'
    };
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (pageTitles[currentPage]) {
        document.title = pageTitles[currentPage];
    }
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = `<span>${lang === 'tr' ? 'EN' : 'TR'}</span>`;
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    
    // Language toggle click handler
    const langToggle = document.getElementById('langToggle');
    langToggle?.addEventListener('click', () => {
        const newLang = currentLang === 'tr' ? 'en' : 'tr';
        applyTranslations(newLang);
    });
});

// ===== Demo Banner =====
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('demoBanner');
    const closeBtn = document.getElementById('bannerClose');
    const navbar = document.querySelector('.navbar');
    
    // Hide banner if already closed this session
    if (sessionStorage.getItem('bannerClosed') === 'true' && banner) {
        banner.classList.add('hidden');
        if (navbar) navbar.style.top = '0';
    }
    
    // Close button click
    closeBtn?.addEventListener('click', () => {
        if (banner) {
            banner.classList.add('hidden');
            if (navbar) navbar.style.top = '0';
            sessionStorage.setItem('bannerClosed', 'true');
        }
    });
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle?.addEventListener('click', () => {
    const isLight = body.getAttribute('data-theme') === 'light';
    if (isLight) {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// ===== Animate Stats Counter =====
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = current.toFixed(1) + suffix;
        }
    }, duration / steps);
}

// Observe stats and animate when visible
const statValues = document.querySelectorAll('.stat-value[data-count]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseFloat(entry.target.dataset.count);
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => observer.observe(stat));

// ===== File Upload Handling =====
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const uploadContent = document.getElementById('uploadContent');
const previewSection = document.getElementById('previewSection');
const resultSection = document.getElementById('resultSection');

if (uploadZone && fileInput) {
    // Drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadZone.addEventListener(eventName, () => {
            uploadZone.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadZone.addEventListener(eventName, () => {
            uploadZone.classList.remove('drag-over');
        });
    });

    uploadZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length) handleFile(files[0]);
    });

    uploadZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) handleFile(fileInput.files[0]);
    });
}

function handleFile(file) {
    const validTypes = {
        audio: ['audio/mp3', 'audio/wav', 'audio/mpeg', 'audio/ogg'],
        video: ['video/mp4', 'video/webm', 'video/quicktime'],
        image: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    };

    let fileType = null;
    for (const [type, mimes] of Object.entries(validTypes)) {
        if (mimes.includes(file.type) || file.type.startsWith(type)) {
            fileType = type;
            break;
        }
    }

    if (!fileType) {
        alert('Desteklenmeyen dosya türü. Lütfen ses, video veya görsel dosyası yükleyin.');
        return;
    }

    showPreview(file, fileType);
    simulateAnalysis(file, fileType);
}

function showPreview(file, fileType) {
    const previewContent = document.getElementById('previewContent');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const fileTypeEl = document.getElementById('fileType');

    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileTypeEl.textContent = fileType.charAt(0).toUpperCase() + fileType.slice(1);

    const url = URL.createObjectURL(file);

    if (fileType === 'audio') {
        previewContent.innerHTML = `
            <div class="audio-preview">
                <audio id="audioPlayer" src="${url}"></audio>
                <div class="waveform-container">
                    <canvas id="waveformCanvas"></canvas>
                    <div class="playhead" id="playhead"></div>
                </div>
                <div class="audio-controls">
                    <button class="play-btn" id="playBtn">
                        <i class="fas fa-play"></i>
                    </button>
                    <span class="time-display">
                        <span id="currentTime">0:00</span> / <span id="duration">0:00</span>
                    </span>
                </div>
            </div>
        `;
        setupAudioPlayer(url);
    } else if (fileType === 'video') {
        previewContent.innerHTML = `
            <div class="video-preview">
                <video id="videoPlayer" src="${url}"></video>
                <div class="video-overlay" id="videoOverlay">
                    <button class="play-btn-large" id="videoPlayBtn">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <div class="video-timeline">
                    <div class="timeline-track">
                        <div class="timeline-progress" id="videoProgress"></div>
                        <div class="timeline-heatmap" id="videoHeatmap"></div>
                    </div>
                </div>
            </div>
        `;
        setupVideoPlayer();
    } else if (fileType === 'image') {
        previewContent.innerHTML = `
            <div class="image-preview">
                <div class="image-container">
                    <img src="${url}" alt="Uploaded image" id="previewImage">
                    <canvas id="heatmapOverlay" class="heatmap-overlay"></canvas>
                </div>
                <div class="image-controls">
                    <button class="img-btn" id="toggleHeatmap">
                        <i class="fas fa-eye"></i> Toggle Heatmap
                    </button>
                    <button class="img-btn" id="zoomBtn">
                        <i class="fas fa-search-plus"></i> Zoom
                    </button>
                </div>
            </div>
        `;
        setupImagePreview();
    }

    uploadZone.style.display = 'none';
    previewSection.style.display = 'block';
}

function setupAudioPlayer(url) {
    const audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const canvas = document.getElementById('waveformCanvas');
    const playhead = document.getElementById('playhead');

    // Draw fake waveform
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    
    drawWaveform(ctx, canvas.offsetWidth, canvas.offsetHeight);

    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        const progress = (audio.currentTime / audio.duration) * 100;
        playhead.style.left = `${progress}%`;
    });

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Click on waveform to seek
    const waveformContainer = document.querySelector('.waveform-container');
    waveformContainer.addEventListener('click', (e) => {
        const rect = waveformContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
}

function drawWaveform(ctx, width, height) {
    const bars = 100;
    const barWidth = width / bars - 2;
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#6366f1');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#a855f7');

    ctx.fillStyle = gradient;

    for (let i = 0; i < bars; i++) {
        const barHeight = Math.random() * (height * 0.8) + height * 0.1;
        const x = i * (barWidth + 2);
        const y = (height - barHeight) / 2;
        ctx.fillRect(x, y, barWidth, barHeight);
    }
}

function setupVideoPlayer() {
    const video = document.getElementById('videoPlayer');
    const playBtn = document.getElementById('videoPlayBtn');
    const overlay = document.getElementById('videoOverlay');
    const progress = document.getElementById('videoProgress');

    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.style.opacity = '0';
        } else {
            video.pause();
            overlay.style.opacity = '1';
        }
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.style.opacity = '0';
        } else {
            video.pause();
            overlay.style.opacity = '1';
        }
    });

    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percent}%`;
    });

    video.addEventListener('ended', () => {
        overlay.style.opacity = '1';
    });
}

function setupImagePreview() {
    const img = document.getElementById('previewImage');
    const canvas = document.getElementById('heatmapOverlay');
    const toggleBtn = document.getElementById('toggleHeatmap');
    
    img.onload = () => {
        canvas.width = img.offsetWidth;
        canvas.height = img.offsetHeight;
        drawImageHeatmap(canvas);
    };

    let heatmapVisible = false;
    toggleBtn.addEventListener('click', () => {
        heatmapVisible = !heatmapVisible;
        canvas.style.opacity = heatmapVisible ? '0.6' : '0';
    });
}

function drawImageHeatmap(canvas) {
    const ctx = canvas.getContext('2d');
    
    // Draw random "detection" regions
    const regions = [
        { x: 0.3, y: 0.2, w: 0.4, h: 0.5 },
        { x: 0.35, y: 0.4, w: 0.3, h: 0.15 }
    ];

    regions.forEach(r => {
        const gradient = ctx.createRadialGradient(
            (r.x + r.w/2) * canvas.width, (r.y + r.h/2) * canvas.height, 0,
            (r.x + r.w/2) * canvas.width, (r.y + r.h/2) * canvas.height, r.w * canvas.width
        );
        gradient.addColorStop(0, 'rgba(239, 68, 68, 0.8)');
        gradient.addColorStop(0.5, 'rgba(249, 115, 22, 0.5)');
        gradient.addColorStop(1, 'rgba(234, 179, 8, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(r.x * canvas.width, r.y * canvas.height, r.w * canvas.width, r.h * canvas.height);
    });
}

function simulateAnalysis(file, fileType) {
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');

    progressSection.style.display = 'block';
    resultSection.style.display = 'none';

    const stages = [
        { percent: 15, status: 'Dosya yükleniyor...' },
        { percent: 30, status: 'Özellikler çıkarılıyor...' },
        { percent: 50, status: 'Yapay zeka modelleri çalıştırılıyor...' },
        { percent: 70, status: 'Örüntüler analiz ediliyor...' },
        { percent: 85, status: 'Rapor oluşturuluyor...' },
        { percent: 100, status: 'Tamamlandı!' }
    ];

    let currentStage = 0;

    const interval = setInterval(() => {
        if (currentStage < stages.length) {
            const stage = stages[currentStage];
            progressFill.style.width = `${stage.percent}%`;
            progressPercent.textContent = `${stage.percent}%`;
            progressStatus.textContent = stage.status;
            currentStage++;
        } else {
            clearInterval(interval);
            setTimeout(() => showResults(file, fileType), 500);
        }
    }, 600);
}

function showResults(file, fileType) {
    const progressSection = document.getElementById('progressSection');
    progressSection.style.display = 'none';
    resultSection.style.display = 'block';

    // Generate random but plausible results
    const isDeepfake = Math.random() > 0.4;
    const riskScore = isDeepfake ? Math.floor(Math.random() * 35) + 65 : Math.floor(Math.random() * 40) + 5;
    
    const signals = generateSignals(fileType, riskScore);
    
    // Animate risk score
    const riskScoreEl = document.getElementById('riskScore');
    const riskGauge = document.getElementById('riskGauge');
    const riskLabel = document.getElementById('riskLabel');
    const signalsList = document.getElementById('signalsList');
    const confidenceBar = document.getElementById('confidenceBar');
    const confidenceValue = document.getElementById('confidenceValue');

    // Set colors based on risk
    let color, label;
    if (riskScore <= 30) {
        color = '#22c55e';
        label = 'MUHTEMELEN ORIJINAL';
    } else if (riskScore <= 60) {
        color = '#eab308';
        label = 'ŞÜPHELİ';
    } else if (riskScore <= 85) {
        color = '#f97316';
        label = 'MUHTEMELEN MANİPÜLE';
    } else {
        color = '#ef4444';
        label = 'YÜKSEK RİSK - MUHTEMELEN SAHTE';
    }

    riskGauge.style.background = `conic-gradient(${color} 0deg, ${color} ${riskScore * 3.6}deg, rgba(255,255,255,0.1) ${riskScore * 3.6}deg)`;
    riskLabel.textContent = label;
    riskLabel.style.color = color;

    // Animate counter
    animateRiskScore(riskScoreEl, riskScore);

    // Show signals
    signalsList.innerHTML = signals.map(s => `
        <div class="signal-item ${s.severity}">
            <div class="signal-icon">
                <i class="fas ${s.severity === 'high' ? 'fa-exclamation-circle' : s.severity === 'medium' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
            </div>
            <div class="signal-content">
                <span class="signal-title">${s.title}</span>
                <span class="signal-desc">${s.description}</span>
            </div>
            <span class="signal-badge ${s.severity}">${s.severity.toUpperCase()}</span>
        </div>
    `).join('');

    // Confidence
    const confidence = Math.floor(Math.random() * 15) + 80;
    confidenceBar.style.width = `${confidence}%`;
    confidenceValue.textContent = `${confidence}%`;

    // Save to history
    saveToHistory(file, fileType, riskScore, label, signals);
}

function animateRiskScore(element, target) {
    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

function generateSignals(fileType, riskScore) {
    const signalsByType = {
        audio: [
            { title: 'Spektral Anomali', description: 'Ses bandında olağandışı frekans örüntüleri tespit edildi (2.3-4.1kHz)', severity: 'high' },
            { title: 'Ses Tutarlılığı', description: 'Perde ve ton varyansları doğal konuşma kalıplarıyla uyumsuz', severity: 'medium' },
            { title: 'Arka Plan Artifaktları', description: 'Ses arka planında sentetik gürültü örüntüsü tespit edildi', severity: 'low' },
            { title: 'Zamansal Boşluklar', description: 'Fonemler arasındaki mikro boşluklar birleştirme olduğunu gösteriyor', severity: 'high' },
            { title: 'Formant Analizi', description: 'Formant frekansları sentetik üretim işaretleri gösteriyor', severity: 'medium' }
        ],
        video: [
            { title: 'Yüz Manipülasyonu', description: 'Ana öznede yüz değiştirme veya değişim tespit edildi', severity: 'high' },
            { title: 'Zamansal Tutarsızlık', description: '245-260 kareler arasında doğal olmayan hareket bulanıklığı', severity: 'medium' },
            { title: 'Göz Kırpma Oranı', description: 'Kırpma örüntüleri doğal insan davranışından sapma gösteriyor', severity: 'high' },
            { title: 'Sınır Artifaktları', description: 'Yüz bölgesinde kenar tutarsızlıkları', severity: 'medium' },
            { title: 'Sıkıştırma Kalıntıları', description: 'Manipüle edilmiş alanlarda yerel yeniden kodlama tespit edildi', severity: 'low' }
        ],
        image: [
            { title: 'Diffusion İmzası', description: 'Frekans alanında Stable Diffusion model imzası tespit edildi', severity: 'high' },
            { title: 'Doku Anomalisi', description: 'Cilt dokusunda doğal mikro detay örüntüleri eksik', severity: 'high' },
            { title: 'Simetri Artifaktları', description: 'Yüz özelliklerinde doğal olmayan iki taraflı simetri', severity: 'medium' },
            { title: 'Aydınlatma Tutarsızlığı', description: 'Işık kaynağı yönleri görsel genelinde tutarsız', severity: 'medium' },
            { title: 'JPEG Hayalet Analizi', description: 'Çoklu sıkıştırma katmanları tespit edildi', severity: 'low' }
        ]
    };

    const available = signalsByType[fileType] || signalsByType.image;
    const count = riskScore > 60 ? 4 : riskScore > 30 ? 3 : 2;
    
    return available.slice(0, count).map(s => ({
        ...s,
        severity: riskScore > 70 ? s.severity : (s.severity === 'high' ? 'medium' : s.severity)
    }));
}

function saveToHistory(file, fileType, riskScore, label, signals) {
    const history = JSON.parse(localStorage.getItem('cybershieldHistory') || '[]');
    
    history.unshift({
        id: Date.now(),
        fileName: file.name,
        fileType: fileType,
        fileSize: file.size,
        riskScore: riskScore,
        label: label,
        signals: signals.length,
        timestamp: new Date().toISOString()
    });

    // Keep only last 50
    if (history.length > 50) history.pop();
    
    localStorage.setItem('cybershieldHistory', JSON.stringify(history));
}

function resetAnalysis() {
    uploadZone.style.display = 'block';
    previewSection.style.display = 'none';
    resultSection.style.display = 'none';
    document.getElementById('progressSection').style.display = 'none';
    fileInput.value = '';
}

// ===== History Page =====
function loadHistory() {
    const historyList = document.getElementById('historyList');
    const emptyState = document.getElementById('emptyState');
    
    if (!historyList) return;

    const history = JSON.parse(localStorage.getItem('cybershieldHistory') || '[]');

    if (history.length === 0) {
        emptyState.style.display = 'block';
        historyList.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    historyList.style.display = 'block';

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-icon ${item.fileType}">
                <i class="fas ${item.fileType === 'audio' ? 'fa-waveform-lines' : item.fileType === 'video' ? 'fa-video' : 'fa-image'}"></i>
            </div>
            <div class="history-info">
                <span class="history-name">${item.fileName}</span>
                <span class="history-meta">${formatFileSize(item.fileSize)} • ${formatDate(item.timestamp)}</span>
            </div>
            <div class="history-score ${getScoreClass(item.riskScore)}">
                <span class="score-value">${item.riskScore}</span>
                <span class="score-label">Risk</span>
            </div>
            <div class="history-label ${getScoreClass(item.riskScore)}">
                ${item.label}
            </div>
            <div class="history-actions">
                <button class="action-btn" title="View Details">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn" title="Download Report">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function getScoreClass(score) {
    if (score <= 30) return 'low';
    if (score <= 60) return 'medium';
    if (score <= 85) return 'high';
    return 'critical';
}

function clearHistory() {
    if (confirm('Tüm geçmişi silmek istediğinizden emin misiniz?')) {
        localStorage.removeItem('cybershieldHistory');
        loadHistory();
    }
}

// ===== Text Analysis =====
function analyzeText() {
    const textInput = document.getElementById('textInput');
    const textResult = document.getElementById('textResult');
    
    if (!textInput || !textInput.value.trim()) {
        alert('Lütfen analiz edilecek bir metin girin');
        return;
    }

    const text = textInput.value;
    textResult.style.display = 'block';
    
    // Simulate analysis
    setTimeout(() => {
        const score = Math.floor(Math.random() * 60) + 20;
        document.getElementById('textRiskScore').textContent = score;
        document.getElementById('textRiskScore').className = `score-value ${getScoreClass(score)}`;
        
        const perplexity = (Math.random() * 20 + 5).toFixed(1);
        const burstiness = (Math.random() * 0.5 + 0.1).toFixed(2);
        
        document.getElementById('textPerplexity').textContent = perplexity;
        document.getElementById('textBurstiness').textContent = burstiness;
        
        // Highlight sentences
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        const highlighted = sentences.map(s => {
            const prob = Math.random();
            const cls = prob > 0.7 ? 'ai-high' : prob > 0.4 ? 'ai-medium' : 'ai-low';
            return `<span class="sentence ${cls}" title="${Math.floor(prob * 100)}% AI probability">${s}</span>`;
        }).join(' ');
        
        document.getElementById('highlightedText').innerHTML = highlighted;
    }, 1500);
}

// ===== Utilities =====
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatDate(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Az önce';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}dk önce`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}sa önce`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)}g önce`;
    
    return date.toLocaleDateString();
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
    
    // Add some demo history if empty
    const history = JSON.parse(localStorage.getItem('cybershieldHistory') || '[]');
    if (history.length === 0 && window.location.pathname.includes('history')) {
        // Add demo data
        const demoData = [
            { fileName: 'roportaj_klibi.mp4', fileType: 'video', fileSize: 15728640, riskScore: 73, label: 'MUHTEMELEN MANİPÜLE', signals: 4 },
            { fileName: 'ses_mesaji.mp3', fileType: 'audio', fileSize: 2458624, riskScore: 87, label: 'YÜKSEK RİSK - MUHTEMELEN SAHTE', signals: 5 },
            { fileName: 'profil_foto.jpg', fileType: 'image', fileSize: 524288, riskScore: 12, label: 'MUHTEMELEN ORIJINAL', signals: 2 },
            { fileName: 'podcast_kesiti.wav', fileType: 'audio', fileSize: 8945621, riskScore: 45, label: 'ŞÜPHELİ', signals: 3 },
            { fileName: 'haber_gorseli.png', fileType: 'image', fileSize: 1245678, riskScore: 91, label: 'YÜKSEK RİSK - MUHTEMELEN SAHTE', signals: 5 }
        ];
        
        demoData.forEach((item, i) => {
            history.push({
                ...item,
                id: Date.now() - i * 86400000,
                timestamp: new Date(Date.now() - i * 86400000 * Math.random()).toISOString()
            });
        });
        
        localStorage.setItem('cybershieldHistory', JSON.stringify(history));
        loadHistory();
    }
});
