import Image from "next/image";
import * as React from "react";
import { useIntl } from "react-intl";
import { Container } from "~/components/layout";
import { SectionPage } from "~/components/ui";

const KontakPage: React.FC = () => {
  const { formatMessage: f } = useIntl();
  return (
    <SectionPage className="my-12 md:my-[131px] z-30">
      <Container className="space-y-16 my-3">
        <h1 className="text-[40px] text-center md:text-left font-semibold text-sc-dark capitalize">
          {f({ id: "kontak kami" })}
        </h1>
        <div className="flex-none md:flex justify-between">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <span className="text-sc-dark font-semibold">
                  {f({ id: "lokasi kami" })}
                </span>
                <p>
                  Graha Kirana Lt. 6 Jl. Yos Sudarso No. 88 Jakarta Utara 14350,
                  Indonesia
                </p>
              </div>
              <div className="">
                <span className="text-sc-dark font-semibold">Email</span>
                <a href="mailto:info@sharecar.co.id">
                  <p>info@sharecar.co.id</p>
                </a>
              </div>
              <div className="">
                <span className="text-sc-dark font-semibold">Telpon</span>
                <a href="tel:1500-369">
                  <p>1500-369</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 my-4 md:my-0">
            <Image
              height={320}
              src={`/assets/images/kontakkami.png`}
              width={622}
            />
          </div>
        </div>
      </Container>
    </SectionPage>
  );
};

export default KontakPage;
