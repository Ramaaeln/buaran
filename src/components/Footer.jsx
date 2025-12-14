export default function Footer() {
  return (
    <footer className="w-full bg-[#186B72] text-white">
      
      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16
                      grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <img
              src="/src/assets/img/logos.png"
              alt="SAPA BUARAN"
              className="w-10"
            />
            <h3 className="text-lg font-semibold">SAPA BUARAN</h3>
          </div>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Sarana Aspirasi dan Pengaduan Warga Buaran yang memudahkan masyarakat
            menyampaikan laporan, saran, dan aspirasi secara cepat, praktis,
            dan transparan.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white transition">Tentang</a></li>
            <li><a href="#features" className="hover:text-white transition">Fitur</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#download" className="hover:text-white transition">Unduh Aplikasi</a></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              Email:
              <span className="block text-white">
                sapabuaran@gmail.com
              </span>
            </li>
            <li>Kelurahan Buaran</li>
            <li>Kota Tangerang Selatan</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Informasi</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="text-white/60">
              Versi Aplikasi: v1.0
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-6
                        flex flex-col md:flex-row
                        justify-center md:justify-between
                        items-center gap-3
                        text-sm text-white/70 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} SAPA BUARAN. Seluruh hak cipta dilindungi.
          </span>
          <span>
            Dikembangkan untuk masyarakat Kelurahan Buaran
          </span>
        </div>
      </div>

    </footer>
  );
}
