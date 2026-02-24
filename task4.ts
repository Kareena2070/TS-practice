import { data } from "react-router-dom";

type Users = {
  id: number;
  name: string;
};

type Admin = Users & {
  permissions: string[];
};

const admin: Admin = {
  id: 1,
  name: "Kareena",
  permissions: ["delete", "edit"],
};

console.log(admin.permissions)

//1.  An interface BaseEntity
    // readonly id: string
    // readonly createdAt: Date

interface BaseEntity {
    readonly id: string,
    readonly createdAt: Date,
}
//2.  An interface Product that extends BaseEntity
    // name: string
    // price: number
    // category:
        // name: string
        // description: string
interface Category {
    name: string,
    description: string,
}

interface Product extends BaseEntity {
    name : string,
    price: number,
    category: Category
}

// 3. Create one valid product object.

const product : Product = {
  id: '1234',
  createdAt: new Date(),
  name: 'OOPO',
  price: 17000,
  category: {
    name: 'Electronics',
    description: 'asdfgh'
  }
}

console.log(product)