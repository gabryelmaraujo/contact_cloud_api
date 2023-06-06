/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from 'src/contacts/dto/create-contact.dto';
import { Contact } from 'src/contacts/entities/contact.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from 'src/contacts/dto/update-contact.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, authorId: number): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });
    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
        authorId,
      },
    });
    return plainToInstance(Contact, newContact);
  }

  async findAll(): Promise<Contact[]> {
    const contacts: Contact[] = await this.prisma.contact.findMany();
    return plainToInstance(Contact, contacts);
  }
  async findOne(id: number): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    return plainToInstance(Contact, contact);
  }
  async update(id: number, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Contact, contact);
  }
  async delete(id: number): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
