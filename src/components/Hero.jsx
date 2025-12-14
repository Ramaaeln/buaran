export default function Hero() {
  return (
    <section className="relative -mt-18 w-full min-h-[100svh] flex items-center justify-center">
      <img
        src="/src/assets/img/hero.png"
        alt="SAPA BUARAN"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#186B72]/80 to-[#239BA7]/80" />

      <div className="relative z-10 max-w-4xl px-5 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Sarana Aspirasi & Pengaduan
          <br />
          <span className="text-[#E0E0E0]">
            Warga Kelurahan Buaran
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          Sampaikan laporan, saran, dan aspirasi Anda dengan mudah, cepat,
          dan transparan demi lingkungan Buaran yang lebih baik.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#186B72] font-semibold rounded-xl shadow-lg hover:scale-105 transition text-center"
          >
            Unduh Aplikasi
          </a>

          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 border border-white/70 rounded-xl font-semibold hover:bg-white/10 transition text-center"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 text-white/70 animate-bounce text-xl select-none">
        ↓
      </div>
    </section>
  );
}
