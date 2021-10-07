import { IsFQDN, IsNotEmpty } from 'class-validator';

export class UpdateProfileDto {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  name: string;

  @IsFQDN()
  site: string;

  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio' })
  address: string;

  @IsNotEmpty({ message: 'O campo imagem não pode ser vazio' })
  image: string;

  @IsNotEmpty({ message: 'O campo ticket não pode ser vazio' })
  ticket: string;

  @IsNotEmpty({ message: 'O campo descrição não pode ser vazio' })
  description: string;
}
