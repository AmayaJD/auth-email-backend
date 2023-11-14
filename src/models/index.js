const EmailCode = require("./EmailCode");
const User = require("./User");

// Relacion de uno a uno

EmailCode.belongsTo(User)
User.hasOne(EmailCode)

