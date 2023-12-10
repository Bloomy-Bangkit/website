import FiturCard from "@/components/FiturCard";

export default function Fitur() {
  return (
    <div
      id="Fitur"
      className="lg:w-full lg:h-auto lg:pt-32 lg:px-14 py-12 px-4"
    >
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="lg:w-full font-bold text-4xl text-center lg:mb-20 mb-10">
          Fitur Aplikasi
        </h1>
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-20 flex flex-col gap-10">
          <FiturCard
            title="Deteksi Kesegaran Ikan (A, B, dan C)"
            description="{Foto}"
          />
          <FiturCard
            title="Prediksi Harga Ikan"
            description="{Foto}"
          />
          <FiturCard
            title="Keputusan Berlayar untuk Nelayan"
            description="{Foto}"
          />
          <FiturCard
            title="Pembelian Ikan"
            description="{Foto}"
          />
          <FiturCard
            title="Penjualan Ikan"
            description="{Foto}"
          />
          <FiturCard
            title="Buka Toko"
            description="{Foto}"
          />
        </div>
      </div>
    </div>
  );
}
