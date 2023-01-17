import { faker } from '@faker-js/faker';

export const contacts = {
    nickname: faker.name.firstName(),
    commerceName: faker.name.firstName(),
    commerceAmount: faker.finance.amount(0,10,2),
    tagName: faker.word.adjective(),
    }