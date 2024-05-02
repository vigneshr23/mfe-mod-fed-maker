import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';

let products = [];

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    const price = faker.commerce.price()
    const description = faker.commerce.productDescription()
    const id = uuidv4()
    products.push({ name, price, description, id })
}

console.log(products)