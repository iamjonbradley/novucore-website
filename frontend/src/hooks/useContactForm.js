import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API_BASE = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;
const SUBMIT_TIMEOUT_MS = 20000;
const MIN_MESSAGE_LEN = 10;

export const initialInquiry = Object.freeze({
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
});

/** Pure validation — returns the first user-facing error or null. */
export function validateInquiry(form) {
  if (!form.name || !form.email || !form.message) {
    return "Please fill in your name, email and a short message.";
  }
  if (form.message.trim().length < MIN_MESSAGE_LEN) {
    return `Please share a little more about your project (${MIN_MESSAGE_LEN}+ chars).`;
  }
  return null;
}

function extractServerError(err) {
  const data = err?.response?.data;
  return data?.detail || data?.error || err?.message || "Network error. Please try again.";
}

/**
 * Encapsulates the contact form state, validation, and submission flow so the
 * component stays presentational.
 */
export function useContactForm() {
  const [form, setForm] = useState({ ...initialInquiry });
  const [submitting, setSubmitting] = useState(false);

  const setField = useCallback(
    (key) => (eOrValue) => {
      const value = eOrValue?.target ? eOrValue.target.value : eOrValue;
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const setSelect = useCallback(
    (key) => (value) => setForm((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const reset = useCallback(() => setForm({ ...initialInquiry }), []);

  const submit = useCallback(
    async (e) => {
      if (e?.preventDefault) e.preventDefault();

      const validationError = validateInquiry(form);
      if (validationError) {
        toast.error(validationError);
        return;
      }

      setSubmitting(true);
      try {
        const { data } = await axios.post(`${API_BASE}/contact`, form, {
          timeout: SUBMIT_TIMEOUT_MS,
        });
        if (data?.ok) {
          reset();
          toast.success("Thanks — we’ll be in touch within 1 business day.");
        } else {
          toast.error(data?.error || "Something went wrong. Please try again.");
        }
      } catch (err) {
        const msg = extractServerError(err);
        toast.error(typeof msg === "string" ? msg : "Could not send inquiry.");
      } finally {
        setSubmitting(false);
      }
    },
    [form, reset],
  );

  return { form, submitting, setField, setSelect, submit };
}
