import { IsString } from 'class-validator';

export class CreateBooklistDto {
  @IsString()
  readonly label: string;
}
