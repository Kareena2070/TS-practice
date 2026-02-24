// Create a type for:
// User
// id: number
// name: string
// email: string
// role: "admin" | "user" | "guest"
// isVerified (optional boolean)
var User1 = {
    id: 1234,
    name: 'Kareena',
    email: 'kareena@gmail.com',
    role: 'admin',
};
var User2 = {
    id: 12344,
    name: 'Komal',
    email: 'komal@gmail.com',
    role: 'guest',
};
//2.  Write a function getUserRoleMessage(user)
// If admin → "Full access granted"
// If user → "Limited access"
// If guest → "Guest access only"
function getUserRoleMessage(user) {
    if (user.role === 'admin') {
        return "Full access granted";
    }
    if (user.role === 'user') {
        return 'Limited access';
    }
    else {
        return 'Guest accesss';
    }
}
console.log(getUserRoleMessage(User1));
console.log(getUserRoleMessage(User2));
