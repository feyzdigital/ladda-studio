"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { contactContent } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simüle form gönderimi - gerçek projede API endpoint'e bağlanır
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-300"
          >
            {contactContent.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-300"
          >
            {contactContent.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-300"
        >
          {contactContent.form.subject}
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-zinc-100 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Konu seçin</option>
          <option value="web-design">Web Tasarım</option>
          <option value="seo">SEO & Pazarlama</option>
          <option value="branding">Marka Kimliği</option>
          <option value="ui-ux">UI/UX Tasarım</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300"
        >
          {contactContent.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Projeniz hakkında bize bilgi verin..."
        />
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-accent/10 p-4 text-sm text-accent">
          {contactContent.form.success}
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
          {contactContent.form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-muted disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            {contactContent.form.submit}
            <Send size={18} />
          </>
        )}
      </button>
    </motion.form>
  );
}
