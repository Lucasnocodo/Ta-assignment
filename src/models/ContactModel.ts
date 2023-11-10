import { Contact } from "../types/contact";

export class ContactModel {
  private contact: Contact;

  constructor(contact: Contact) {
    this.contact = contact;
  }

  get fullName(): string {
    return `${this.contact.first_name} ${this.contact.last_name}`;
  }

  get job(): string {
    return this.contact.job;
  }

  get description(): string {
    return this.contact.description;
  }

  get id(): number {
    return this.contact.id;
  }
  toJSON() {
    return {
      id: this.contact.id,
      firstName: this.contact.first_name,
      lastName: this.contact.last_name,
      fullName: this.fullName,
      job: this.contact.job,
      description: this.contact.description,
    };
  }
}
