/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository){}
  create(createContactDto: CreateContactDto, authorId: number) {
    return this.contactsRepository.create(createContactDto, authorId);
  }

  findAll() {
    return this.contactsRepository.findAll();
  }

  findOne(id: number) {
    const findContact = this.contactsRepository.findOne(id);
    if(!findContact){
      throw new NotFoundException('contact not found');
    }
    return findContact;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    const findContact = this.contactsRepository.findOne(id);
    if(!findContact){
      throw new NotFoundException('contact not found');
    }
    return this.contactsRepository.update(id, updateContactDto)
  }

  remove(id: number) {
    const findContact = this.contactsRepository.findOne(id);
    if(!findContact){
      throw new NotFoundException('contact not found');
    }
    return this.contactsRepository.delete(id)
  }
}
