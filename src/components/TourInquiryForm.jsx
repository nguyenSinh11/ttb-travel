import { useState } from "react";

export default function TourInquiryForm({ tourTitle }) {
  const FORMSPREE_URL = "https://formspree.io/f/xqeddoqa";
  // 👉 replace with your own Formspree endpoint if needed

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    people: 2,
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tour: tourTitle,
        ...form,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        people: 2,
        note: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-3"
      />

      <input
        name="phone"
        placeholder="Phone number / WhatsApp"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-3"
      />

      <input
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        type="number"
        name="people"
        min="1"
        value={form.people}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <textarea
        name="note"
        placeholder="Notes / Special requests"
        value={form.note}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 text-white rounded-xl py-3 font-bold hover:bg-slate-800 transition"
      >
        {loading ? "Sending..." : "Request a Consultation"}
      </button>

      {success && (
        <p className="text-green-600 font-medium">
          ✅ Sent successfully! Our team will contact you shortly.
        </p>
      )}
    </form>
  );
}
