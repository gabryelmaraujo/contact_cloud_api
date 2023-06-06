/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository){}
  async create(createUserDto: CreateUserDto) {
    const verifyUserExists = await this.usersRepository.findByEmail(createUserDto.email)

    if(verifyUserExists) throw new ConflictException('This user already exists.')

    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  async findByEmail(email: string){
    const user = await this.usersRepository.findByEmail(email)
    if(!user) throw new NotFoundException('User not found.')
    return user
  };

  findOne(id: number) {
    const findUser = this.usersRepository.findOne(id);
    if(!findUser){
      throw new NotFoundException('User not found.');
    }
    return findUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const findUser = this.usersRepository.findOne(id);
    if(!findUser){
      throw new NotFoundException('User not found.');
    }
    return this.usersRepository.update(id, updateUserDto)
  }

  remove(id: number) {
    const findUser = this.usersRepository.findOne(id);
    if(!findUser){
      throw new NotFoundException('User not found.');
    }
    return this.usersRepository.delete(id)
  }
}
