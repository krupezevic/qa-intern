import { faker } from "@faker-js/faker";

export const conversation = {
    tagName: faker.word.adjective(),
    nickname: faker.word.adjective(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
}