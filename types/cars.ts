export default interface CarsProps {
  readonly id: number;
  readonly name: string;
  readonly desc: string;
  readonly price_advertising: number;
  readonly price_base: number;
  readonly price_next: number;
  readonly location_name?: string;
  readonly car_type_name?: string;
  readonly car_brand_name?: string;
  readonly attr_machine?: string;
  readonly attr_seater?: string;
  readonly attr_trunk?: string;
  readonly image?: string;
  readonly active?: number;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}
