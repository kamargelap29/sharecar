export default interface locationProps {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly longitude: number;
  readonly latitude: number;
  readonly image?: string;
  readonly car_available?: string;
  readonly promo_available?: string;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}
