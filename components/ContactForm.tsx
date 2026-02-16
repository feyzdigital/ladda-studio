"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { contactContent, services } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
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
          <label htmlFor="name" className="block text-sm font-medium text-silver">
            {contactContent.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-zinc-800 bg-background px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-silver">
            {contactContent.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-zinc-800 bg-background px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-silver">
            {contactContent.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full border border-zinc-800 bg-background px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="+90 5XX XXX XX XX"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-silver">
            {contactContent.form.service}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-zinc-800 bg-background px-4 py-3 text-zinc-100 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Hizmet seçin</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortTitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-silver">
          {contactContent.form.date}
        </label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-2 w-full border border-zinc-800 bg-background px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Örn: 15 Mart, öğleden sonra"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-silver">
          {contactContent.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full resize-none border border-zinc-800 bg-background px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Özel istekleriniz veya notlarınız..."
        />
      </div>

      {status === "success" && (
        <p className="border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
          {contactContent.form.success}
        </p>
      )}

      {status === "error" && (
        <p className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {contactContent.form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-accent-muted disabled:opacity-50"
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
