// Call crypto built-in module in nodeJS
const crypto = require("crypto");
// Not necessary but can simplifie randomBytes iv or salt
const { randomBytes } = require("crypto");

// createCipher is deprecated so must use createCipheriv instead with 3 element :
//    algorithm -> aes-256-cbc cant' go above 256 :(
//    key -> string length must be 32 or can use : crypto.randomBytes(32) or randomBytes(32) with imported : const { randomBytes } = require("crypto");
//    iv - > initialization vector must be like : crypto.randomBytes(16) or randomBytes(16) with imported : const { randomBytes } = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
console.log("key : " + key.toString("hex"));
console.log("iv : " + iv.toString("hex"));

let msg = "Mikackerman est un génie";
// encryption cipher.update (data: string, inputEncoding: 'utf-8', outputEncoding: 'hex')

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(msg, "utf-8", "hex");
console.log("encrypted before .final : " + encrypted);

// .update can be called until .final is used
encrypted += cipher.final("hex");
console.log("encrypted after .final: " + encrypted);

// decryption using decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
console.log("decrypted before .final : " + decrypted);

decrypted += decipher.final("utf-8");
console.log("decrypted after .final : " + decrypted);

// trying without the .final to understand it's usefulness
const iv2 = randomBytes(16);

const cipher2 = crypto.createCipheriv(algorithm, key, iv2);
let encrypted2 = cipher2.update(msg, "utf-8", "hex");
//encrypted2 += cipher2.final("hex");
console.log("encrypted without .final : " + encrypted2);

const decipher2 = crypto.createDecipheriv(algorithm, key, iv2);
let decrypted2 = decipher2.update(encrypted2, "hex", "utf-8");
//decrypted2 += decipher2.final("utf-8");
console.log("decrypted without .final : " + decrypted2);

// - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
// supported hashes
// console.log("getHashes : " + crypto.getHashes());
// console.log("getCiphers : " + crypto.getCiphers());

// create hash (max 512)
let monHash = crypto.createHash("sha512").digest("hex");
let monHashUp = crypto.createHash("sha512").update("your message").digest("hex");
let monHashKey = crypto.createHash("sha512", key).update("your message").digest("hex");

console.log("monHash : " + monHash);
console.log("monHashUp : " + monHashUp);
console.log("monHashKey : " + monHashKey);
