import promotionBanner from "./promotion-banner.json";

export type PromotionBanners = PromotionBanner[];

export type PromotionBanner = PromotionBannerDetail[];

export type promotionImage = {
  readonly id?: string;
  readonly name?: string;
  readonly source?: string;
}[];

export type PromotionBannerDetail = {
  readonly title: string;
  readonly image_data: promotionImage;
};

export default promotionBanner as unknown as PromotionBanner;
