import { useState } from "react";

const faqs = [
  {
    question: "Apa itu SAPA BUARAN?",
    answer:
      "SAPA BUARAN adalah Sarana Aspirasi dan Pengaduan Warga Buaran yang memudahkan masyarakat menyampaikan pengaduan, saran, dan aspirasi terkait lingkungan serta pelayanan publik di Kelurahan Buaran secara cepat, praktis, dan transparan.",
  },
  {
    question: "Siapa saja yang dapat menggunakan SAPA BUARAN?",
    answer:
      "Aplikasi ini dapat digunakan oleh seluruh warga Kelurahan Buaran yang ingin menyampaikan laporan, saran, atau aspirasi kepada pihak kelurahan.",
  },
  {
    question: "Jenis laporan apa saja yang bisa dikirim?",
    answer:
      "Warga dapat mengirim laporan terkait lingkungan, fasilitas umum, pelayanan publik, keamanan, kebersihan, serta saran untuk peningkatan kualitas wilayah Kelurahan Buaran.",
  },
  {
    question: "Apakah laporan yang dikirim bersifat rahasia?",
    answer:
      "Ya. Identitas pelapor akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan tindak lanjut oleh pihak kelurahan.",
  },
  {
    question: "Bagaimana proses tindak lanjut laporan?",
    answer:
      "Setiap laporan yang masuk akan diverifikasi oleh admin kelurahan, kemudian diteruskan ke pihak terkait untuk ditindaklanjuti secara transparan.",
  },
  {
    question: "Apakah SAPA BUARAN gratis?",
    answer:
      "Ya. SAPA BUARAN dapat digunakan secara gratis oleh seluruh warga Kelurahan Buaran.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="w-full bg-[#E0E0E0]/40 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#186B72]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
            Pertanyaan yang sering diajukan seputar aplikasi{" "}
            <span className="font-semibold text-[#239BA7]">SAPA BUARAN</span>
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center gap-4 p-4 sm:p-5 text-left"
                >
                  <span className="font-medium text-sm sm:text-base text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 text-xl sm:text-2xl font-bold text-[#239BA7]
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-5 overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "max-h-60 opacity-100 pb-4 sm:pb-5"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
