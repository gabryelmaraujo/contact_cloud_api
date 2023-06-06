/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    telephone: string;
}
