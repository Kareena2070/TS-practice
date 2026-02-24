
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Restaurants {
  id: number;
  name: string;
  rating: number;
  address: Address;
}

const restaurant: Restaurants = {
  id: 1,
  name: 'Kareena',
  rating:5,
  address:{
    street: 'noe way',
    city: 'new Delhi',
    zipCode:'110030'
  }
};

console.log(restaurant.address)