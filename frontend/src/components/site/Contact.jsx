import React, { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { company, projectTypes, budgetRanges } from "../../mock";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e?.target ? e.target.value : e }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and a short message.");
      return;
    }
    if (form.message.trim().length < 10) {
      toast.error("Please share a little more about your project (10+ chars).");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form, {
        timeout: 20000,
      });
      if (data?.ok) {
        setForm(initial);
        toast.success("Thanks — we’ll be in touch within 1 business day.");
      } else {
        toast.error(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.response?.data?.error ||
        err?.message ||
        "Network error. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not send inquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 bg-[#1F2A48] text-white overflow-hidden"
    >
      {/* Soft inner mesh */}
      <div
        className="absolute inset-0 -z-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 90% 0%, rgba(168,181,207,0.18) 0%, transparent 60%), radial-gradient(45% 40% at 0% 100%, rgba(220,227,240,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="font-mono-mini text-[#A8B5CF]">
              <span className="inline-block w-6 h-px bg-[#A8B5CF] mr-3 align-middle" />
              Contact
            </span>
            <h2 className="mt-4 font-display text-[44px] lg:text-[72px] leading-[1.0] tracking-[-0.04em]">
              Tell us about
              <br />
              your
              <span className="relative inline-block ml-3 align-baseline">
                <span className="relative z-10 px-3 text-[#1F2A48]">project.</span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-white -skew-x-6 rounded-md"
                />
              </span>
            </h2>
            <p className="mt-6 text-[#C5CDE0] leading-relaxed max-w-md">
              The more detail the better — timelines, links you love, examples of
              tone. We read every inquiry personally and reply within one
              business day.
            </p>

            <div className="mt-10 space-y-4 text-[14px]">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 link-underline w-fit text-white"
              >
                <Mail className="w-4 h-4" /> {company.email}
              </a>
              <div className="flex items-center gap-3 text-[#A8B5CF]">
                <MapPin className="w-4 h-4" /> {company.location}
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-2"
          >
            <Field label="Your name" required>
              <input
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Cooper"
                className="nv-input"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="jane@studio.com"
                className="nv-input"
              />
            </Field>
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+1 (555) 123-4567"
                className="nv-input"
                inputMode="tel"
                autoComplete="tel"
              />
            </Field>
            <Field label="Company (optional)">
              <input
                value={form.company}
                onChange={update("company")}
                placeholder="Acme Inc."
                className="nv-input"
              />
            </Field>
            <Field label="Project type">
              <Select
                value={form.projectType}
                onValueChange={(v) => setForm((f) => ({ ...f, projectType: v }))}
              >
                <SelectTrigger className="nv-input justify-between">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Budget" className="sm:col-span-2">
              <Select
                value={form.budget}
                onValueChange={(v) => setForm((f) => ({ ...f, budget: v }))}
              >
                <SelectTrigger className="nv-input justify-between">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="About the project" required className="sm:col-span-2">
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={6}
                placeholder="Goals, timelines, links — the more context, the better."
                className="nv-input resize-none"
              />
            </Field>

            <div className="sm:col-span-2 mt-6 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[12px] text-[#A8B5CF]">
                By submitting you agree we may reply to your email.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#F4F6FA] text-[#1F2A48] pl-6 pr-2 py-2 transition-colors disabled:opacity-60"
              >
                <span className="text-[15px] font-medium">
                  {submitting ? "Sending…" : "Send inquiry"}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .nv-input {
          width: 100%;
          background: transparent;
          color: #FFFFFF;
          border: 0;
          border-bottom: 1px solid #3B4A6E;
          padding: 14px 0;
          font-size: 15px;
          outline: none;
          transition: border-color .35s ease;
        }
        .nv-input::placeholder { color: #7B8AA6; }
        .nv-input:focus { border-bottom-color: #FFFFFF; }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, className = "", children }) => (
  <label className={`block py-3 ${className}`}>
    <span className="font-mono-mini text-[#A8B5CF]">
      {label}
      {required && <span className="text-white"> *</span>}
    </span>
    <div className="mt-1">{children}</div>
  </label>
);

export default Contact;
