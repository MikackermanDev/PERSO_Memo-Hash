const { generateKeyPairSync } = require("crypto");

// rsa = Rivest Shamir Adleman
const { privateKey, publicKey } = generateKeyPairSync("rsa", {
	modulusLength: 2048, /// length of the key in bits
	publicKeyEncoding: {
		type: "spki", // recommended by the Node.js docs
		format: "pem", // pem = Privacy Enhanced Mail
	},
	privateKeyEncoding: {
		type: "pkcs8", // recommended by the Node.js docs
		format: "pem",
		// cipher: "aes-256-cbc",
		// passPhrase: "secret defense",
	},
});

// possibiité d'ajouter cipher et passPhrase
// console.log("privateKey : " + privateKey);
// console.log("publicKey : " + publicKey);

module.exports = { privateKey, publicKey };
