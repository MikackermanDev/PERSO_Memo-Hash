// Calling createHash function included in node JS built-in crypto module
const { createHash } = require("crypto");

const algo = "sha512";
// Create a function to hash a string with createHash : algorithm sha512, .update (string to Hash) and .digest is the output display ('hex')
function hasherString(str) {
	return createHash(algo).update(str).digest("hex");
}

let userPassword = "Mikackerman est un génie";
const sendingPassword = hasherString(userPassword);

console.log("userPassword : " + userPassword);
console.log("sendingPassword : " + sendingPassword);

// let say that we have this string "storedPassword" stored in the database
const storedPassword =
	"0f849e5de617bc11a58a74dff11d0e9717fc879cb710a877e8b91da241f251f81ceb3e02382a7211a73e3f2e4592eaaecf554474581836100168c63726cc1b06";

console.log("storedPassword : " + storedPassword);

const match = sendingPassword === storedPassword;

console.log("match : " + match ? "✔️  good password" : "❌  password does not match");
