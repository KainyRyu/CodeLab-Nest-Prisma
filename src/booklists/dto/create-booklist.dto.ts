import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateBooklistDto {
  @IsString()
  readonly label: string;

  @IsArray()
  @IsInt({ each: true })
  readonly books: number;
}
