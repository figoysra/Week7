let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let bio = {
    ...data,
    name : "Figo Yusra H",
    email : "figoxxxxx@gmail.com",
    hobby : "Nonton film,stream dan konten video"
}
const {id,name,username,email,address,phone,website}=data

console.log(`address = ${address.street} 
street = ${address.city}`)

console.log(bio)