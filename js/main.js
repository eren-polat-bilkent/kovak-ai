// ===== Translations =====
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Ana Sayfa',
        'nav.analyze': 'Analiz',
        'nav.history': 'Geçmiş',
        'nav.api': 'API Anahtarı Al',
        
        // Hero (interview-focused)
        'hero.badge': 'İK ve İşe Alım Ekipleri İçin',
        'hero.title1': 'Mülakatlarda Yapay Zekâ',
        'hero.title2': 'Destekli Kopyayı Yakalayın',
        'hero.subtitle': 'Çok sinyalli yapay zekâ motorumuz; bakış yönü, yanıt gecikmesi, ses sentezi ve cevap stilometrisini gerçek zamanlı izler. Adayın ChatGPT, ses klonu ya da arka planda bir koç kullandığını mülakat paneliniz anında görür.',
        'hero.cta': 'Canlı Demoyu Gör',
        'hero.cta2': 'Pilot Talep Et',
        'hero.accuracy': '% Doğruluk',
        'hero.speed': 'sn Ort. Uyarı Süresi',
        'hero.scanned': 'K+ Mülakat Analiz Edildi',

        // Interview Panel (hero visual)
        'panel.title': 'Canlı Mülakat Monitörü',
        'panel.status': 'CANLI',
        'panel.role1': 'İK Sorumlusu',
        'panel.role2': 'Teknik Lider',
        'panel.candidate': 'Aday',
        'panel.signalsTitle': 'Canlı Sinyaller',
        'panel.signal.gaze': 'Bakış ekran dışına kaydı — 1.2sn',
        'panel.signal.latency': 'Cevap öncesi duraklama — 4.8sn',
        'panel.signal.typing': 'Ekran dışı yazım patlaması',
        'panel.risk.label': 'YZ-Destek Riski',
        'panel.risk.level': 'YÜKSEK',

        // Interview Monitor (main demo screen)
        'monitor.pill.baseline': 'Temel referans',
        'monitor.pill.anomalies': '4 anormallik',
        'monitor.speechRate': 'Konuşma hızı',
        'monitor.wpm': 'KDD',
        'monitor.speed.ok': 'Normal tempo · 1.0×',
        'monitor.speed.bad': 'Temelin altında · 0.6× · uzun duraklamalar',
        'monitor.latency.ok': 'Yanıt gecikmesi · 0.6sn',
        'monitor.latency.bad': 'Yanıt gecikmesi · 4.8sn',
        'monitor.gaze.ok': 'Bakış ekranda · %98',
        'monitor.gaze.bad': 'Bakış ekran dışı · 1.2sn kayma',
        'monitor.offscreen': 'ekran dışı',
        'monitor.abn.title': 'Tespit edilen anormallikler',
        'monitor.abn.count': '5 sinyal işaretlendi',
        'monitor.abn.gaze': '<strong>Bakış ekran dışına kaydı</strong> — S3 cevaplanırken 1.2sn',
        'monitor.abn.latency': '<strong>Cevap öncesi duraklama</strong> — 4.8sn · tipik LLM yanıt süresiyle örtüşüyor',
        'monitor.abn.typing': '<strong>Ekran dışı yazım patlaması</strong> — 2.4sn içinde 3 olay',
        'monitor.abn.phrasing': '<strong>LLM ifadesi tespit edildi</strong> — “leverage my expertise”, “multifaceted endeavor”',
        'monitor.abn.tts': '<strong>TTS prozodi eşleşmesi</strong> — sentetik ses imzasıyla %82 benzerlik',
        'monitor.sev.high': 'YÜKSEK',
        'monitor.sev.medium': 'ORTA',
        'monitor.risk.sub': 'tüm sinyallerden toplandı',

        // HR Suite promo (homepage)
        'hrsuite.badge': 'İK Paketi',
        'hrsuite.title': '<span class="gradient-text">İK ve İşe Alım</span> ekipleri için',
        'hrsuite.subtitle': 'Mülakat panelinizin bugün kullanabileceği iki hafif araç. Yaklaşılabilir hissetmesi için tasarlandı — veri bilimi ekibi gerekmez.',
        'hrsuite.speech.eyebrow': 'Konuşma ve ses doğruluğu',
        'hrsuite.speech.title': 'Mülakat cevaplarında YZ konuşmasını ve ses kopyalarını yakalayın',
        'hrsuite.speech.desc': 'Canlı transkripsiyon, cümle bazlı YZ skorlaması ve ses sinyali analizi — temiz, İK\'ya hazır bir panelde sunulur.',
        'hrsuite.speech.item1': 'Cümle bazlı YZ olasılığı',
        'hrsuite.speech.item2': 'TTS prozodisi ve ses klonu sinyalleri',
        'hrsuite.speech.item3': 'Yanıt gecikmesi ve tereddüt',
        'hrsuite.speech.cta': 'Konuşma demosunu aç',
        'hrsuite.cv.eyebrow': 'CV ve SOP YZ tespiti <span class="hr-suite-beta">BETA</span>',
        'hrsuite.cv.title': 'YZ ile yazılmış CV\'leri, ön yazıları ve niyet mektuplarını yakalayın',
        'hrsuite.cv.desc': 'Bir CV veya SOP yükleyin; bölüm bazlı YZ skoru, vurgulanan kalıp ifadeler ve işe alımcılarınız için somut takip soruları alın.',
        'hrsuite.cv.item1': 'Bölüm bazlı YZ üretim skoru',
        'hrsuite.cv.item2': 'Satır içi kalıp ifade işaretleme',
        'hrsuite.cv.item3': 'İK için özelleştirilmiş takip soruları',
        'hrsuite.cv.cta': 'CV / SOP demosunu aç',

        // Demo (legacy)
        'demo.riskScore': 'Risk Skoru',
        'demo.signal1': 'Yüz manipülasyonu tespit edildi',
        'demo.signal2': 'Doğal olmayan göz hareketi',

        // Features — primary (interview signals)
        'features.badge': 'Mülakat Bütünlük Sinyalleri',
        'features.title': '<span class="gradient-text">YZ destekli adayları</span> yakalayan dört sinyal',
        'features.subtitle': 'Motorumuz davranışsal, ses ve içerik sinyallerini birleştirerek şüpheli anları yanlış pozitif gürültü olmadan işaretler.',
        'features.gaze.title': 'Bakış Takibi',
        'features.gaze.desc': 'Adayın ikinci ekrandan, telefondan veya kamera dışı notlardan okuduğu anları tespit eder.',
        'features.gaze.item1': 'Ekran dışı bakış süresi',
        'features.gaze.item2': 'Çoklu monitör okuma örüntüleri',
        'features.gaze.item3': 'Soru bazlı bakış ısı haritası',
        'features.latency.badge': 'En Belirleyici',
        'features.latency.title': 'Yanıt Gecikmesi Analizi',
        'features.latency.desc': 'LLM yanıt sürelerine uyan şüpheli duraklamaları ve başka pencerede gerçekleşen yazım patlamalarını işaretler.',
        'features.latency.item1': 'Cevap öncesi duraklama profili',
        'features.latency.item2': 'Tuş vuruşu patlama tespiti',
        'features.latency.item3': 'Pencere/sekme odak sinyalleri',
        'features.voice.title': 'YZ Ses ve TTS Tespiti',
        'features.voice.desc': 'Adayın mikrofonundan geçen metinden-konuşmaya, ses klonu ve tekrar oynatılan YZ üretimi cevapları yakalar.',
        'features.voice.item1': 'TTS prozodi imzaları',
        'features.voice.item2': 'Ses klonu tespiti',
        'features.voice.item3': 'Dudak senkron uyumsuzluğu',
        'features.stylometry.title': 'Cevap Stilometrisi',
        'features.stylometry.desc': 'Canlı transkript skorlaması; konuşulan ya da yazılan cevaplardaki ChatGPT/Claude ifade örüntülerini tespit eder.',
        'features.stylometry.item1': 'LLM ifade tespiti',
        'features.stylometry.item2': 'Burstiness ve perplexity',
        'features.stylometry.item3': 'Cümle bazlı YZ skoru',

        // Secondary — also detects (existing deepfake coverage)
        'secondary.badge': 'Ayrıca destekler',
        'secondary.title': 'Tam <span class="gradient-text">deepfake ve YZ içerik</span> kapsaması',
        'secondary.subtitle': 'Her mülakat kaydı genel amaçlı dedektörlerimizden de geçer — asenkron ev ödevi videoları, sesli notlar ve aday iş örnekleri için kullanışlıdır.',

        // Features — secondary (legacy keys kept)
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
        'how.badge': 'Nasıl çalışır',
        'how.title': '<span class="gradient-text">Canlı görüşmeden bütünlük raporuna</span> üç adımda',
        'how.subtitle': 'Panelinizin zaten kullandığı araçlara entegre olur — adayın bir şey yüklemesine gerek yok.',
        'how.step1.title': 'Mülakatı Bağlayın',
        'how.step1.desc': 'Zoom, Teams veya Google Meet\'e tek tıkla bağlanın — ya da asenkron inceleme için kayıt yükleyin.',
        'how.step2.title': 'Gerçek Zamanlı İzleme',
        'how.step2.desc': 'Çok sinyalli YZ; her cevabı bakış, gecikme, ses ve içerik doğruluğu açısından skorlar.',
        'how.step3.title': 'Bütünlük Raporu',
        'how.step3.desc': 'Soru bazlı risk zaman çizelgesi, işaretlenmiş anlar ve İK paneliniz için kaynak klip kanıtları.',

        // CTA
        'cta.title': 'Bir sonraki mülakatınızda canlı görün',
        'cta.subtitle': 'Örnek mülakatla canlı demo. Kurulum yok, kredi kartı gerekmez.',
        'cta.button': 'Demoyu Başlat',
        
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
        
        // Hero (interview-focused)
        'hero.badge': 'For HR & Recruiting Teams',
        'hero.title1': 'Catch AI-Assisted Cheating',
        'hero.title2': 'in Live Interviews',
        'hero.subtitle': 'A multi-signal AI watches gaze, response latency, voice synthesis, and answer stylometry in real time — so your hiring panel knows the moment a candidate is leaning on ChatGPT, a voice clone, or an off-camera coach.',
        'hero.cta': 'See live demo',
        'hero.cta2': 'Book a pilot',
        'hero.accuracy': '% Detection accuracy',
        'hero.speed': 's Avg. flag time',
        'hero.scanned': 'K+ Interviews analyzed',

        // Interview Panel (hero visual)
        'panel.title': 'Live Interview Monitor',
        'panel.status': 'LIVE',
        'panel.role1': 'HR Lead',
        'panel.role2': 'Tech Lead',
        'panel.candidate': 'Candidate',
        'panel.signalsTitle': 'Live signals',
        'panel.signal.gaze': 'Eye-gaze drifted off-screen — 1.2s',
        'panel.signal.latency': 'Pre-answer pause — 4.8s',
        'panel.signal.typing': 'Off-screen typing burst detected',
        'panel.risk.label': 'AI-Assist Risk',
        'panel.risk.level': 'HIGH',

        // Interview Monitor (main demo screen)
        'monitor.pill.baseline': 'Baseline',
        'monitor.pill.anomalies': '4 anomalies',
        'monitor.speechRate': 'Speech rate',
        'monitor.wpm': 'WPM',
        'monitor.speed.ok': 'Normal cadence · 1.0×',
        'monitor.speed.bad': 'Below baseline · 0.6× · long pauses',
        'monitor.latency.ok': 'Response latency · 0.6s',
        'monitor.latency.bad': 'Response latency · 4.8s',
        'monitor.gaze.ok': 'Gaze on-screen · 98%',
        'monitor.gaze.bad': 'Gaze off-screen · 1.2s drift',
        'monitor.offscreen': 'off-screen',
        'monitor.abn.title': 'Detected abnormalities',
        'monitor.abn.count': '5 signals flagged',
        'monitor.abn.gaze': '<strong>Eye-gaze drifted off-screen</strong> — 1.2s while answering Q3',
        'monitor.abn.latency': '<strong>Pre-answer pause</strong> — 4.8s · matches typical LLM round-trip',
        'monitor.abn.typing': '<strong>Off-screen typing burst</strong> — 3 events in 2.4s',
        'monitor.abn.phrasing': '<strong>LLM phrasing detected</strong> — “leverage my expertise”, “multifaceted endeavor”',
        'monitor.abn.tts': '<strong>TTS prosody match</strong> — 82% similarity to synthetic voice fingerprint',
        'monitor.sev.high': 'HIGH',
        'monitor.sev.medium': 'MED',
        'monitor.risk.sub': 'aggregated across all signals',

        // HR Suite promo (homepage)
        'hrsuite.badge': 'HR Suite',
        'hrsuite.title': 'Built for <span class="gradient-text">HR &amp; Recruiting</span> teams',
        'hrsuite.subtitle': 'Two lightweight tools your hiring panel can use today. Designed to feel approachable — no data-science team required.',
        'hrsuite.speech.eyebrow': 'Speech &amp; voice authenticity',
        'hrsuite.speech.title': 'Catch AI speech and voice clones in interview answers',
        'hrsuite.speech.desc': 'Live transcription, sentence-level AI scoring, and voice-signal analysis — surfaced on a clean HR-ready dashboard.',
        'hrsuite.speech.item1': 'Sentence-level AI probability',
        'hrsuite.speech.item2': 'TTS prosody &amp; voice-clone signals',
        'hrsuite.speech.item3': 'Response latency &amp; hesitation',
        'hrsuite.speech.cta': 'Open speech demo',
        'hrsuite.cv.eyebrow': 'CV &amp; SOP AI detection <span class="hr-suite-beta">BETA</span>',
        'hrsuite.cv.title': 'Spot AI-written CVs, cover letters &amp; statements of purpose',
        'hrsuite.cv.desc': 'Drop a CV or SOP and get a per-section AI score, highlighted boilerplate phrasing, and concrete follow-up questions for your recruiters.',
        'hrsuite.cv.item1': 'Per-section AI generation score',
        'hrsuite.cv.item2': 'Inline boilerplate flagging',
        'hrsuite.cv.item3': 'Tailored HR follow-up prompts',
        'hrsuite.cv.cta': 'Open CV / SOP demo',

        // Demo (legacy)
        'demo.riskScore': 'Risk Score',
        'demo.signal1': 'Face manipulation detected',
        'demo.signal2': 'Unnatural eye movement',

        // Features — primary (interview signals)
        'features.badge': 'Interview integrity signals',
        'features.title': 'Four signals that catch <span class="gradient-text">AI-assisted candidates</span>',
        'features.subtitle': 'Our engine fuses behavioral, audio, and content signals to flag suspicious interview moments without false-positive noise.',
        'features.gaze.title': 'Eye-Gaze Tracking',
        'features.gaze.desc': 'Detects when a candidate is reading from a second monitor, phone, or off-camera notes.',
        'features.gaze.item1': 'Off-screen gaze duration',
        'features.gaze.item2': 'Multi-monitor reading patterns',
        'features.gaze.item3': 'Per-question gaze heatmap',
        'features.latency.badge': 'Most Predictive',
        'features.latency.title': 'Response Latency Analysis',
        'features.latency.desc': 'Flags suspicious pre-answer pauses that match LLM round-trip times, plus keystroke bursts in another window.',
        'features.latency.item1': 'Pre-answer pause profiling',
        'features.latency.item2': 'Keystroke burst detection',
        'features.latency.item3': 'Window / tab focus signals',
        'features.voice.title': 'AI Voice & TTS Detection',
        'features.voice.desc': 'Catches text-to-speech, voice cloning, and replayed AI-generated answers being fed through the candidate\'s mic.',
        'features.voice.item1': 'TTS prosody fingerprints',
        'features.voice.item2': 'Voice-clone detection',
        'features.voice.item3': 'Lip-sync mismatch alerts',
        'features.stylometry.title': 'Answer Stylometry',
        'features.stylometry.desc': 'Live transcript scoring detects ChatGPT / Claude phrasing patterns in spoken or typed responses.',
        'features.stylometry.item1': 'LLM phrasing detection',
        'features.stylometry.item2': 'Burstiness & perplexity',
        'features.stylometry.item3': 'Per-sentence AI score',

        // Secondary — also detects
        'secondary.badge': 'Also handles',
        'secondary.title': 'Full <span class="gradient-text">deepfake & AI-content</span> coverage',
        'secondary.subtitle': 'Every interview recording also flows through our general-purpose detectors — useful for reviewing async take-home videos, voice notes, and candidate work samples.',

        // Features — secondary (legacy keys kept)
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
        'how.badge': 'How it works',
        'how.title': 'From <span class="gradient-text">live call to integrity report</span> in three steps',
        'how.subtitle': 'Plug into the tools your panel already uses — no candidate install required.',
        'how.step1.title': 'Connect the interview',
        'how.step1.desc': 'One click into Zoom, Teams, or Google Meet — or upload a recording for async review.',
        'how.step2.title': 'Real-time monitoring',
        'how.step2.desc': 'Multi-signal AI scores every answer for gaze, latency, voice, and content authenticity.',
        'how.step3.title': 'Integrity report',
        'how.step3.desc': 'Per-question risk timeline with flagged moments and source-clip evidence for your HR panel.',

        // CTA
        'cta.title': 'See it on your next interview',
        'cta.subtitle': 'Live demo with a sample interview. No setup, no credit card.',
        'cta.button': 'Launch demo',
        
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

// Current language (default: English)
let currentLang = localStorage.getItem('lang') || 'en';

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
