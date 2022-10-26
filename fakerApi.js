import { faker } from '@faker-js/faker';

const infos = generateFaker = () => ({
    name:  faker.name,
    age:   Math.ceil( Math.random() * 99 ),
    email: faker.email,
})
export default infos;