# Ladda Studio

**We Load Your Digital Potential.**

Ladda Studio için çok sayfalı, ultra-modern, SEO uyumlu kurumsal web sitesi.

## Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** + clsx/tailwind-merge
- **Framer Motion** (animasyonlar)
- **Lucide React** (ikonlar)
- **Fontlar:** Syne (başlıklar), Inter (metin)

## Proje Yapısı

```
ladda-studio/
├── app/
│   ├── layout.tsx          # Global layout, fontlar, metadata
│   ├── page.tsx            # Anasayfa
│   ├── about/page.tsx      # Hakkımızda
│   ├── services/
│   │   ├── page.tsx        # Hizmetler genel
│   │   └── [slug]/page.tsx # Hizmet detay (web-design, seo-marketing, vb.)
│   ├── work/
│   │   ├── page.tsx        # Projeler
│   │   └── [slug]/page.tsx # Proje detay
│   └── contact/page.tsx   # İletişim
├── components/
│   ├── Navbar.tsx         # Sticky navigasyon
│   ├── Footer.tsx         # Fat footer
│   ├── Hero.tsx           # Hero bileşeni
│   ├── ServiceCard.tsx    # Bento grid kartları
│   ├── ProjectGallery.tsx # Proje galerisi
│   ├── ContactForm.tsx    # İletişim formu
│   └── ...
├── lib/
│   ├── data.ts            # Tüm içerikler (hizmetler, projeler, metinler)
│   └── utils.ts           # cn() yardımcı fonksiyon
└── ...
```

## Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production başlat
npm start
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Özellikler

- ✅ **Kinetic Minimalism** tasarım dili (karanlık mod, neon vurgular)
- ✅ Sticky header, dropdown menü
- ✅ Bento grid hizmet kartları
- ✅ Sayfa bazlı SEO (generateMetadata)
- ✅ FAQ Schema (Google Rich Snippets)
- ✅ Framer Motion scroll animasyonları
- ✅ Responsive, mobil uyumlu
- ✅ Türkçe içerik (Lorem Ipsum yok)

## İçerik Yönetimi

Tüm site metinleri `lib/data.ts` dosyasında merkezi olarak yönetilir. Hizmet eklemek, proje güncellemek veya metin değiştirmek için bu dosyayı düzenleyin.
