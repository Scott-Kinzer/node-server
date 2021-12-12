let DB = [
    {name: "BOB",
    age: 20}
]

module.exports = {
    findUsersAll() {
        return DB;
    },

    putUser(user) {
        DB.push(user);
    }
}