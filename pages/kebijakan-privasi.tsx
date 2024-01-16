/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";

const KebijakanPrivasi: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="my-[131px] z-30">
      <Container className="space-y-16 my-3">
        <h1 className="text-[40px] text-center font-semibold text-sc-dark capitalize">
          {f({ id: "kebijakan privasi" })}
        </h1>
        <p className="paragraph-news">
          {f({
            id: "share Car merupakan bagian dari PT Adi Sarana Armada Tbk (juga disebut sebagai kami atau“group Share Car”) menghargai hak pribadi pengguna kami. Kebijakan privasi ini menggambarkan informasi pribadi yang kami kumpulkan dan bagaimana kami menggunakanya. Kebijakan privasi ini mencakup kumpulan dan penggunaan informasi saat Anda menggunakan situs dan aplikasi Share Car (“Situs” kami), serta informasi yang kami kumpulkan saat Anda bergabung dengan Share Car dan menggunakan layanan kami. Kebijakan privasi ini tidak berlaku untuk situs atau aplikasi Internet atau seluler lainnya yang diakses melalui situs kami. Dengan mengirimkan informasi pribadi Anda kepada kami dan menerima kebijakan privasi, Anda menyetujui penggunaan Share Car dan pengungkapan informasi pribadi Anda sebagaimana tercantum dalam pemberitahuan privasi ini. Pemberitahuan privasi ini dimasukkan ke dalam, dan bagian dari, Kontrak Syarat & Ketentuan pengunaan Anggota Share Car.",
          })}
        </p>
      </Container>
      <Container className="space-y-4">
        <h2 className="text-xl font-semibold text-sc-dark">
          {f({ id: "Informasi yang Kami Kumpulkan, Terima dan Atur" })}
        </h2>
        <p className="paragraph-news whitespace-pre-line">
          {f({
            id: "Informasi pribadi Anda yang kami kumpulkan termasuk namun tidak terbatas pada nama, alamat email, alamat pos, nomor telepon, gambar Anda atau identifikasi dokumen lainnya, riwayat pemesanan. Kami juga mengumpulkan informasi non-pribadi termasuk namun tidak terbatas pada alamat IP, jenis browser, sistem operasi, bahasa browser dan penyedia layanan Anda, data terkait penggunaan Internet general lainnya, data GPS serta data tracking lainnya. Kami mengumpulkan informasi pribadi Anda dengan tujuan untuk memproses permohonan Anda, memungkinkan Anda untuk memesan dan menggunakan kendaraan kami, pembayaran serta untuk memperbaiki produk, strategi pemasaran serta pengembangan layanan kami.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark">
          {f({ id: "Akses & Koreksi Informasi Pribadi" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "Apabila Anda sudah membuat akun dan telah terdaftar sebagai anggota kami, Anda dapat mengakses, memperbaiki atau menghapus informasi Anda. Anda bertanggung jawab untuk menjaga kerahasiaan dan memastikan bahwa akses Login dan password hanya digunakan oleh Anda.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: "keamanan" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "seluruh Informasi Yang Terkumpul Dilindungi Melalui Cara Dan Prosedur Keamanan Yang Wajar Untuk Menegah Akses Dan Penggunaan Data Yang Tidak Sah. Rekan Kami Dan Penyedia Layanan Pihak Ketiga Telah Berkomitmen Untuk Mengelola Informasi Sesuai Dengan Persyaratan Kami Untuk Keamaan Dan Privasi Sesuai Ketentuan Berlaku Dalam Undang-Undang Dan Peraturan Republik Indonesia.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: "cookies" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "share Car Dapat Menggunakan Cookies Untuk Menyimpan Informasi Mengenai Preferensi Anggota Dan Pengaturan Pada Komputer, Telepon Selular Atau Perangkat Lain Pengguna Untuk Membuat Penggunaan Situs Menjadi Lebih Mudah Bagi Pengguna Atau Untuk Kebutuhan Pihak Ketiga Dalam Pemasangan Iklan Atau Analisis Data.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: "tautan ke situs lain" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "situs Kami Dapat Menyediakan Tautan Menuju Ke Website Lain Atau Aplikasi Lainnya. Jika Anda Mengirimkan Informasi Pribadi Ke Situs-Situs Tersebut, Informasi Anda Diatur Oleh Kebijakan Privasi Mereka Dan Sepenuhnya Bukan Menjadi Tanggung Jawab Kami.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark uppercase">
          {f({ id: "perubahan kebijakan privasi" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "kami Dapat Memperbaharui Kebijakan Privasi Ini Sewaktu-Waktu Dan Anda Disarankan Untuk Memeriksa Halaman Ini Dari Waktu Ke Waktu. Dengan Melanjutkan Menggunakan Situs Dan Layanan Kami, Anda Menegaskan Persetujuan Untuk Melanjutkan Penggunaan Layanan Atas Setiap Pembaruan Dari Kebijakan Privasi Ini.",
          })}
        </p>
      </Container>
      <Container className="space-y-4 my-6">
        <h2 className="text-xl font-semibold text-sc-dark">
          {f({ id: "hubungi kami" })}
        </h2>
        <p className="paragraph-news">
          {f({
            id: "penting Bagi Anda Meluangkan Waktu Untuk Membaca, Memahami Dan Menerima Persyaratan Dari Kebijakan Privasi Ini. Jika Anda Memiliki Pertanyaan Tentang Penanganan Informasi Pribadi Kami, Anda Dapat Menulis Surat Elektronik Kepada Kami Di ",
          })}
          <a href="mailto:info@sharecar.co.id">info@sharecar.co.id</a> <br />
          <br />
          {f({
            id: "Kebijakan Privasi Ini Terakhir Kali Diperbarui Pada 21 Agustus 2018.",
          })}
        </p>
      </Container>
    </SectionPage>
  );
};

export default KebijakanPrivasi;
