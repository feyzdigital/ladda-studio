/**
 * Ladda Studio - Merkezi Veri Yapısı
 * Tüm site içerikleri, hizmetler ve projeler bu dosyada yönetilir.
 */

export const siteConfig = {
  name: "Ladda Studio",
  slogan: "We Load Your Digital Potential.",
  tagline: "Dijital potansiyelinizi yüklüyoruz.",
  email: "info@ladda.studio",
  address: "İstanbul, Türkiye",
};

// ============ HİZMETLER ============

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  intro: string[];
  process: { step: number; title: string; description: string }[];
  technologies: { name: string; icon: string }[];
  whyUs: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Profesyonel Web Tasarım & Yazılım Çözümleri",
    shortTitle: "Web Tasarım",
    description:
      "Markanızı yansıtan, dönüşüm odaklı ve teknik açıdan kusursuz web siteleri.",
    icon: "Globe",
    intro: [
      "Dijital dünyada varlığınız, web sitenizle başlar. Günümüzde kullanıcılar bir markayla ilk karşılaştıklarında web sitesini ziyaret ediyor; bu yüzden ilk izlenim her şeyi belirliyor. Eski, yavaş veya mobil uyumsuz bir site, potansiyel müşterilerinizi rakiplerinize yönlendirir.",
      "Ladda Studio olarak, sadece güzel görünen değil; hızlı, güvenli ve arama motorlarında üst sıralarda yer alan web siteleri tasarlıyoruz. Her projemizde kullanıcı deneyimini (UX) ön planda tutarak, ziyaretçilerinizin hemen aradıklarını bulmasını ve harekete geçmesini sağlıyoruz.",
      "React, Next.js ve modern web teknolojileriyle geliştirdiğimiz siteler, hem performans hem de SEO açısından rakiplerinizin bir adım önünde olmanızı sağlar. Kurumsal sitelerden e-ticaret platformlarına, landing page'lerden web uygulamalarına kadar geniş bir yelpazede hizmet sunuyoruz.",
    ],
    process: [
      {
        step: 1,
        title: "Keşif & Strateji",
        description:
          "İş hedeflerinizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. Site haritası ve içerik stratejisi oluşturuyoruz.",
      },
      {
        step: 2,
        title: "Tasarım & Prototip",
        description:
          "UI/UX prensiplerine uygun wireframe ve yüksek çözünürlüklü tasarımlar hazırlıyoruz. Onayınızı alıyoruz.",
      },
      {
        step: 3,
        title: "Geliştirme & Test",
        description:
          "Responsive, erişilebilir ve SEO uyumlu kodlama yapıyoruz. Cross-browser testlerle kaliteyi garanti ediyoruz.",
      },
      {
        step: 4,
        title: "Yayın & Destek",
        description:
          "Siteyi canlıya alıyoruz. SSL, hosting ve bakım konularında sürekli destek sağlıyoruz.",
      },
    ],
    technologies: [
      { name: "Next.js", icon: "Zap" },
      { name: "React", icon: "Atom" },
      { name: "TypeScript", icon: "Code" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Node.js", icon: "Server" },
    ],
    whyUs: [
      "Performans odaklı, Core Web Vitals standartlarına uygun geliştirme",
      "Mobil-first yaklaşım ile tüm cihazlarda kusursuz görünüm",
      "SEO-friendly yapı ile arama motorlarında üst sıralara çıkma potansiyeli",
      "Güvenli ve ölçeklenebilir altyapı",
      "Teslimattan sonra da teknik destek ve bakım hizmeti",
    ],
    faqs: [
      {
        question: "Web sitesi projesi ne kadar sürede tamamlanır?",
        answer:
          "Proje kapsamına göre değişir. Basit kurumsal siteler 4-6 hafta, e-ticaret veya karmaşık web uygulamaları 8-16 hafta sürebilir. Keşif toplantısında net bir zaman çizelgesi sunuyoruz.",
      },
      {
        question: "Mevcut web sitemi yenileyebilir misiniz?",
        answer:
          "Evet. Mevcut içerikleri koruyarak tasarım ve teknik altyapıyı modernize edebiliriz. SEO değerinizi kaybetmeden geçiş yapıyoruz.",
      },
      {
        question: "Hosting ve domain hizmeti de sunuyor musunuz?",
        answer:
          "Hosting ve domain yönetiminde size rehberlik ediyoruz. İsterseniz güvendiğimiz sağlayıcılarla entegre çalışıyoruz; isterseniz kendi sağlayıcınızı kullanabilirsiniz.",
      },
    ],
    metaTitle: "Profesyonel Web Tasarım & Yazılım Çözümleri | Ladda Studio",
    metaDescription:
      "Next.js, React ve modern teknolojilerle kurumsal web siteleri, e-ticaret ve web uygulamaları. Hızlı, SEO uyumlu ve dönüşüm odaklı çözümler.",
  },
  {
    slug: "seo-marketing",
    title: "SEO & Dijital Pazarlama Stratejileri",
    shortTitle: "SEO & Pazarlama",
    description:
      "Organik trafik artışı ve marka görünürlüğü için veri odaklı SEO stratejileri.",
    icon: "TrendingUp",
    intro: [
      "Web siteniz hazır olsa bile, arama motorlarında görünmüyorsanız potansiyel müşterilerinize ulaşamazsınız. Google'da ilk sayfada yer alan siteler, tıklamaların %90'ından fazlasını alıyor. SEO (Arama Motoru Optimizasyonu), bu rekabette sizi öne çıkaran en güçlü araçtır.",
      "Ladda Studio'da SEO'yu sadece anahtar kelime doldurma olarak görmüyoruz. Teknik SEO, içerik stratejisi, backlink yönetimi ve yerel SEO dahil bütüncül bir yaklaşım uyguluyoruz. Her strateji, rakip analizi ve veri temelli kararlarla şekilleniyor.",
      "Dijital pazarlama kampanyalarınızı da yönetiyoruz: Google Ads, Meta reklamları, e-posta pazarlaması ve sosyal medya stratejileri. Organik ve ücretli kanalları entegre ederek, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz.",
    ],
    process: [
      {
        step: 1,
        title: "SEO Denetimi",
        description:
          "Mevcut sitenizi tarıyoruz. Teknik hatalar, içerik boşlukları ve rakip fırsatları tespit ediyoruz.",
      },
      {
        step: 2,
        title: "Anahtar Kelime & İçerik Planı",
        description:
          "Hedef anahtar kelimeleri belirliyoruz. İçerik takvimi ve optimizasyon stratejisi oluşturuyoruz.",
      },
      {
        step: 3,
        title: "Uygulama & Optimizasyon",
        description:
          "On-page SEO, teknik düzeltmeler ve içerik güncellemeleri yapıyoruz. Backlink stratejisi uyguluyoruz.",
      },
      {
        step: 4,
        title: "Raporlama & İterasyon",
        description:
          "Aylık performans raporları sunuyoruz. Verilere dayalı iyileştirmelerle sürekli ilerleme sağlıyoruz.",
      },
    ],
    technologies: [
      { name: "Google Analytics", icon: "BarChart" },
      { name: "Search Console", icon: "Search" },
      { name: "Ahrefs/SEMrush", icon: "Target" },
      { name: "Schema Markup", icon: "FileCode" },
    ],
    whyUs: [
      "White-hat SEO prensipleri; kalıcı ve sürdürülebilir sonuçlar",
      "Şeffaf raporlama ile her adımda bilgilendirme",
      "Yerel ve uluslararası pazar odaklı stratejiler",
      "İçerik ve teknik SEO entegrasyonu",
      "Rakip analizi ile fırsat odaklı yaklaşım",
    ],
    faqs: [
      {
        question: "SEO sonuçları ne zaman görülür?",
        answer:
          "SEO uzun vadeli bir yatırımdır. İlk iyileştirmeler 2-3 ay içinde görülebilir; anlamlı trafik artışı genellikle 4-6 ay sürer. Rekabetçi sektörlerde bu süre uzayabilir.",
      },
      {
        question: "Sadece yerel SEO hizmeti alabilir miyim?",
        answer:
          "Evet. Google İşletmem (Google Business Profile) optimizasyonu, yerel anahtar kelimeler ve bölgesel içerik stratejisiyle yerel SEO paketleri sunuyoruz.",
      },
      {
        question: "Mevcut SEO ajansımdan geçiş yaparsam sıralamalarım düşer mi?",
        answer:
          "Doğru geçiş planıyla hayır. Mevcut çalışmaları analiz edip, değeri koruyarak devralıyoruz. Geçiş sürecinde dikkatli ilerleyerek sıralama kaybını önlüyoruz.",
      },
    ],
    metaTitle: "SEO & Dijital Pazarlama Stratejileri | Ladda Studio",
    metaDescription:
      "Organik trafik, anahtar kelime optimizasyonu ve dijital pazarlama. Veri odaklı SEO stratejileri ile Google'da üst sıralara çıkın.",
  },
  {
    slug: "brand-identity",
    title: "Marka Kimliği & Kurumsal Görsel Dil",
    shortTitle: "Marka Kimliği",
    description:
      "Unutulmaz, tutarlı ve değer yaratan marka kimlikleri tasarlıyoruz.",
    icon: "Award",
    intro: [
      "Marka kimliği, logonuzdan çok daha fazlasıdır. Renk paletiniz, tipografiniz, görsel diliniz ve tonunuz bir araya gelerek müşterilerinizin sizi nasıl algıladığını belirler. Güçlü bir marka kimliği, güven oluşturur ve rakiplerinizden sizi ayırır.",
      "Ladda Studio'da marka stratejisiyle tasarımı birleştiriyoruz. Önce hedef kitlenizi, değerlerinizi ve pazar konumunuzu anlıyoruz. Ardından bu bilgileri görsel bir dile dönüştürüyoruz. Logo, kurumsal kimlik, sosyal medya tasarımları ve marka kılavuzu dahil eksiksiz paketler sunuyoruz.",
      "Yeni marka oluşturma, marka yenileme veya marka genişletme projelerinde deneyimliyiz. Her projede, markanızın uzun vadede ölçeklenebilir ve tutarlı kalmasını sağlayacak sistemler kuruyoruz.",
    ],
    process: [
      {
        step: 1,
        title: "Marka Keşfi",
        description:
          "Workshop ve anketlerle markanızın DNA'sını çıkarıyoruz. Misyon, vizyon ve hedef kitle netleştiriliyor.",
      },
      {
        step: 2,
        title: "Konsept & Moodboard",
        description:
          "Rekabet ve trend analizi yapıyoruz. Görsel yön ve konsept önerileri sunuyoruz.",
      },
      {
        step: 3,
        title: "Tasarım & Uygulama",
        description:
          "Logo varyasyonları, renk paleti ve tipografi belirliyoruz. Kartvizit, antetli kağıt, sosyal medya şablonları oluşturuyoruz.",
      },
      {
        step: 4,
        title: "Marka Kılavuzu",
        description:
          "Kullanım kurallarını içeren marka kılavuzu hazırlıyoruz. Tutarlılık için referans doküman teslim ediyoruz.",
      },
    ],
    technologies: [
      { name: "Adobe Illustrator", icon: "PenTool" },
      { name: "Figma", icon: "Layers" },
      { name: "Brand Guidelines", icon: "BookOpen" },
    ],
    whyUs: [
      "Strateji odaklı tasarım; sadece güzel değil, anlamlı markalar",
      "Ölçeklenebilir kimlik sistemleri",
      "Print ve dijital uyumlu çıktılar",
      "Marka kılavuzu ile uzun vadeli tutarlılık",
      "Rekabetçi fiyat ve esnek paket seçenekleri",
    ],
    faqs: [
      {
        question: "Sadece logo mu yoksa tam marka kimliği mi?",
        answer:
          "İkisini de sunuyoruz. Bütçenize göre sadece logo, logo + temel uygulamalar veya tam kurumsal kimlik paketi seçebilirsiniz. İhtiyacınıza göre özelleştiriyoruz.",
      },
      {
        question: "Mevcut markamı yenileyebilir misiniz?",
        answer:
          "Evet. Mevcut marka değerini koruyarak modernize ediyoruz. Köklü değişiklik veya minimal güncelleme seçenekleri sunuyoruz.",
      },
      {
        question: "Marka kılavuzu neden önemli?",
        answer:
          "Marka kılavuzu, logonuzun, renklerinizin ve tipografinizin nasıl kullanılacağını tanımlar. İç veya dış paydaşlarınız tutarlı uygulama yapabilsin diye referans görevi görür.",
      },
    ],
    metaTitle: "Marka Kimliği & Kurumsal Görsel Dil | Ladda Studio",
    metaDescription:
      "Logo, kurumsal kimlik ve marka stratejisi. Unutulmaz ve tutarlı marka kimlikleri tasarlıyoruz.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Tasarım & Kullanıcı Deneyimi",
    shortTitle: "UI/UX Tasarım",
    description:
      "Kullanıcı odaklı, sezgisel ve dönüşüm yaratan arayüz tasarımları.",
    icon: "Layout",
    intro: [
      "Kullanıcı deneyimi (UX) ve arayüz tasarımı (UI), dijital ürünlerinizin başarısını doğrudan etkiler. Güzel bir tasarım yeterli değildir; kullanıcıların hedeflerine kolayca ulaşması, karışıklık yaşamaması ve olumlu bir deneyim yaşaması gerekir. Bu da dönüşüm oranlarınızı artırır.",
      "Ladda Studio'da kullanıcı araştırması, bilgi mimarisi, wireframe ve prototipleme süreçlerini titizlikle uyguluyoruz. Her tasarım kararı veri ve kullanıcı geri bildirimleriyle destekleniyor. Web siteleri, mobil uygulamalar ve SaaS ürünleri için UI/UX hizmeti sunuyoruz.",
      "Figma ve benzeri araçlarla yüksek kaliteli prototipler hazırlıyoruz. Geliştirme ekiplerinizle sorunsuz entegrasyon için design system ve component library oluşturuyoruz. Erişilebilirlik (a11y) standartlarına uygun tasarımlar üretiyoruz.",
    ],
    process: [
      {
        step: 1,
        title: "Araştırma & Analiz",
        description:
          "Kullanıcı görüşmeleri, rakip analizi ve hedef kitle profillemesi yapıyoruz. Pain point'leri tespit ediyoruz.",
      },
      {
        step: 2,
        title: "Bilgi Mimarisi & Wireframe",
        description:
          "Site haritası ve kullanıcı akışları oluşturuyoruz. Düşük doğruluklu wireframe'lerle yapıyı netleştiriyoruz.",
      },
      {
        step: 3,
        title: "UI Tasarım & Prototip",
        description:
          "Yüksek doğruluklu ekran tasarımları hazırlıyoruz. Tıklanabilir prototiplerle test ediyoruz.",
      },
      {
        step: 4,
        title: "Test & İterasyon",
        description:
          "Kullanıcı testleri yapıyoruz. Geri bildirimlere göre tasarımı iyileştiriyoruz. Geliştirme için spec teslim ediyoruz.",
      },
    ],
    technologies: [
      { name: "Figma", icon: "Layers" },
      { name: "Prototyping", icon: "MousePointer" },
      { name: "Design Systems", icon: "Grid" },
      { name: "Usability Testing", icon: "Users" },
    ],
    whyUs: [
      "Kullanıcı araştırması temelli tasarım kararları",
      "Mobil-first ve responsive yaklaşım",
      "Erişilebilirlik (WCAG) standartlarına uyum",
      "Geliştirme ekipleriyle uyumlu design handoff",
      "Sürekli test ve iterasyon kültürü",
    ],
    faqs: [
      {
        question: "UI ve UX arasındaki fark nedir?",
        answer:
          "UX (User Experience) kullanıcının ürünle etkileşiminin bütününü kapsar: akış, bilgi mimarisi, kullanılabilirlik. UI (User Interface) ise görsel tasarım, renkler, tipografi ve butonlar gibi arayüz öğeleridir. İkisi birlikte güçlü bir deneyim yaratır.",
      },
      {
        question: "Mevcut ürünüm için UX denetimi yapabilir misiniz?",
        answer:
          "Evet. Mevcut arayüzünüzü analiz edip kullanılabilirlik sorunlarını, dönüşüm engellerini ve iyileştirme fırsatlarını raporluyoruz. Ardından öncelikli öneriler sunuyoruz.",
      },
      {
        question: "Tasarımları geliştirme ekibime nasıl aktarıyorsunuz?",
        answer:
          "Figma üzerinden geliştirici modu, CSS/spacing bilgileri ve component spec'leri sağlıyoruz. Gerekirse geliştirme ekibinizle sync toplantıları yapıyoruz.",
      },
    ],
    metaTitle: "UI/UX Tasarım & Kullanıcı Deneyimi | Ladda Studio",
    metaDescription:
      "Kullanıcı odaklı arayüz tasarımı, wireframe, prototip ve usability test. Dönüşüm odaklı UI/UX çözümleri.",
  },
];

// ============ PROJELER ============

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
  content?: string[];
}

export const projects: Project[] = [
  {
    slug: "tech-startup-rebrand",
    title: "Tech Startup Marka Yenileme",
    client: "Anonim",
    category: "Marka Kimliği",
    description:
      "Yeni nesil bir SaaS şirketi için sıfırdan marka kimliği ve web sitesi tasarımı.",
    image: "/projects/tech-startup.jpg",
    tags: ["Branding", "Web Design", "UI/UX"],
    year: "2024",
    link: "https://example.com",
    content: [
      "Müşterimiz, B2B SaaS pazarına giren yeni bir teknoloji şirketiydi. Mevcut kimlikleri belirsiz ve rakiplerinden ayırt edilemez durumdaydı. Hedef kitleleri CTO'lar ve teknik karar vericilerdi; bu yüzden güvenilir, modern ve profesyonel bir görünüm istiyorlardı.",
      "Marka keşfi workshop'unda değer önerilerini netleştirdik: hız, güvenilirlik ve yenilik. Bu üç temayı görsel dile yansıttık. Neon yeşil (#CCFF00) accent rengi enerji ve ilerlemeyi simgelerken, koyu arka plan premium his veriyordu.",
      "Logo, kurumsal kimlik seti, web sitesi ve sosyal medya şablonları teslim ettik. Launch sonrası marka bilinirliği %40 arttı.",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Ticaret Platformu Redesign",
    client: "Anonim",
    category: "Web Tasarım",
    description:
      "Mevcut e-ticaret sitesinin performans ve dönüşüm odaklı yeniden tasarımı.",
    image: "/projects/ecommerce.jpg",
    tags: ["E-Commerce", "Next.js", "SEO"],
    year: "2024",
    content: [
      "Müşterimizin e-ticaret sitesi yavaş, mobil uyumsuz ve dönüşüm oranları düşüktü. Core Web Vitals skorları kırmızı bölgedeydi. Next.js ile sıfırdan geliştirme kararı aldık.",
      "Ürün sayfalarını optimize ettik: hızlı yükleme, net CTA'lar, güven rozetleri. Checkout akışını 4 adımdan 2'ye indirdik. SEO için dinamik meta etiketleri ve schema markup ekledik.",
      "Sonuç: Sayfa yükleme süresi %60 azaldı, dönüşüm oranı %28 arttı, organik trafik 3 ay içinde 2x büyüdü.",
    ],
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard UI/UX",
    client: "Anonim",
    category: "UI/UX Tasarım",
    description:
      "Karmaşık finansal verileri sade ve anlaşılır şekilde sunan dashboard tasarımı.",
    image: "/projects/fintech.jpg",
    tags: ["UI/UX", "Dashboard", "Data Viz"],
    year: "2023",
    content: [
      "Fintech müşterimiz, kullanıcıların portföy performansını takip ettiği bir dashboard istiyordu. Mevcut arayüz karmaşık ve öğrenme eğrisi yüksekti. Kullanıcı araştırması yaptık: kullanıcılar hızlı özet, detaylı grafikler ve karşılaştırma araçları istiyordu.",
      "Bilgi mimarisini yeniden kurguladık. Ana metrikleri üstte, grafikleri ortada, detay tablolarını altta konumlandırdık. Koyu tema ile premium his ve göz yorgunluğunu azalttık. Erişilebilirlik için kontrast oranlarına dikkat ettik.",
      "Prototip testlerinde görev tamamlama süresi %45 azaldı. Müşteri memnuniyeti skorları yükseldi.",
    ],
  },
  {
    slug: "local-seo-campaign",
    title: "Yerel SEO Kampanyası",
    client: "Anonim",
    category: "SEO & Pazarlama",
    description:
      "Çok şubeli perakende markası için yerel SEO ve Google İşletmem optimizasyonu.",
    image: "/projects/local-seo.jpg",
    tags: ["SEO", "Local SEO", "Google Business"],
    year: "2023",
    content: [
      "Müşterimiz 15 şubeli bir perakende zinciriydi. Organik trafik düşüktü, Google İşletmem profilleri eksikti. Yerel aramalarda rakiplerin gerisindeydiler.",
      "Her şube için Google İşletmem profili oluşturduk. NAP (Name, Address, Phone) tutarlılığını sağladık. Şube bazlı landing page'ler ve yerel anahtar kelime stratejisi uyguladık. Müşteri yorumları yönetimi için süreç kurdük.",
      "6 ay içinde yerel aramalarda görünürlük %120 arttı. 12 şube ilk 3'e girdi.",
    ],
  },
];

// ============ ANA SAYFA İÇERİKLERİ ============

export const homeContent = {
  hero: {
    title: "We Load Your",
    titleAccent: "Digital Potential.",
    subtitle:
      "Dijital varlığınızı bir üst seviyeye taşıyoruz. Web tasarım, SEO, marka kimliği ve UI/UX ile markanızı geleceğe yüklüyoruz.",
    cta: "Projenizi Konuşalım",
    ctaSecondary: "Projelerimizi İnceleyin",
  },
  servicesPreview: {
    title: "Hizmetlerimiz",
    subtitle:
      "Dijital dönüşüm yolculuğunuzda ihtiyacınız olan tüm çözümleri tek çatı altında sunuyoruz.",
  },
  workPreview: {
    title: "Seçilmiş Projeler",
    subtitle: "Farklı sektörlerden markalarla gerçekleştirdiğimiz işlere göz atın.",
  },
  cta: {
    title: "Dijital Potansiyelinizi Keşfedin",
    subtitle:
      "Projenizi konuşmak, fikir almak veya teklif almak için bizimle iletişime geçin.",
    button: "İletişime Geçin",
  },
};

// ============ HAKKIMIZDA İÇERİKLERİ ============

export const aboutContent = {
  story: {
    title: "Ladda Hikayesi",
    paragraphs: [
      "Ladda, İsveççede 'yüklemek' veya 'şarj etmek' anlamına gelir. Biz de tam olarak bunu yapıyoruz: markaların dijital potansiyelini yüklüyor, enerji veriyor ve harekete geçiriyoruz.",
      "2020'lerde kurulan Ladda Studio, dijital dünyanın hızla değiştiğini ve markaların bu değişime ayak uydurmak zorunda olduğunu gördü. Sadece 'güzel tasarım' veya 'SEO' yeterli değildi; bütüncül bir yaklaşım gerekiyordu. Strateji, tasarım ve teknolojiyi bir araya getirerek, müşterilerimizin rakiplerinin önüne geçmesini sağlıyoruz.",
      "Kinetic Minimalism felsefemiz: hareket ve enerji, minimal ve odaklı tasarımla buluşuyor. Karanlık mod, neon vurgular ve akıcı animasyonlar sadece estetik tercih değil; teknolojik, premium ve güvenilir bir his yaratmak için kullanılıyor.",
    ],
  },
  values: [
    {
      title: "Strateji Önce",
      description:
        "Her projede önce hedefi anlıyoruz. Tasarım ve geliştirme, stratejiden sonra gelir.",
    },
    {
      title: "Şeffaflık",
      description:
        "Müşterilerimizi her adımda bilgilendiriyoruz. Gizli maliyet veya sürpriz yok.",
    },
    {
      title: "Kalite",
      description:
        "Apple ve Awwwards seviyesinde iş çıkarıyoruz. Orta yol yok.",
    },
    {
      title: "Sürdürülebilirlik",
      description:
        "Kısa vadeli hack'ler değil, uzun vadeli değer yaratan çözümler sunuyoruz.",
    },
  ],
  team: {
    title: "Ekibimiz",
    subtitle:
      "Tasarım, geliştirme ve pazarlama alanlarında uzmanlaşmış bir ekip.",
  },
};

// ============ İLETİŞİM ============

export const contactContent = {
  title: "İletişime Geçin",
  subtitle:
    "Projenizi konuşmak, teklif almak veya sadece merhaba demek için formu doldurun.",
  form: {
    name: "Ad Soyad",
    email: "E-posta",
    subject: "Konu",
    message: "Mesajınız",
    submit: "Gönder",
    success: "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
  info: {
    email: "info@ladda.studio",
    address: "İstanbul, Türkiye",
  },
};
