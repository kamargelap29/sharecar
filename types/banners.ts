export default interface BannersProps {
  readonly id: number;
  readonly name: string;
  readonly image?: string;
  readonly active?: number;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}
