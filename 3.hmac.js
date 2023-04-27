const { createHmac } = require("crypto");

const msg = "Mikackerman est en réalité ****";

const secretKey = "secret-defense!";
const hmac1 = createHmac("sha512", secretKey).update(msg).digest("base64");

const secretKey2 = "secretdefense!";
const hmac2 = createHmac("sha512", secretKey2).update(msg).digest("hex");

console.log(hmac1);
console.log(hmac2);

const match = hmac1 === hmac2;

console.log("match : " + match ? "cela correspond" : "ne correspond pasd");
