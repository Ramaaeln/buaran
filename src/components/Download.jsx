export default function Download() {
  return (
    <section
      id="download"
      className="w-full bg-gradient-to-br from-[#239BA7] to-[#186B72] py-16 sm:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

        <div className="text-white text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Unduh Aplikasi <br />
            <span className="text-[#E0E0E0]">SAPA BUARAN</span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Aplikasi SAPA BUARAN saat ini masih dalam tahap pengembangan.
            Versi resmi akan segera tersedia di Google Play Store.
            Sementara itu, Anda dapat mencoba versi awal melalui file APK (beta).
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <div className="relative w-full sm:w-auto">
              <div className="flex justify-center sm:justify-start items-center gap-3
                              bg-white/60 text-[#186B72]
                              px-6 py-3 rounded-xl font-semibold
                              cursor-not-allowed">
                <img
                  src="/src/assets/google-play-line.svg"
                  alt="Google Play"
                  className="w-5 sm:w-6 opacity-60"
                />
                <span>Google Play</span>
              </div>

              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black px-2 py-0.5 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>

            <a
              href="/src/assets/apk/SAPABUARAN.apk"
              className="w-full sm:w-auto flex justify-center items-center gap-3
                         bg-white text-[#186B72]
                         px-6 py-3 rounded-xl font-semibold
                         shadow-lg hover:scale-105 transition"
            >
              <span>⬇</span>
              <span>Download APK</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center mt-6 lg:mt-0">
          <div className="absolute -inset-6 bg-white/10 rounded-3xl blur-2xl" />
          <img
            src="/src/assets/img/about.png"
            alt="Preview Aplikasi SAPA BUARAN"
            className="relative w-56 sm:w-64 md:w-72 lg:w-80 drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
