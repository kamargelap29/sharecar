import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";

const CarakerjaSharecar: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="my-14 md:my-[131px] z-30">
      <Container className="space-y-16 my-3">
        <h1 className="text-3xl md:text-[40px] font-semibold text-center text-sc-dark">
          {f({ id: "Bagaimana Cara Kerja Share Car?" })}
        </h1>
        <div className="flex-none md:flex items-center justify-center gap-12">
          <div className="flex-1 space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold  text-sc-dark">
              {f({ id: `Menjadi Member Share Car` })}
            </h2>
            <ul className="paragraph-news list-disc text-base font-light max-w-prose">
              <li>{f({ id: `Unduh aplikasi Share Car di smartphone` })}</li>
              <li>{f({ id: `Daftar dengan mengisi data pribadi` })}</li>
              <li>
                {f({
                  id: `Foto dokumen seperti SIM A dan KTP untuk verifikasi`,
                })}
              </li>
              <li>
                {f({ id: `Siapkan kartu kredit sebagai metode pembayaran` })}
              </li>
              <li>{f({ id: `Tunggu verifikasi 1x24 jam` })}</li>
            </ul>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <figure className="aspect-w-16 aspect-h-9">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                src="https://www.youtube.com/embed/PpWkUo3dZRw"
                title="YouTube video player"
              ></iframe>
            </figure>
          </div>
        </div>

        <div className="flex-none md:flex flex-row-reverse items-center justify-center gap-12">
          <div className="flex-1 space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold  text-sc-dark">
              {f({ id: `Cara Sewa Mobil Share Car` })}
            </h2>
            <ul className="paragraph-news list-disc text-base font-light  max-w-prose">
              <li>{f({ id: `Cek lokasi parkir terdekat` })}</li>
              <li>{f({ id: `Pilih mobil yang ingin kamu gunakan` })}</li>
              <li>{f({ id: `Gunakan kode promo yang tersedia` })}</li>
              <li>
                {f({
                  id: `Klik Booking mobil dan ambil mobilnya di lokasi yang sudah ditentukan`,
                })}
              </li>
              <li>
                {f({
                  id: `Jangan lupa untuk melakukan check list sebelum berkendara`,
                })}
              </li>
            </ul>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <figure className="aspect-w-16 aspect-h-9">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                src="https://www.youtube.com/embed/1O1mExlHEDE"
                title="YouTube video player"
              ></iframe>
            </figure>
          </div>
        </div>

        <div className="flex-none md:flex items-center justify-center gap-12">
          <div className="flex-1 space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold  text-sc-dark">
              {f({ id: `Berkendara Dengan Share Car` })}
            </h2>
            <ul className="paragraph-news list-disc text-base font-light  max-w-prose">
              <li>
                {f({
                  id: `Buka tutup pintu mobil menggunakan fitur lock/unlock di dalam aplikasi`,
                })}
              </li>
              <li>
                {f({
                  id: `Gunakan starter engine atau kunci yang tersedia untuk menghidupkan mesin mobil`,
                })}
              </li>
              <li>{f({ id: `Cek meteran bahan bakar` })}</li>
              <li>
                {f({
                  id: `Ketika mengembalikan mobil, bahan bakar harus terisi seperti semula.`,
                })}
              </li>
              <li>
                {f({
                  id: `Ketika mengakhiri perjalanan, klik tombol “End Trip” pada aplikasi Share Car`,
                })}
              </li>
            </ul>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <figure className="aspect-w-16 aspect-h-9">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                src="https://www.youtube.com/embed/Om7x8vziBE4"
                title="YouTube video player"
              ></iframe>
            </figure>
          </div>
        </div>
      </Container>
    </SectionPage>
  );
};

export default CarakerjaSharecar;
