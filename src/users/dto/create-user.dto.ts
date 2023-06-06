/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Transform } from "class-transformer";
import { hashSync }  from 'bcryptjs'

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    telephone: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(
        ({value}: { value: string })=> hashSync(value),
        {
            groups: ['transform'],
        }
    )
    password: string;
}
