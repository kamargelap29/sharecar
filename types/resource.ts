export default interface resourceType {
  readonly desc?: string;
  readonly id: number;
  readonly image: string;
  readonly name: string;
  readonly description: string;
  readonly file: string;
  readonly created_at: Date | string;
  readonly updated_at?: Date | number;
}
