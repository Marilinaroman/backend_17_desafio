import {faker} from "@faker-js/faker";

const {commerce, datatype, image}= faker

faker.locale = 'es'

const productosTest = []

for(let i = 0; i<5;i++){
    productosTest.push({
        id : datatype.uuid(),
        nombre:commerce.productName(),
        precio: commerce.price(),
        url: image.imageUrl(640,480,'commerce')
    })
}

export {productosTest}