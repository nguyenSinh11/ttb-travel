import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-app py-16">
      <h1 className="text-3xl font-black">404</h1>
      <p className="mt-2 text-slate-600">Trang không tồn tại.</p>
      <Link to="/" className="mt-5 inline-block font-bold text-emerald-700 hover:underline">
        Về trang chủ →
      </Link>
    </section>
  );
}
