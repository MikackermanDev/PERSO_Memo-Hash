// https://www.youtube.com/watch?v=heldAl8Cfr4

// included in NodeJS no need npm i crypto
const crypto = require("crypto");

// supported hashes
console.log(crypto.getHashes());
console.log(crypto.getCiphers());

let n = 16;

// random bytes
let iv = crypto.randomBytes(n);
let ivToString = crypto.randomBytes(n).toString("hex");
console.log(ivToString);

// create hash (max 512)
let monHash = crypto.createHash("sha512").digest("hex");
let monHash2 = crypto.createHash("sha512").update("your message").digest("hex");

console.log(monHash);
console.log(monHash2);

// aes 256-bit cipher block chaining (cbc) enncryption/decryption
let messageOriginal = "Mikackerman est Mikafinance";
let key = "12345678123456781234567812345678";

let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update(messageOriginal, "utf-8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted : " + encrypted);

let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");

console.log("Decrypted : " + decrypted);
