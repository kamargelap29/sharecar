import CarsProps from "./cars";
import locationProps from "./location";

export default interface promotionType {
  readonly active?: number;
  readonly code?: string;
  readonly created_at: Date | string;
  readonly desc?: string;
  readonly end_time?: Date | string;
  readonly id: number;
  readonly image: string;
  readonly name: string;
  readonly promotion_cars?: CarsProps[];
  readonly promotion_locations?: locationProps[];
  readonly start_time?: string;
  readonly updated_at?: Date | number;
}
