/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private prisma: PrismaService,
        private jwtService: JwtService
        ){}

    async validateUser(email: string, password: string){
        const user = await this.prisma.user.findUnique({
            where: {
                email
            },
            select: {
                password: true,
                email: true
            }
        })

        if(user){
            const pwdCompare = await compare(password, user.password)

            pwdCompare ? ({email: user.email}) : ('')
        }
        return null
    }

    async login(email: string){
        const user = await this.usersService.findByEmail(email)
        return {
            token: this.jwtService.sign({email}, {
                subject: String(user.id)
            }),
            user: user
        }
    }

}
