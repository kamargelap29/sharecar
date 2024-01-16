import faq from "./faq.json";

export type Faqs = faqDetail[];

type questionProps = {
  readonly title: string;
  readonly description: string;
};

export type faqDetail = {
  readonly title: string;
  readonly question: Array<questionProps>;
};

export default faq as unknown as Faqs;
