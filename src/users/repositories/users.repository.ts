/* eslint-disable prettier/prettier */
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";

export abstract class UsersRepository{
    abstract create(data: CreateUserDto): Promise<User> | User;
    abstract findAll(): Promise<User[]> | User[];
    abstract findOne(id: number): Promise<User | undefined> | User | undefined;
    abstract update(id: number, data: UpdateUserDto): Promise<User> | User;
    abstract delete(id: number): Promise<void> | void;
}