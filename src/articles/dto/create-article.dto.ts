import { IsArray, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString({ each: true })
  @IsArray()
  readonly tags: Array<string>;
}
