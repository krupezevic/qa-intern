import { faker } from '@faker-js/faker';

export const contacts = {
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