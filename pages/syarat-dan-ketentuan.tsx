/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";

const SyaratDanKetentuan: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="my-[131px] z-30">
      <Container className="space-y-16 my-3">
        <h1 className="text-[40px] text-center font-semibold text-sc-dark uppercase">
          {f({ id: `syarat dan ketentuan` })}
        </h1>
        <p className="paragraph-news">
          {f({
            id: `anggota setuju untuk terikat oleh persyaratan dan ketentuan keanggotaan berikut:`,
          })}
        </p>
      </Container>
      <Container className="space-y-4">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `definisi umum` })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: `Dalam perjanjian ini digunakan beberapa istilah, “Buku Manual” berarti buku pegangan Anggota yang dapat diubah sewaktu-waktu oleh Share Car yang merupakan bagian integral dari perjanjian ini. “Anggota” berarti pemohon yang telah mendaftarkan diri dan telah diverifikasi oleh Share Car. “Kendaraan: berarti kendaraan bermotor yang disewakan kepada Anggota oleh Share Car berdasarkan perjanjian ini. “Share Car” adalah unit bisnis PT Adi Sarana Armada Tbk.`,
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `Keanggotaan Share Car` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Anggota wajib melakukan pengisian form registrasi dengan informasi dan data diri Anggota yang dapat dijamin & dipertanggungjawabkan kebenaran dan keasliannya oleh Anggota.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota berusia minimal 21 tahun, memiliki SIM A dan SIM A masih berlaku minimal 1 bulan sebelum kadaluwarsa.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota wajib melakukan pembaruan SIM A pada aplikasi ataupun portal Share Car sebelum SIM tersebut habis masa berlakunya.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota hanya diperbolehkan memiliki satu akun yang terdaftar di Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota menyatakan bahwa memiliki kapasitas mental dan fisik untuk mengemudikan kendaraan bermotor secara kompeten, aman dan bersedia mematuhi peraturan lalu lintas yang berlaku.`,
              })}
            </li>

            <li>
              {f({
                id: `Pemegang SIM A yang sudah kadaluwarsa, ditangguhkan, dibatalkan, SIM hilang atau dicuri, tidak memenuhi syarat menjadi Anggota dan juga tidak memenuhi persyaratan untuk pertanggungan asuransi serta bertanggung jawab atas hukuman yang mungkin dijatuhkan oleh otoritas terkait.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota mengetahui, memahami dan menyetujui bahwa dengan memenuhi persyaratan yang ditentukan oleh Share Car, tidak secara otomatis menjadi Anggota Share Car. Persetujuan untuk menjadi Anggota Share Car adalah sepenuhnya keputusan dari Share Car. Keputusan mengenai status keanggotaan Anda akan diinformasikan melalui surat elektronik.`,
              })}
            </li>
            <li>
              {f({
                id: `Share Car berhak menolak keanggotaan atau menghentikan layanan Share Car kepada Anggota kapan saja apabila ditemukan Anggota berpotensi merugikan Share Car dan Share Car tidak diharuskan untuk menjelaskan alasan penghentian layanan dan atau pencabutan keanggotaan Anda.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `aturan penggunaan share car` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Anggota harus mengendarai dan menggunakan kendaraan dengan baik dan aman, mematuhi peraturan lalu lintas yang berlaku dan tidak mengendarai kendaraan melewati batas wilayah geografis yang ditentukan oleh Share Car. Batas wilayah pemakaian Share Car mencakup : Jabodetabek - Pelabuhan Merak, Semarang. Bali - Pulau Bali.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota tidak diperbolehkan melakukan pemesanan Share Car untuk orang lain. Apabila Anggota melanggar, maka Share Car berhak menghentikan atau mengnonaktifkan akun Share Car Anggota dan Anggota akan dikenakan denda sesuai dengan peraturan Share Car yang berlaku.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota tidak diperbolehkan menggunakan Share Car untuk belajar mengemudi mobil atau mengajarkan orang lain untuk belajar mengemudi mobil.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota bertanggung jawab sepenuhnya atas semua biaya (termasuk biaya perbaikan kendaraan atau ganti rugi kendaraan seluruhnya) yang timbul dari pelanggaran pasal yang tertera dalam syarat dan ketentuan ini.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota tidak diperbolehkan menggunakan Share Car untuk direntalkan / disewakan kembali kepada orang lain, taxi online, taxi offline, layanan transportasi atau sewa lainnya.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota tidak diperbolehkan menggunakan Share Car untuk membawa alkohol, narkoba, senjata api atau barang-barang berbahaya sejenis lainnya.`,
              })}
            </li>
            <li>
              {f({
                id: `Anggota bertanggung jawab atas STNK kendaraan, kunci mobil (khusus pada mobil yang belum menggunakan “push botton”) dan kartu prakir selama masa pemesanan kendaraan. Jika terdapat kehilangan maka biaya tersebut menjadi tanggung jawab Anggota.`,
              })}
            </li>
            <li>
              {f({
                id: `Share Car berhak mengambil alih atau menonaktifkan kendaraan yang akan atau sedang digunakan oleh Anggota jika Share Car berpendapat bahwa Anggota memiliki risiko untuk melakukan penyalahgunaan kendaraan.`,
              })}
            </li>
            <li>
              {f({
                id: `Share Car berhak mengambil gambar atau video pada kendaraan melalui kamera pengawas yang akan digunakan untuk kepentingan keamanan Anggota maupun kendaraan.`,
              })}
            </li>
            <li>
              {f({
                id: `Durasi sewa Share Car maksimal 2 hari. Apabila Anggota ingin melakukan sewa lebih dari 2 hari, maka Anggota wajib melakukan konfirmasi terlebih dahulu kepada pihak Share Car. Jika tidak, maka Anggota akan dikenakan denda dengan besaran nominal sesuai dengan yang telah diatur dalam syarat dan ketentuan ini`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `Pemeriksaan Kendaraan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li
              dangerouslySetInnerHTML={{
                __html: f({
                  id: `Anggota harus memeriksa eksterior dan interior kendaraan, mengecek level bensin dan kilometer kendaraan serta mengambil foto dashboard mobil sebelum dan sesudah menggunakan kendaraan.`,
                }),
              }}
            ></li>

            <li>
              {f({
                id: `Jika pada saat pengecekan, Anggota menemukan kerusakan, cacat atau kondisi kendaraan kotor maka Anggota wajib melaporkan ke Share Car dengan menggunakan fitur yang tersedia pada aplikasi sebelum dan sesudah menggunakan kendaraan. Jika tidak ada laporan maka dianggap bahwa kendaraan dalam kondisi baik dan bebas dari kerusakan dan apabila dikemudian hari ditemukan adanya kerusakan, maka biaya kerusakan tersebut menjadi tanggung jawab Anggota.`,
              })}
            </li>

            <li>
              {f({
                id: `Jika kerusakan ditemukan setelah perjalanan dan Anggota tidak dapat memberikan foto atau bukti yang menunjukkan bahwa hal tersebut terjadi bukan selama perjalanan Anggota, maka Anggota harus bertanggung jawab atas biaya perbaikan dan atau biaya asuransi atas kendaraan tersebut.`,
              })}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `kepemilikan kendaraan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Semua kendaraan termasuk semua aksesori, peralatan, kunci ban cadangan, dokumen (STNK, kartu parkir, dsb) dan perlengkapan pendukung lainnya adalah milik Share Car dan Anggota tidak diperbolehkan untuk melepaskan, memindahkan, menukar, memodifikasi dan mengambil kelengkapan tersebut.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota tidak diperbolehkan dan tidak berhak menggadaikan atau menjaminkan kendaraan Share Car atau memindahtangankan kepemilikan kendaraan Share Car kepada orang lain.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `pengembalian kendaraan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Anggota wajib mengembalikan kendaraan sesuai dengan lokasi yang sesuai dengan lokasi pada saat pemesanan.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota wajib mengembalikan kendaraan sebelum mencapai batas maksimal durasi sewa. Apabila tidak, maka Anggota akan dikenakan biaya keterlambatan sesuai dengan nominal yang telah diatur dalam syarat dan ketentuan ini.`,
              })}
            </li>

            <li>
              {f({
                id: `Jika kendaraan dikembalikan dalam kondisi tidak memuaskan dan membutuhkan pekerjaan perbaikan atau pembersihan diluar perawatan rutin, maka Anggota harus mengganti biaya perbaikan tersebut.`,
              })}
            </li>

            <li>
              {f({
                id: `pengembalian-kendaraan-4`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `pembayaran` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Tarif sewa kendaraan yang berlaku dapat ditemukan saat Anggota melakukan pemesanan kendaraan atau setelah selesai menggunakan kendaraan. Tarif sewa terhitung berdasarkan durasi sewa.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota setuju untuk melakukan pembayaran secara penuh atas sewa kendaraan yang telah digunakan, termasuk segala jenis biaya / denda tambahan yang mungkin timbul akibat kesalahan Anggota saat menggunakan Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Pembayaran dapat dilakukan melalui kartu kredit dan/atau bentuk pembayaran lainnya yang diatur oleh Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Data informasi kartu kredit Anggota yang tealh dicantumkan pada aplikasinya bersifat rahasia.`,
              })}
            </li>

            <li>
              {f({
                id: `Biaya pemakaian kendaraan yang dikenakan mencakup pajak dengan besaran sesuai dengan peraturan undang-undang yang berlaku.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota harus memastikan kartu kredit yang terdaftar di aplikasi adalah kartu kredit yang valid.`,
              })}
            </li>

            <li>
              {f({
                id: `Jika Anggota melakukan pembatalan pemesanan sesaat setelah kunci mobil dibuka, maka biaya sewa kendaraan 1 jam akan ditagihkan ke kartu kredit Anggota.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `Pengembalian Biaya (refund)` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Apabila terjadi hal yang memerlukan pengembalian biaya (refund) pada akun Anggota, maka Share Car membutuhkan waktu 7 sampai 14 hari kerja untuk proses pengembalian biaya tersebut.`,
              })}
            </li>

            <li>
              {f({
                id: `Pengembalian biaya dapat berupa voucher Share Car atau pengembalian saldo pada kartu kredit Anggota tergantung pada kasus yang terjadi.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `denda dan biaya tambahan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc denda-biaya">
            <li>
              {f({
                id: `Share Car menetapkan denda dan biaya tambahan (belum termasuk PPN) atas pelanggaran yang dilakukan oleh Anggota dan Anggota wajib melakukan pembayaran penuh dengan detail dan besaran sebagai berikut :`,
              })}
              <ol type="1">
                <li>
                  {f({
                    id: `Anggota akan dikenakan dendan Rp.100.000 / jam apabila Anggota mengembalikan kendaraan melewati batas waktu sewa yang telah ditentukan oleh pihak Share Car`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Merokok di dalam kendaraan, denda sebesar Rp.500.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Megangkut hewan peliharaan di dalam kendaraan, denda sebesar Rp.100.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Mengembalikan kendaraan di akhir perjalanan Anggota pada lokasi yang tidak sesuai dengan lokasi Share Car / lokasi awal pemesanan, denda sebesar Rp.100.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Mengembalikan kendaraan dalam keadaan kotor dan berbau, termasuk meninggalkan sampah di dalam kendaraan, denda sebesar Rp.100.00`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Mengembalikan kendaraan dengan jendela pintu terbuka, denda sebesar Rp.200.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menggunakan Share Car untuk tindakan kriminal / kejahatan yang merugikan Share Car atau pihak lainnya, denda sebesar Rp.5.000.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menggunakan Share Car untuk atau dengan membawa minuman keras, senjata api, narkotika dan atau benda berbahaya lainnya, denda sebesar Rp.5.000.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menghilangkan kunci kendaraan (kendaraan yang bukan menggunakan “push button”), denda sebesar Rp.1.000.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menghilangkan STNK kendaraan, denda sebesar Rp.1.500.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Kendaraan tidak dikemudikan oleh Anggota yang melakukan pemesanan, denda sebesar Rp.500.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menggunakan Share Car untuk kebutuhan taxi online, taxi offline atau layanan sejenis lainnya, denda sebesar Rp.500.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Menghilangkan kartu/karcis parkir pada lokasi parkir Share Car, denda sebesar Rp.200.000`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Mengembalikan kendaraan diakhir pemesanan dengan level BBM kurang dari level BBM awal sebelum Anggota memulai sewa, maka Anggota akan dikenakan biaya tambahan penggantian BBM sebesar Rp.13.000 / liter`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Pelanggaran lalu lintas dan parkir yang menyebabkan munculnya denda dan atau kendaraan harus ditahan / diderek, dan tidak dapat digunakan oleh Anggota lainnya, besaran denda sejumlah biaya tilang / pelanggaran ditambah biaya administrasi`,
                  })}
                </li>

                <li>
                  {f({
                    id: `Anggota terlibat dalam insiden / kecelakaan yang disengaja / tidak disengaja / tanpa konsekuensi (termasuk namun tidak terbatas pada tabrakan atau penyalahgunaan kendaraan), Anggota akan langsung dikenakan denda administrasi dan denda perbaikan kerusakan dengan kategori kerusakan sebagai berikut :`,
                  })}

                  <ol type="A">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: f({
                          id: `Kerusakan ringan : mencakup namun tidak terbatas pada baret halus dan kendaraan tetap dapat beroperasi, dengan lama perbaikan bengkel 1 - 3 hari kerja, dikenakan denda Rp.500.000`,
                        }),
                      }}
                    ></li>

                    <li
                      dangerouslySetInnerHTML={{
                        __html: f({
                          id: `Kerusakan sedang : mencakup namun tidak terbatas pada baret dalam, dekok kecil, kendaraan tetap beroperasional dengan lama perbaikan bengkel 4 - 7 hari kerja, dikenakan denda Rp.1.000.000`,
                        }),
                      }}
                    ></li>

                    <li
                      dangerouslySetInnerHTML={{
                        __html: f({
                          id: `Kerusakan berat : mencakup namun tidak terbatas pada dekok/baret besar dan kendaraan harus berhenti operasional dengan lama perbaikan 8 - 12 hari, dikenakan denda Rp.2.000.000`,
                        }),
                      }}
                    ></li>

                    <li
                      dangerouslySetInnerHTML={{
                        __html: f({
                          id: `Kerusakan sangat berat dan/atau TLA (Total Lost Accident) : mencakup namun tidak terbatas pada airbag terbuka, chassis bengkok, kendaraan tidak layak dikemudikan, kerusakan badan kendaraan hingga 20% dan kendaraan harus berhenti operasional dengan lama perbaikan diatas 12 hari, dikenakan denda Rp.5.000.000`,
                        }),
                      }}
                    ></li>
                  </ol>
                </li>

                <li>
                  {f({
                    id: `denda-dan-biaya-tambahan-1-17`,
                  })}
                </li>
                <li>
                  {f({
                    id: `denda-dan-biaya-tambahan-1-18`,
                  })}
                </li>
              </ol>
            </li>

            <li>
              {f({
                id: `Pembayaran denda dan biaya tambahan ini otomatis didebet dari kartu kredit Anggota. Sampai dengan seluruh biaya ganti rugi ini lunas, maka Anggota tidak dapat menggunakan layanan sewa kendaraan Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Share Car berhak melakukan penagihan biaya ganti rugi tambahan apabila dikemudian hari ditemukan bahwa kerusakan kendaraan yang terjadi dinyatakan lebih parah daripada estimasi awal yang diberitahukan kepada Anggota.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota dengan ini juga membebaskan Share Car dari segala tuntutan hukum yang terjadi akibat dari kesalahan Anggota baik disengaja ataupun yang tidak disengaja saat menggunakan Share Car yang melanggar hukum - hukum yang berlaku di Indonesia.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `pembayaran denda dan biaya tambahan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Pembayaran denda oleh Anggota dilakuan dengan menggunakan kartu kredit atau kartu debet atau bentuk pembayaran lainnya yang ditentukan oleh Share Car. Anggota berkewajiban untuk memastikan bahwa alat pembayaran, kartu kredit dan akrtu debet tersebut memiliki dana atau kredit yang cukup untuk membayar biaya yang timbul dari penggunaan Share Car. Anggota bertanggung jawab penuh atas segala biaya atau biaya bank atau kartu kredit terkait. Anggota dapat dikenakan biaya pemroresan untuk pembayaran kartu kredit atau kartu debit yang ditolak`,
              })}
            </li>

            <li>
              {f({
                id: `Keadaan yang dirujuk pada pasal sebelumnya dimana Share Car dapat mengajukan biaya denda terhadap Anggota atas kerugian yang diderita Share Car yang timbul selama periode sewa Anggota adalah kerusakan yang muncul sebagai akibat dari atau sehubungan dengan : (a) Pelanggaran Anggota terhadap kontrak berlaku; (b) Aktivitas melanggar hukum yang dilakukan Anggota; (c) Insiden kecelakaan; (d) Kesalahan laporan yang diberikan Anggota terkait laporan kecelakaan, klaim asuransi atau laporan polisi; (e) Kerusakan yang disengaja; (f) Penggunaan Share Car untuk aktivitas yang tidak patut (misal :pengangkutan bahan makanan, bahan yang mudah terbakar, obat-obatan terlarang, senjata api / tajam, penggunaan kendaraan untuk tujuan komersial);(g) Penggunaan Share Car untuk orang lain selain Anggota.`,
              })}
            </li>

            <li>
              {f({
                id: `Jika ada pembayaran yang masih belum terselesaikan, Share Car berhak untuk melarang Anggota melakukan pemesanan berikutnya sampai semua biaya terutang di akun Anggota telah dibayar penuh.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota setuju untuk membayar biaya-biaya yang ditetapkan dalam perjanjian, termasuk secara spesifik dan tanpa batasan yang tercantum dalam ketentuan ini. Biaya-biaya lain yang belum tercantum dalam perjanjian ini dan akan diberlakukan Share Car akan dikomunikasikan kepada Anggota.`,
              })}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `barang tertinggal / kehilangan` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Pelaporan barang tertinggal melalui Call Center 1500-369, Whatsapp +62 81295555927 atau email info@sharecar.co.id.`,
              })}
            </li>

            <li>
              {f({
                id: `Share car tidak bertanggung jawab atas perawatan barang tertinggal atau rusak setelah perjalanan Anggota selesai.`,
              })}
            </li>

            <li>
              {f({
                id: `Share Car akan menyimpan barang yang tertinggal maksimal 14 hari terhitung dari tanggal pemesanan Anggota.`,
              })}
            </li>

            <li>
              {f({
                id: `Khusus untuk barang yang mudah rusak (seperti : makanan/minuman) akan dibuang setelah lewat dari 24 jam.`,
              })}
            </li>

            <li>
              {f({
                id: `Share Car hanya menyediakan layanan pengambilan barang dari hari Senin - Jumat sesuai jam operasional 09:00 - 16:00. Anggota wajib menunjukkan KTP, email & nomor HP yang terdaftar dalam aplikasi Share Car untuk proses pengambilan.`,
              })}
            </li>

            <li>
              {f({
                id: `Share Car tidak menyediakan layanan pengiriman barang ke lokasi Anggota.`,
              })}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `penghapusan akun` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Anggota dapat melakukan penghapusan akun melalui menu profil pada aplikasi Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota tidak dapat melakukan penghapusan akun apabila Anggota masih memiliki tagihan yang belum terselesaikan di Share Car.`,
              })}
            </li>

            <li>
              {f({
                id: `Anggota yang melakukan penghapusan akun Share Car, maka segala data pribadi Anggota dan data detail lainnya akan dihapus secara permanen dari sistem Share Car. Anggota tidak dapat lagi mengakses segala data, informasi, fitur dan layanan Share Car, termasuk membuka, mengaktifkan kembali atau memulihkan akun Share Car Anggota.`,
              })}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `lain-lain` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `lain-lain-1`,
              })}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: `penghentian Perjanjian` })}
        </h2>
        <div className="px-4">
          <ul className="paragraph-news list-disc">
            <li>
              {f({
                id: `Perjanjian ini akan berakhir jika Anggota dinonaktifkan akibat dari melanggar salah satu kewajibannya berdasarkan perjanjian ini atau jika Anggota tidak lagi menjadi Anggota Share Car.`,
              })}
            </li>
            <li>
              {f({
                id: `Perjanjian ini akan terus berlaku selama Anggota masih terdaftar dalam keanggotaan Share Car`,
              })}
            </li>

            <li>
              {f({
                id: `Pengakhiran persetujuan ini tidak akan merugikan atau dengan cara apapun mempengaruhi hak dan wewenang Share Car berdasarkan persyaratan di sini sehubungan dengan pelanggaran yang telah dilakukan oleh Anggota.`,
              })}
            </li>
          </ul>
        </div>
      </Container>
    </SectionPage>
  );
};

export default SyaratDanKetentuan;
