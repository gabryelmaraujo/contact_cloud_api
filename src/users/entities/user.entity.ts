/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';

export class User {
  readonly id: number;
  name: string;
  email: string;
  telephone: string;
  register_date: Date;

  @Exclude()
  password: string;
}
