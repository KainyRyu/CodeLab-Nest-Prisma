import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString({ each: true })
  @IsArray()
  readonly tags: string[];
}
