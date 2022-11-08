import { faker } from './node_modules/@faker-js/faker';

const infos = () => ({
    name:  faker.name.fullName(),
    id:   Math.ceil(Math.random() * 99),
    email: faker.internet.email(),
    phoneNumber:  faker.phone.number(),
})
export {infos};