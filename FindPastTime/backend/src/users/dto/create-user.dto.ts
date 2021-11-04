export class CreateUserDto {
  login: string;
  password: string;
  name: string;
  city: string;
  age: number;
  gender: string;
  description: string;
  image?: string;
}
