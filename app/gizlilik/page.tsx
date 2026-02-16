import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Ladda Studio gizlilik politikası.",
};

export default function GizlilikPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-3xl font-medium text-zinc-100">
        Gizlilik Politikası
      </h1>
      <p className="mt-8 text-zinc-400">
        Bu sayfa yakında güncellenecektir.
      </p>
    </article>
  );
}
