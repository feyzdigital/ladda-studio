import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Ladda Studio kullanım koşulları.",
};

export default function KullanimKosullariPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-3xl font-medium text-zinc-100">
        Kullanım Koşulları
      </h1>
      <p className="mt-8 text-zinc-400">
        Bu sayfa yakında güncellenecektir.
      </p>
    </article>
  );
}
