import { IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly nickname?: string;

  @IsString()
  readonly bio: string;
}
