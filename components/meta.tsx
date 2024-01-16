import Head from "next/head";
// import { HOME_OG_IMAGE_URL } from "../lib/constants";

function Meta() {
  return (
    <Head>
      <link
        href="/assets/images/sc-logox3.png"
        rel="sharecar-icon"
        sizes="180x180"
      />
      <link
        href="/assets/images/sc-logox1.png"
        rel="sharecar-icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/assets/images/sc-logo.png"
        rel="sharecar-icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
      <meta content="#000000" name="msapplication-TileColor" />
      <meta content="/favicon/browserconfig.xml" name="msapplication-config" />
      <meta content="#FCFCFC" name="theme-color" />
      <link href="/feed.xml" rel="alternate" type="application/rss+xml" />
      <meta
        content={`Aplikasi sewa mobil self drive mulai dari hitungan jam. Durasi sewa mulai dari 1 Jam. Share Car bisa digunakan kapan saja untuk berbagai kebutuhan, baik urusan kantor atau pribadi. Tarif sewa sudah termasuk asuransi kendaraan dan biaya parkir di lokasi Share Car.`}
        name="description"
      />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}

export default Meta;
