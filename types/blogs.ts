export default interface BlogProps {
  readonly content?: null;
  readonly created_at?: Date | string;
  readonly id: number;
  readonly image: string;
  readonly name?: null;
  readonly slug: string;
  readonly updated_at?: Date | undefined;
}
