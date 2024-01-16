export default interface BlogsType {
  readonly active: number;
  readonly attr_machine: string;
  readonly attr_seater: string;
  readonly attr_trunk: string;
  readonly car_brand_id: number;
  readonly car_brand_name: string;
  readonly car_type_id: number;
  readonly car_type_name: string;
  readonly created_at: Date | number;
  readonly desc: string;
  readonly id: number;
  readonly image: string;
  readonly location_name: string;
  readonly name: string;
  readonly price_advertising: number;
  readonly price_base: number;
  readonly price_next: number;
  readonly updated_at: Date | number;
}
