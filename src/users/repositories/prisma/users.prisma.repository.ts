/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../users.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";
import { plainToInstance } from 'class-transformer'
import { UpdateUserDto } from "src/users/dto/update-user.dto";


@Injectable()
export class UsersPrismaRepository implements UsersRepository {
    constructor(private prisma: PrismaService){}
    async create(data: CreateUserDto): Promise<User>{
        const user = new User();
        Object.assign(user, {
            ...data
        });
        const newUser = await this.prisma.user.create({
            data: { ...user },
        });
        return plainToInstance(User, newUser);
    }
    async findAll(): Promise<User[]> {
        const users: User[] = await this.prisma.user.findMany();
        return plainToInstance(User, users);
    }
    async findOne(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        return plainToInstance(User, user);
    }
    async update(id: number, data: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id },
            data: { ...data },
        });
        return plainToInstance(User, user);
    }
    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}