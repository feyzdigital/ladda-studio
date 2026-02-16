/**
 * Ladda Studio - Urban Hair Artistry
 * İstanbul'un Premium Afro Saç Stüdyosu
 */

export const siteConfig = {
  name: "Ladda Studio",
  slogan: "İstanbul'un Premium Afro Saç Stüdyosu",
  tagline: "Saçınızın Doğal Sanatı",
  email: "info@ladda.studio",
  phone: "+90 212 000 00 00",
  address: "Beşiktaş, İstanbul",
  instagram: "https://instagram.com/laddastudio",
  hours: {
    weekdays: "10:00 - 20:00",
    saturday: "10:00 - 18:00",
    sunday: "Kapalı",
  },
};

// ============ HİZMETLER ============

export interface ServiceVariation {
  name: string;
  image: string;
  description: string;
}

export interface MaintenanceItem {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string;
  icon: string;
  image?: string;
  intro: string[];
  details: string[];
  variations: ServiceVariation[];
  maintenance: MaintenanceItem[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "afrika-orgusu",
    shortTitle: "Afrika Örgüsü",
    title: "Afrika Örgüsü",
    description: "Box Braid, Knotless, Boho. Zamansız estetik.",
    focus: "Zamansız Estetik",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1067&fit=crop",
    intro: [
      "Afrika örgüsü, saçınıza modern ve zamansız bir hava katarak hem estetik hem de pratik bir stil sunar. Box Braid, Knotless ve Boho varyasyonlarıyla yüz hatlarınıza en uygun modeli yaratıyoruz.",
      "Uzman ekibimiz, doğal yapınızı koruyarak ince örgülerle uzunluk ve yoğunluk kazandırır. Uzun ömürlü ve bakımı kolay bir stil elde edersiniz.",
    ],
    details: ["Box Braid", "Knotless", "Boho", "İnce Örgü", "Kalın Örgü", "Renkli Örgü"],
    variations: [
      {
        name: "Box Braid",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
        description: "Klasik kutu örgü tekniği. Temiz çizgiler ve zamansız görünüm.",
      },
      {
        name: "Knotless",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=800&fit=crop",
        description: "Düğümsüz teknik. Daha hafif, doğal kök geçişi.",
      },
      {
        name: "Boho",
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop",
        description: "Bohem tarzı serbest örgü. Rahat ve artistik.",
      },
    ],
    maintenance: [
      { title: "Nemlendirme", description: "Saç yağı veya nemlendirici sprey ile günlük bakım.", icon: "Droplet" },
      { title: "Örtü Kullanımı", description: "Uyurken ipek veya saten bone ile koruma.", icon: "Moon" },
      { title: "Yıkama Sıklığı", description: "2-3 haftada bir hafif şampuan ile yıkama.", icon: "Sparkles" },
    ],
    faqs: [
      {
        question: "Afrika örgüsü saçı döker mi?",
        answer:
          "Profesyonel uygulama ve doğru bakımla saçınızın doğal yapısı korunur. Örgü öncesi ve sonrası bakım önerileri sunuyoruz.",
      },
      {
        question: "Afrika örgüsü ne kadar kullanılır?",
        answer:
          "Doğru bakımla 6-8 hafta boyunca şeklini korur. Bu süre sonunda yenileme veya farklı bir model deneyebilirsiniz.",
      },
      {
        question: "Afrika örgüsü ne kadar sürede yapılır?",
        answer:
          "Saç uzunluğuna ve örgü kalınlığına göre 4-8 saat arasında değişir. Rahat bir ortamda hizmet veriyoruz.",
      },
    ],
    metaTitle: "Afrika Örgüsü | Ladda Studio İstanbul",
    metaDescription:
      "İstanbul'da Afrika örgüsü. Box Braid, Knotless, Boho. Zamansız estetik. Premium Afro Saç Stüdyosu.",
  },
  {
    slug: "afro-dalgasi",
    shortTitle: "Afro Dalgası",
    title: "Afro Dalgası",
    description: "Su Dalgası, Hacim. Doğal ve vahşi.",
    focus: "Doğal ve Vahşi",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&h=1067&fit=crop",
    intro: [
      "Afro dalgası, saça volüm, hareket ve doğal dalga formu kazandıran özel bir uygulamadır. Su dalgası tekniğiyle hacimli ve vahşi bir görünüm elde edersiniz.",
      "Doğal saç yapınıza saygı gösteren bu teknik, günlük kullanım için pratik ve şık bir alternatiftir.",
    ],
    details: ["Su Dalgası", "Hacim", "Doğal Dalga", "Yoğun Dalga", "Şekillendirme"],
    variations: [
      {
        name: "Su Dalgası",
        image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&h=800&fit=crop",
        description: "Dalgalı, akıcı form. Doğal hareket.",
      },
      {
        name: "Hacimli Afro",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop",
        description: "Tam hacim. Vahşi ve güçlü görünüm.",
      },
    ],
    maintenance: [
      { title: "Nemlendirme", description: "Bakım yağı ve nemlendirici ile günlük besleme.", icon: "Droplet" },
      { title: "Şekillendirme", description: "Özel ürünlerle dalga formunu koruma.", icon: "Sparkles" },
      { title: "Yıkama", description: "Ilık su ve nemlendirici şampuan. Kurutma sonrası yağ.", icon: "Waves" },
    ],
    faqs: [
      {
        question: "Afro dalgası saçı yıpratır mı?",
        answer:
          "Doğru ürünler ve profesyonel uygulamayla saçınız korunur. Nemlendirici ürünlerle ömrü uzatılabilir.",
      },
      {
        question: "Afro dalgası ne kadar kalıcıdır?",
        answer:
          "Bakıma bağlı olarak 2-4 hafta boyunca şeklini korur.",
      },
      {
        question: "Hangi saç tiplerine uygundur?",
        answer:
          "Özellikle kıvırcık ve dalgalı saç yapılarına ideal. Düz saçlara da özel tekniklerle uygulanabilir.",
      },
    ],
    metaTitle: "Afro Dalgası | Ladda Studio İstanbul",
    metaDescription:
      "İstanbul'da afro dalgası. Su dalgası, hacim. Doğal ve vahşi. Premium Afro Saç Stüdyosu.",
  },
  {
    slug: "cornrows",
    shortTitle: "Cornrows",
    title: "Cornrows",
    description: "Mısır Örgüsü, Desenli, Straight-Back. Geometrik disiplin.",
    focus: "Geometrik Disiplin",
    icon: "Grid3X3",
    image: "https://images.unsplash.com/photo-1616394584738-fc7628d92f85?w=800&h=1067&fit=crop",
    intro: [
      "Cornrows (mısır örgüsü), saç tellerinin dipten itibaren şeritler halinde sıkı ve düzenli örüldüğü klasik Afrika stilidir. Geometrik desenler ve straight-back teknikleriyle kişiye özel tasarımlar.",
      "Yaz aylarında serinletici, günlük hayatta pratik. Farklı desen ve motiflerle zamansız bir görünüm.",
    ],
    details: ["Mısır Örgüsü", "Desenli", "Straight-Back", "Yarım Baş", "Tam Baş", "Örgü + Serbest"],
    variations: [
      {
        name: "Straight-Back",
        image: "https://images.unsplash.com/photo-1616394584738-fc7628d92f85?w=600&h=800&fit=crop",
        description: "Düz, arkaya doğru örülmüş klasik stil.",
      },
      {
        name: "Desenli",
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop",
        description: "Geometrik motifler. Kişiye özel tasarım.",
      },
    ],
    maintenance: [
      { title: "Nemlendirme", description: "Saç derisi ve örgü diplerine hafif yağ uygulaması.", icon: "Droplet" },
      { title: "Örtü", description: "İpek bone ile uyku sırasında koruma.", icon: "Moon" },
      { title: "Gerginlik", description: "Çok sıkı örülmemesi önemli. Rahat hissettirmeli.", icon: "Sparkles" },
    ],
    faqs: [
      {
        question: "Cornrows saç derisine zarar verir mi?",
        answer:
          "Profesyonel uygulamada saç derisi korunur. Çok sıkı örülmemesi ve düzenli bakım önemlidir.",
      },
      {
        question: "Cornrows ne kadar sürer?",
        answer:
          "Desen karmaşıklığına göre 2-5 saat arasında değişir.",
      },
      {
        question: "Hangi mevsimde uygundur?",
        answer:
          "Özellikle yaz aylarında serinletici. Tüm mevsimlerde uygulanabilir.",
      },
    ],
    metaTitle: "Cornrows | Ladda Studio İstanbul",
    metaDescription:
      "İstanbul'da cornrows, mısır örgüsü. Desenli, straight-back. Geometrik disiplin. Premium Afro Saç Stüdyosu.",
  },
  {
    slug: "twist",
    shortTitle: "Twist",
    title: "Twist",
    description: "Burgu, Senegalese. Zarif koruma.",
    focus: "Zarif Koruma",
    icon: "CircleDot",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=1067&fit=crop",
    intro: [
      "Twist (burgu örgü), saç tellerinin çift bükülmesiyle oluşturulan zarif model. Senegalese twist ile saçınıza yumuşak koruma ve şık görünüm.",
      "Hem günlük hem özel günler için uygun. Az bakım gerektirir, doğal ve yumuşak bir stil sunar.",
    ],
    details: ["Burgu", "Senegalese", "İnce Twist", "Kalın Twist", "Tam Baş", "Yarım Twist"],
    variations: [
      {
        name: "Senegalese Twist",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
        description: "Klasik Senegalese tekniği. Zarif ve koruyucu.",
      },
      {
        name: "İnce Burgu",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop",
        description: "İnce twist. Hafif ve doğal görünüm.",
      },
    ],
    maintenance: [
      { title: "Nemlendirme", description: "Twist uçlarına ve diplere bakım yağı.", icon: "Droplet" },
      { title: "Örtü", description: "Saten veya ipek bone ile gece koruması.", icon: "Moon" },
      { title: "Yıkama", description: "2-3 haftada bir. Hafif şampuan, kurutma sonrası yağ.", icon: "Sparkles" },
    ],
    faqs: [
      {
        question: "Twist ile diğer örgüler arasındaki fark nedir?",
        answer:
          "Twist'te saç iki parçada bükülür, üç değil. Daha yumuşak ve doğal görünüm sağlar.",
      },
      {
        question: "Twist ne kadar süre kalır?",
        answer:
          "2-4 hafta boyunca şeklini korur. Nemlendirme ile ömrü uzatılabilir.",
      },
      {
        question: "Renkli twist yapılabilir mi?",
        answer:
          "Evet. Tek renk veya karışık renklerle kişiye özel tasarımlar yapıyoruz.",
      },
    ],
    metaTitle: "Twist | Ladda Studio İstanbul",
    metaDescription:
      "İstanbul'da twist, burgu örgü. Senegalese. Zarif koruma. Premium Afro Saç Stüdyosu.",
  },
];

// ============ EKİP ============

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "stylist-1",
    name: "Elif Yılmaz",
    role: "Örgü Uzmanı",
    specialty: "Afrika Örgüsü ve Cornrows",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop",
    bio: "15 yıllık deneyim. Afrika saç stilleri konusunda uzman.",
  },
  {
    slug: "stylist-2",
    name: "Can Öztürk",
    role: "Afro Stilisti",
    specialty: "Afro Dalgası ve Doğal Saç",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop",
    bio: "Doğal saç stilleri ve afro dalgası uzmanı.",
  },
  {
    slug: "stylist-3",
    name: "Selin Demir",
    role: "Kıdemli Stilist",
    specialty: "Twist ve Cornrows",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop",
    bio: "Twist ve cornrows teknikleri uzmanı.",
  },
];

// ============ GALERİ / LADDA KADINLARI ============

export interface GalleryItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  aspect?: "portrait" | "landscape" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    slug: "look-1",
    title: "Afrika Örgüsü",
    category: "Afrika Örgüsü",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-2",
    title: "Cornrows",
    category: "Cornrows",
    image: "https://images.unsplash.com/photo-1616394584738-fc7628d92f85?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-3",
    title: "Afro Dalgası",
    category: "Afro Dalgası",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-4",
    title: "Twist",
    category: "Twist",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-5",
    title: "Uzun Örgü",
    category: "Afrika Örgüsü",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-6",
    title: "Desenli Örgü",
    category: "Cornrows",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
];

// ============ ANA SAYFA ============

export const homeContent = {
  hero: {
    title: "Saçınızın Doğal Sanatı",
    titleAccent: "",
    subtitle: "İstanbul'un Premium Afro Saç Stüdyosu",
    cta: "Randevu Al",
    ctaLink: "/contact",
  },
  servicesPreview: {
    title: "Hizmetlerimiz",
    subtitle: "Saçınıza özel, uzman ellerde.",
  },
  philosophy: {
    title: "Neden Ladda?",
    subtitle: "Premium deneyimin temelleri",
    pillars: [
      {
        title: "Hijyen",
        description: "Tek kullanımlık malzemeler ve steril ortam.",
        icon: "Shield",
      },
      {
        title: "Profesyonel Teknik",
        description: "Uluslararası standartlarda eğitimli uzmanlar.",
        icon: "Award",
      },
      {
        title: "Premium Materyal",
        description: "En kaliteli saç ve bakım ürünleri.",
        icon: "Gem",
      },
    ],
  },
  socialProof: {
    title: "Ladda Kadınları",
    subtitle: "Gerçek Ladda deneyimleri",
  },
  teamPreview: {
    title: "Ekibimiz",
    subtitle: "Tutkulu ve deneyimli stilistlerimizle tanışın.",
  },
  galleryPreview: {
    title: "Çalışmalarımız",
    subtitle: "En son çalışmalarımızdan ilham alın.",
  },
};

// ============ İLETİŞİM ============

export const contactContent = {
  title: "Randevu & İletişim",
  subtitle: "Hayalinizdeki saç için bizimle iletişime geçin.",
  form: {
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    service: "Hizmet",
    date: "Tercih Edilen Tarih",
    message: "Notlarınız",
    submit: "Randevu Talebi Gönder",
    success: "Talebiniz alındı. En kısa sürede dönüş yapacağız.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
};
