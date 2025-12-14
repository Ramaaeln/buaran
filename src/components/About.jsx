export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 sm:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#186B72] mb-6 text-center lg:text-left">
            Tentang SAPA BUARAN
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
            SAPA BUARAN adalah sebuah sarana yang memudahkan masyarakat dalam
            menyampaikan pengaduan, saran, maupun aspirasi terkait lingkungan dan
            pelayanan publik di wilayah Kelurahan Buaran. Melalui aplikasi ini,
            warga dapat berpartisipasi secara aktif dalam menjaga kenyamanan serta
            kemajuan daerahnya dengan cara yang cepat, praktis, dan transparan.
            <br /><br />
            SAPA BUARAN merupakan singkatan dari <strong>Sarana Aspirasi dan Pengaduan
            Warga Buaran</strong>. Kata “SAPA” menggambarkan fungsi utama aplikasi
            sebagai media bagi masyarakat untuk menyampaikan suara mereka kepada
            pihak kelurahan, sedangkan “BUARAN” menunjukkan bahwa aplikasi ini
            ditujukan khusus bagi warga di Kelurahan Buaran.
            <br /><br />
            Dengan demikian, SAPA BUARAN hadir sebagai jembatan komunikasi antara
            warga dan pihak kelurahan untuk menciptakan lingkungan yang lebih baik,
            terbuka, dan responsif terhadap kebutuhan masyarakat.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/img/about.png"
            alt="Ilustrasi SAPA BUARAN"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}
