export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-8">
            Liên hệ với chúng tôi
          </h1>

          <div className="space-y-6 text-lg">

            <div>
              <h2 className="font-semibold text-gray-700">📍 Địa chỉ</h2>
              <p>
                Số 4, Ngõ 56, Phố Nguyễn Phúc Lai, <br />
                Phường Ô Chợ Dừa, Thành phố Hà Nội
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700">📞 Điện thoại</h2>
              <a
                href="tel:0437125999"
                className="text-blue-600 hover:underline"
              >
                0437 125 999
              </a>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700">✉ Email</h2>
              <a
                href="mailto:lienhe@vntax.net"
                className="text-blue-600 hover:underline"
              >
                lienhe@vntax.net
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Số+4+Ngõ+56+Nguyễn+Phúc+Lai+Ô+Chợ+Dừa+Hà+Nội&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
