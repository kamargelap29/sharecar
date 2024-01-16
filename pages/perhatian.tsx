import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";

const Peringatan: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="mb-[131px] z-30">
      <Container className="space-y-16 my-3 capitalize">
        <h1 className="text-[40px] font-semibold text-sc-dark">
          {f({ id: "perhatian" })}
        </h1>
        <p className="paragraph-news">
          {f({
            id: "dengan melakukan penghapusan akun Share Car Anda, maka segala data pribadi dan data detail lainnya yang terhubung dengan akun Anda akan dihapus secara permanen dari sistem Share Car. Anda tidak dapat lagi mengakses segala data, informasi, fitur dan layanan Share Car, termasuk membuka, mengaktifkan kembali atau memulihkan Akun Anda.",
          })}
        </p>
        <p className="paragraph-news">
          {f({
            id: "setelah menghapus Akun Anda, Anda juga tidak dapat lagi melakukan pendaftaran ulang di aplikasi Share Car dengan menggunakan informasi data yang sama",
          })}
        </p>
      </Container>
    </SectionPage>
  );
};

export default Peringatan;
