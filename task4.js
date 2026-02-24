"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin = {
    id: 1,
    name: "Kareena",
    permissions: ["delete", "edit"],
};
console.log(admin.permissions);
// 3. Create one valid product object.
var product = {
    id: '1234',
    createdAt: new Date(),
    name: 'OOPO',
    price: 17000,
    category: {
        name: 'Electronics',
        description: 'asdfgh'
    }
};
console.log(product);
