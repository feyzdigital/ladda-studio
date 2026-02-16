/**
 * Ladda Studio - Beşiktaş'ta Afrika Esintisi
 * Merkezi Veri Yapısı
 */

export const siteConfig = {
  name: "Ladda Studio",
  slogan: "Beşiktaş'ta Afrika Esintisi",
  tagline: "Şimdi Kendini Keşfet",
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

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image?: string;
  priceRange?: string;
  intro: string[];
  details: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "afrika-orgusu",
    shortTitle: "Afrika Örgüsü",
    title: "Afrika Örgüsü Uzmanlığı",
    description: "Saçınıza modern ve zamansız bir hava katan ince örgü tekniği.",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    priceRange: "₺1.500 - ₺4.000",
    intro: [
      "Afrika örgüsü, saçınıza modern ve zamansız bir hava katarak hem estetik hem de pratik bir stil sunar. Bu teknikle saçlarınızın doğal yapısı korunarak, ince örgülerle sentetik ya da doğal saçlar eklenerek uzunluk ve yoğunluk kazandırılır.",
      "Uzman ekibimiz, yüz hatlarınıza ve tarzınıza en uygun örgü modelini belirleyerek size özel bir görünüm yaratır. Uzun ömürlü ve bakımı kolay bir stil elde edersiniz.",
    ],
    details: [
      "İnce Örgü",
      "Orta Kalınlık Örgü",
      "Kalın Örgü",
      "Doğal Saç Ekimi",
      "Sentetik Saç Ekimi",
      "Renkli Örgü",
    ],
    faqs: [
      {
        question: "Afrika örgüsü ne kadar sürede yapılır?",
        answer:
          "Saç uzunluğuna ve örgü kalınlığına göre 4-8 saat arasında değişir. Rahat bir ortamda kahve ve ikramlar eşliğinde hizmet veriyoruz.",
      },
      {
        question: "Örgü ne kadar süre kalır?",
        answer:
          "Doğru bakımla 6-8 hafta boyunca şeklini korur. Bu süre sonunda yenileme veya farklı bir model deneyebilirsiniz.",
      },
      {
        question: "Kendi saçıma zarar verir mi?",
        answer:
          "Profesyonel uygulama ve doğru ürünlerle saçınızın doğal yapısı korunur. Örgü öncesi ve sonrası bakım önerileri sunuyoruz.",
      },
    ],
    metaTitle: "Afrika Örgüsü Uzmanlığı | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta Afrika örgüsü. İnce örgü tekniği ile uzunluk ve hacim. Uzman ellerde.",
  },
  {
    slug: "afro-dalgasi",
    shortTitle: "Afro Dalgası",
    title: "Afro Dalgası Saç Modeli",
    description: "Saça volüm, hareket ve doğal dalga formu kazandıran özel uygulama.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&h=600&fit=crop",
    priceRange: "₺800 - ₺2.500",
    intro: [
      "Afro dalgası, saça volüm, hareket ve doğal dalga formu kazandıran özel bir uygulamadır. Saçınızın kendi dokusuyla uyumlu bir görünüm elde edilmesini sağlayarak, hem modern hem etnik bir stil sunar.",
      "Doğal saç yapınıza saygı gösteren bu teknik, günlük kullanım için pratik ve şık bir alternatiftir. Uzman stilistlerimiz size en uygun dalga yoğunluğunu belirler.",
    ],
    details: [
      "Doğal Dalga",
      "Yoğun Dalga",
      "Hafif Dalga",
      "Saç Bakımı",
      "Şekillendirme",
    ],
    faqs: [
      {
        question: "Afro dalgası hangi saç tiplerine uygundur?",
        answer:
          "Özellikle kıvırcık ve dalgalı saç yapılarına ideal olmakla birlikte, düz saçlara da özel tekniklerle uygulanabilir.",
      },
      {
        question: "Ne kadar süre kalıcıdır?",
        answer:
          "Bakıma bağlı olarak 2-4 hafta boyunca şeklini korur. Nemlendirici ürünlerle ömrü uzatılabilir.",
      },
      {
        question: "Yıkarken dikkat edilmesi gerekenler nelerdir?",
        answer:
          "Ilık su ve nemlendirici şampuan kullanmanızı öneriyoruz. Kurutma sonrası bakım yağı uygulayabilirsiniz.",
      },
    ],
    metaTitle: "Afro Dalgası Saç Modeli | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta afro dalgası. Volüm ve doğal dalga formu. Profesyonel uygulama.",
  },
  {
    slug: "misir-orgusu",
    shortTitle: "Mısır Örgüsü",
    title: "Mısır Örgüsü Sanatı",
    description: "Saç tellerinin dipten şeritler halinde örüldüğü klasik Afrika stili.",
    icon: "Grid3X3",
    image: "https://images.unsplash.com/photo-1616394584738-fc7628d92f85?w=800&h=600&fit=crop",
    priceRange: "₺1.200 - ₺3.500",
    intro: [
      "Mısır örgüsü, saç tellerinin dipten itibaren şeritler halinde sıkı ve düzenli bir şekilde örüldüğü klasik Afrika saç stilidir. Sadece estetik bir görünüm sunmakla kalmaz; aynı zamanda pratiklik ve uzun ömürlü kullanım avantajı da sağlar.",
      "Farklı desen ve motiflerle kişiye özel tasarımlar yapıyoruz. Yaz aylarında serinletici, günlük hayatta pratik bir tercihtir.",
    ],
    details: [
      "Klasik Mısır Örgüsü",
      "Desenli Mısır Örgüsü",
      "Yarım Baş Örgü",
      "Tam Baş Örgü",
      "Örgü + Serbest Saç",
    ],
    faqs: [
      {
        question: "Mısır örgüsü ne kadar sürer?",
        answer:
          "Desen karmaşıklığına göre 2-5 saat arasında değişir. Detaylı bilgi için randevu sırasında değerlendirme yapıyoruz.",
      },
      {
        question: "Saç derisine zarar verir mi?",
        answer:
          "Profesyonel uygulamada saç derisi korunur. Çok sıkı örülmemesi ve düzenli bakım önemlidir.",
      },
      {
        question: "Hangi mevsimde daha uygundur?",
        answer:
          "Özellikle yaz aylarında serinletici etkisiyle tercih edilir. Tüm mevsimlerde uygulanabilir.",
      },
    ],
    metaTitle: "Mısır Örgüsü Sanatı | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta mısır örgüsü. Klasik Afrika stili. Uzun ömürlü ve pratik.",
  },
  {
    slug: "burgu-orgu",
    shortTitle: "Burgu Örgü",
    title: "Burgu Örgü – Zarif ve Modern Stil",
    description: "Saç tellerinin çift bükülmesiyle oluşturulan zarif model.",
    icon: "CircleDot",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    priceRange: "₺1.000 - ₺3.000",
    intro: [
      "Burgu örgü, saç tellerinin çift olarak bükülüp burgu hâline getirilmesiyle oluşturulan zarif bir modeldir. Az işlem gereksinimi ve şık görünümüyle birçok kişi tarafından tercih edilir.",
      "Hem günlük hem özel günler için uygun bu stil, saçınıza yumuşak ve doğal bir görünüm kazandırır. Farklı kalınlık ve uzunluk seçenekleri sunuyoruz.",
    ],
    details: [
      "İnce Burgu",
      "Kalın Burgu",
      "İki Ton Burgu",
      "Tam Baş Burgu",
      "Yarım Burgu",
    ],
    faqs: [
      {
        question: "Burgu örgü ile diğer örgüler arasındaki fark nedir?",
        answer:
          "Burgu örgüde saç üç yerine iki parçada bükülür. Daha yumuşak ve doğal bir görünüm sağlar.",
      },
      {
        question: "Ne kadar süre kalır?",
        answer:
          "2-4 hafta boyunca şeklini korur. Nemlendirme ile ömrü uzatılabilir.",
      },
      {
        question: "Renkli burgu yapılabilir mi?",
        answer:
          "Evet. Tek renk veya karışık renklerle kişiye özel tasarımlar yapıyoruz.",
      },
    ],
    metaTitle: "Burgu Örgü | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta burgu örgü. Zarif ve modern stil. Profesyonel uygulama.",
  },
  {
    slug: "orgu-kaynak",
    shortTitle: "Örgü Kaynak",
    title: "Örgü Kaynak Hizmeti – Uzunluk ve Hacim",
    description: "Saçınıza örgü tekniğiyle uzunluk ve hacim kazandırma.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
    priceRange: "₺2.000 - ₺5.000",
    intro: [
      "Örgü kaynak hizmeti ile saçınıza istediğiniz uzunluk ve hacmi kazandırıyoruz. Doğal veya sentetik saç eklemesiyle mevcut saçınız örülerek uzatılır ve yoğunlaştırılır.",
      "Farklı örgü stilleriyle birleştirilebilen bu teknik, kalıcı ve doğal görünümlü sonuçlar sunar. Uzman ekibimiz size en uygun malzeme ve tekniği önerir.",
    ],
    details: [
      "Doğal Saç Kaynak",
      "Sentetik Saç Kaynak",
      "İnce Örgü Kaynak",
      "Kalın Örgü Kaynak",
      "Karışık Renk Kaynak",
    ],
    faqs: [
      {
        question: "Örgü kaynak ne kadar sürede yapılır?",
        answer:
          "Uzunluk ve yoğunluğa göre 5-10 saat arasında değişir. Molalarla birlikte rahat bir deneyim sunuyoruz.",
      },
      {
        question: "Kaynak saçlar ne kadar dayanır?",
        answer:
          "Bakıma bağlı olarak 2-3 ay kullanılabilir. Düzenli bakım önerileri veriyoruz.",
      },
      {
        question: "Kendi saçıma uyum sağlar mı?",
        answer:
          "Renk ve doku eşleştirmesi yaparak doğal bir geçiş sağlıyoruz.",
      },
    ],
    metaTitle: "Örgü Kaynak Hizmeti | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta örgü kaynak. Uzunluk ve hacim. Doğal ve sentetik seçenekler.",
  },
  {
    slug: "igne-kaynak",
    shortTitle: "İğne Kaynak",
    title: "İğne Kaynak Saç Uzatma",
    description: "İğne tekniğiyle saç uzatma ve hacim kazandırma.",
    icon: "Plus",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop",
    priceRange: "₺2.500 - ₺6.000",
    intro: [
      "İğne kaynak tekniği ile saçınıza eklenen doğal veya sentetik saçlar, küçük iğneler yardımıyla mevcut saçınıza tutturulur. Örgüye alternatif olarak daha hızlı ve farklı bir görünüm sunar.",
      "Daha az yoğunluk isteyenler için ideal bir seçenektir. Saç derinize minimal temas ile uzunluk ve hacim kazandırıyoruz.",
    ],
    details: [
      "Doğal Saç İğne Kaynak",
      "Sentetik İğne Kaynak",
      "Yarım Baş Uzatma",
      "Tam Baş Uzatma",
      "Renk Eşleştirme",
    ],
    faqs: [
      {
        question: "İğne kaynak örgü kaynaktan farklı mı?",
        answer:
          "Evet. İğne kaynakta saç örülmez, küçük tutamlar halinde iğneyle tutturulur. Daha serbest bir görünüm sağlar.",
      },
      {
        question: "Ne kadar sürede uygulanır?",
        answer:
          "Örgü kaynaktan daha kısa sürer, yaklaşık 3-6 saat arasındadır.",
      },
      {
        question: "Bakımı nasıldır?",
        answer:
          "Özel tarak ve nemlendirici ürünlerle bakım yapmanızı öneriyoruz. Detaylı bilgi randevuda verilir.",
      },
    ],
    metaTitle: "İğne Kaynak Saç Uzatma | Ladda Studio Beşiktaş",
    metaDescription:
      "Beşiktaş'ta iğne kaynak saç uzatma. Hızlı ve doğal görünüm.",
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
    specialty: "Afrika Örgüsü ve Mısır Örgüsü",
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
    specialty: "Burgu Örgü ve Kaynak",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop",
    bio: "Burgu örgü ve saç uzatma teknikleri uzmanı.",
  },
  {
    slug: "stylist-4",
    name: "Burak Kaya",
    role: "Kaynak Uzmanı",
    specialty: "Örgü Kaynak ve İğne Kaynak",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    bio: "Saç uzatma ve kaynak tekniklerinde uzman.",
  },
];

// ============ GALERİ ============

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
    title: "Mısır Örgüsü",
    category: "Mısır Örgüsü",
    image: "https://images.unsplash.com/photo-1616394584738-fc7628d92f85?w=600&h=400&fit=crop",
    aspect: "landscape",
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
    title: "Burgu Örgü",
    category: "Burgu Örgü",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop",
    aspect: "square",
  },
  {
    slug: "look-5",
    title: "Örgü Kaynak",
    category: "Örgü Kaynak",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-6",
    title: "Uzun Örgü",
    category: "Afrika Örgüsü",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
    aspect: "landscape",
  },
  {
    slug: "look-7",
    title: "İğne Kaynak",
    category: "İğne Kaynak",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-8",
    title: "Desenli Örgü",
    category: "Mısır Örgüsü",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=600&fit=crop",
    aspect: "square",
  },
];

// ============ ANA SAYFA ============

export const homeContent = {
  hero: {
    title: "Beşiktaş'ta",
    titleAccent: "Afrika Esintisi",
    subtitle:
      "Afrika örgüsü, mısır örgüsü, burgu örgü ve saç uzatma. Profesyonel ekibimiz ve modern tekniklerimizle size en uygun saç modelini bulmanız için buradayız.",
    cta: "Randevu Al",
    ctaLink: "/contact",
  },
  servicesPreview: {
    title: "Hizmetlerimiz",
    subtitle: "Saçınıza özel, uzman ellerde.",
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
