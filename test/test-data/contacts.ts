import { faker } from '@faker-js/faker';

export interface Contact {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    nickname?: string;
    commerceName?: string;
    commerceAmount?: string;
    tagName?: string;
    fieldName?: string;
    }

export const contacts: Contact = {
    nickname: faker.name.firstName(),
    commerceName: faker.name.firstName(),
    commerceAmount: faker.finance.amount(0,10,2),
    tagName: faker.word.adjective(),
    fieldName: faker.random.word(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number('4373######'),
    email: faker.internet.email('test','test1'),
    }