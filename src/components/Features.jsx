export default function Features() {
  const features = [
    {
      title: "Pengaduan & Aspirasi Digital",
      desc: "Sampaikan pengaduan, saran, dan aspirasi warga secara online dengan cepat dan mudah tanpa harus datang ke kantor kelurahan.",
      icon: "📝",
    },
    {
      title: "Pantau Status Laporan",
      desc: "Lacak perkembangan laporan Anda secara transparan mulai dari tahap verifikasi hingga laporan selesai ditindaklanjuti.",
      icon: "📊",
    },
    {
      title: "Identitas Pelapor Terlindungi",
      desc: "Keamanan dan kerahasiaan identitas pelapor selalu dijaga untuk memberikan rasa aman bagi seluruh warga.",
      icon: "🔒",
    },
    {
      title: "Mudah Digunakan",
      desc: "Antarmuka aplikasi dirancang sederhana dan ramah pengguna sehingga dapat diakses oleh semua kalangan.",
      icon: "📱",
    },
    {
      title: "Notifikasi Tindak Lanjut",
      desc: "Dapatkan pemberitahuan saat laporan Anda diproses atau diselesaikan oleh pihak kelurahan.",
      icon: "🔔",
    },
    {
      title: "Terintegrasi dengan Kelurahan",
      desc: "Seluruh laporan terkelola secara terpusat untuk memudahkan pihak kelurahan dalam menindaklanjuti setiap aduan.",
      icon: "🏢",
    },
  ];

  return (
    <section id="features" className="w-full bg-white py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#186B72]">
            Fitur Unggulan
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            SAPA BUARAN hadir dengan berbagai fitur yang dirancang untuk
            memudahkan warga dalam menyampaikan aspirasi dan pengaduan
            secara transparan dan responsif.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#E0E0E0]/40 rounded-2xl p-6 sm:p-8
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                              rounded-xl bg-[#239BA7]/20 text-xl sm:text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#186B72] mb-2 sm:mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
