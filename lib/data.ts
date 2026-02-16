/**
 * Ladda Studio - Lüks Kuaför & Güzellik Salonu
 * Merkezi Veri Yapısı
 */

export const siteConfig = {
  name: "Ladda Studio",
  slogan: "Your Hair, Your Signature.",
  tagline: "The Art of Hair.",
  email: "info@ladda.studio",
  phone: "+90 212 000 00 00",
  address: "Nişantaşı, İstanbul",
  instagram: "https://instagram.com/laddastudio",
  hours: {
    weekdays: "10:00 - 20:00",
    saturday: "10:00 - 18:00",
    sunday: "Kapalı",
  },
};

// ============ HİZMETLER (KUAFÖR) ============

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  priceRange?: string;
  intro: string[];
  details: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "cut-style",
    shortTitle: "Cut & Style",
    title: "Kesim & Şekillendirme",
    description: "Modern kesimler, fön ve kişiye özel şekillendirme.",
    icon: "Scissors",
    priceRange: "₺800 - ₺2.500",
    intro: [
      "Saçınız sizin imzanızdır. Ladda Studio'da her kesim, yüz hatlarınıza ve yaşam tarzınıza özel tasarlanır. Klasik bob'tan katlı kesimlere, pixie'den uzun katlara kadar geniş bir yelpazede hizmet sunuyoruz.",
      "Deneyimli stilistlerimiz, en son trendleri kişisel tarzınızla harmanlayarak size özel bir görünüm yaratır. Fön, düzleştirme ve şekillendirme dahil tüm işlemler premium ürünlerle gerçekleştirilir.",
    ],
    details: [
      "Kadın Kesimi",
      "Erkek Kesimi",
      "Çocuk Kesimi",
      "Fön & Blow Dry",
      "Düzleştirme",
      "Şekillendirme",
    ],
    faqs: [
      {
        question: "Randevu ne kadar süre önceden alınmalı?",
        answer:
          "Özellikle hafta sonu ve özel günlerde yoğunluk yaşanabildiği için en az 2-3 gün önceden randevu almanızı öneririz.",
      },
      {
        question: "Kesim süresi ne kadardır?",
        answer:
          "Kesim türüne göre 45 dakika ile 1,5 saat arasında değişir. Fön ve şekillendirme dahil toplam süre yaklaşık 1-2 saattir.",
      },
      {
        question: "Kendi ürünlerimi getirebilir miyim?",
        answer:
          "Salonumuzda profesyonel ürünler kullanıyoruz. Özel bir ürün kullanmak isterseniz, önceden bilgi verirseniz değerlendirebiliriz.",
      },
    ],
    metaTitle: "Kesim & Şekillendirme | Ladda Studio",
    metaDescription:
      "Modern kesimler, fön ve kişiye özel şekillendirme. İstanbul'un en prestijli kuaför salonunda saçınıza yeni bir imza atın.",
  },
  {
    slug: "color-studio",
    shortTitle: "Color Studio",
    title: "Renklendirme Stüdyosu",
    description: "Ombre, balayage, sombre ve dip boya ile saçınıza hayat verin.",
    icon: "Palette",
    priceRange: "₺1.500 - ₺5.000",
    intro: [
      "Renk, kişiliğinizi yansıtan en güçlü ifade aracıdır. Color Studio'muzda ombre, sombre, balayage, dip boya ve tam renklendirme hizmetleri sunuyoruz. Her ton, cilt tonunuza ve tarzınıza özel seçilir.",
      "Uluslararası markalardan premium boyalar kullanıyoruz. Renk danışmanlığı ile birlikte size en uygun tekniği belirliyor, saç sağlığınızı koruyarak muhteşem sonuçlar elde ediyoruz.",
    ],
    details: [
      "Ombre",
      "Sombre",
      "Balayage",
      "Dip Boya",
      "Tam Renklendirme",
      "Gri Kapatma",
      "Babuşka",
    ],
    faqs: [
      {
        question: "İlk kez boya yaptıracaklar için ne önerirsiniz?",
        answer:
          "Önce ücretsiz renk danışmanlığı almanızı öneririz. Cilt tonunuza, saç yapınıza ve yaşam tarzınıza uygun renk ve teknik belirlenir.",
      },
      {
        question: "Boyadan sonra bakım gerekir mi?",
        answer:
          "Evet. Renkli saçlar özel bakım ister. Size uygun şampuan, maske ve bakım ürünleri öneriyoruz.",
      },
      {
        question: "Balayage ne kadar sürer?",
        answer:
          "Saç uzunluğuna ve yoğunluğuna göre 2-4 saat arasında değişir. Kahve ve atıştırmalık ikramlarımız eşliğinde rahat bir deneyim sunuyoruz.",
      },
    ],
    metaTitle: "Renklendirme | Ombre, Balayage | Ladda Studio",
    metaDescription:
      "Ombre, sombre, balayage ve dip boya. İstanbul'da premium saç renklendirme hizmeti.",
  },
  {
    slug: "hair-care",
    shortTitle: "Hair Care",
    title: "Saç Bakım & Tedavi",
    description: "Keratin, botoks ve saç kurtarma tedavileri.",
    icon: "Sparkles",
    priceRange: "₺1.200 - ₺4.000",
    intro: [
      "Sağlıklı saç, güzel saçtır. Keratin bakımı, saç botoksu, protein tedavileri ve saç kurtarma protokolleri ile saçınızı güçlendiriyor, parlaklık ve yumuşaklık kazandırıyoruz.",
      "Her saç tipi farklı ihtiyaç duyar. Uzman ekibimiz saç analizi yaparak size özel bir bakım planı oluşturur. Ürünlerimiz sert kimyasallar içermez; doğal ve etkili formüller tercih ediyoruz.",
    ],
    details: [
      "Keratin Bakımı",
      "Saç Botoksu",
      "Protein Tedavisi",
      "Saç Kurtarma",
      "Nem Maskesi",
      "Saç Derisi Masajı",
    ],
    faqs: [
      {
        question: "Keratin bakımı ne kadar sürer?",
        answer:
          "İşlem 2-3 saat sürer. Sonuç 2-4 ay boyunca kalıcıdır. Düzleştirici kullanımı azalır, saç daha yönetilebilir olur.",
      },
      {
        question: "Saç botoksu ile keratin farkı nedir?",
        answer:
          "Keratin daha çok düzleştirme ve hacim verme odaklıdır. Botoks ise nemlendirme, onarım ve parlaklık sağlar. İkisi birlikte de uygulanabilir.",
      },
      {
        question: "Hangi sıklıkta bakım yaptırmalıyım?",
        answer:
          "Saç tipinize göre 4-8 haftada bir maske veya tedavi öneriyoruz. Danışmanlıkta kişisel program oluşturulur.",
      },
    ],
    metaTitle: "Saç Bakım & Tedavi | Keratin, Botoks | Ladda Studio",
    metaDescription:
      "Keratin bakımı, saç botoksu ve protein tedavileri. Saçınıza profesyonel bakım.",
  },
  {
    slug: "bridal-special",
    shortTitle: "Bridal & Special",
    title: "Gelin & Özel Günler",
    description: "Gelin başı, nişan saçı ve özel günler için tasarım.",
    icon: "Heart",
    priceRange: "₺2.500 - ₺8.000",
    intro: [
      "Hayatınızın en özel gününde saçınız mükemmel görünmeli. Gelin başı, nişan saçı, düğün öncesi bakım ve özel gün tasarımları için Ladda Studio yanınızda.",
      "Deneme seansları ile tam istediğiniz görünümü yakalıyoruz. Elmas, inciler veya çiçeklerle süslenmiş romantik topuzlardan modern dalgalı saçlara kadar hayalinizdeki stili yaratıyoruz.",
    ],
    details: [
      "Gelin Başı",
      "Nişan Saçı",
      "Deneme Seansı",
      "Düğün Öncesi Bakım",
      "Özel Gün Tasarımı",
      "Aksesuar Entegrasyonu",
    ],
    faqs: [
      {
        question: "Gelin paketi ne içerir?",
        answer:
          "Deneme seansı, düğün günü saç ve makyaj, aksesuar kullanımı dahildir. Paketler düğün büyüklüğüne göre özelleştirilir.",
      },
      {
        question: "Deneme seansı ne zaman yapılmalı?",
        answer:
          "Düğünden 1-2 ay önce öneriyoruz. Böylece gerekirse ek deneme veya değişiklik yapılabilir.",
      },
      {
        question: "Salona mı yoksa mekana mı geliyorsunuz?",
        answer:
          "Her iki seçenek de mevcuttur. Mekan hizmeti için ek ücret ve ulaşım süresi değerlendirilir.",
      },
    ],
    metaTitle: "Gelin Başı & Özel Günler | Ladda Studio",
    metaDescription:
      "Gelin başı, nişan saçı ve düğün öncesi bakım. Hayalinizdeki gün için saç tasarımı.",
  },
];

// ============ EKİP (STİLİSTLER) ============

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
    role: "Top Stylist",
    specialty: "Kesim & Şekillendirme",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop",
    bio: "15 yıllık deneyim. Milano ve Paris'te eğitim aldı.",
  },
  {
    slug: "stylist-2",
    name: "Can Öztürk",
    role: "Color Expert",
    specialty: "Renklendirme & Balayage",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop",
    bio: "Uluslararası renk uzmanı. Wella Professionals sertifikalı.",
  },
  {
    slug: "stylist-3",
    name: "Selin Demir",
    role: "Senior Stylist",
    specialty: "Bakım & Tedavi",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop",
    bio: "Keratin ve botoks uzmanı. Saç sağlığı odaklı yaklaşım.",
  },
  {
    slug: "stylist-4",
    name: "Burak Kaya",
    role: "Bridal Specialist",
    specialty: "Gelin & Özel Günler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    bio: "Özel günlerde hayalleri gerçeğe dönüştürüyor.",
  },
];

// ============ GALERİ (LOOKBOOK) ============

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
    title: "Balayage Waves",
    category: "Renklendirme",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-2",
    title: "Classic Bob",
    category: "Kesim",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop",
    aspect: "landscape",
  },
  {
    slug: "look-3",
    title: "Bridal Updo",
    category: "Gelin",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-4",
    title: "Ombre Curls",
    category: "Renklendirme",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop",
    aspect: "square",
  },
  {
    slug: "look-5",
    title: "Pixie Cut",
    category: "Kesim",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-6",
    title: "Soft Waves",
    category: "Şekillendirme",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
    aspect: "landscape",
  },
  {
    slug: "look-7",
    title: "Sombre Long",
    category: "Renklendirme",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=800&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "look-8",
    title: "Elegant Updo",
    category: "Özel Gün",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=600&fit=crop",
    aspect: "square",
  },
];

// ============ ANA SAYFA ============

export const homeContent = {
  hero: {
    title: "Your Hair,",
    titleAccent: "Your Signature.",
    subtitle:
      "Modern kesimler, kişiye özel renklendirme ve profesyonel saç bakımı. İstanbul'un en prestijli kuaför stüdyosunda kendinizi keşfedin.",
    cta: "Randevu Al",
    ctaLink: "/contact",
  },
  servicesPreview: {
    title: "Hizmetlerimiz",
    subtitle: "Saçınıza özel, uzman ellerde.",
  },
  teamPreview: {
    title: "Meet the Artists",
    subtitle: "Tutkulu ve deneyimli stilistlerimizle tanışın.",
  },
  galleryPreview: {
    title: "Lookbook",
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
