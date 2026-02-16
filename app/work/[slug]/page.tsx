import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proje Bulunamadı" };
  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Tüm Projelere Dön
          </Link>

          <header className="mt-8">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h1 className="mt-2 font-syne text-3xl font-bold text-zinc-100 sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-muted">{project.year}</span>
            </div>
          </header>

          {/* Placeholder görsel */}
          <div className="mt-12 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="flex h-full items-center justify-center">
              <span className="font-syne text-6xl font-bold text-zinc-700">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Proje içeriği */}
          {project.content && (
            <div className="mt-16 space-y-6 text-muted">
              {project.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-muted"
            >
              Projeyi İncele
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </section>
    </>
  );
}
