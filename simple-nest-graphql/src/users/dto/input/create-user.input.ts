import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  age: number;
}
