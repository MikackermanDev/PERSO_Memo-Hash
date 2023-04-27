const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./5.keyPair");

const msg = "Mikackerman est ... bref on connait la suite";

// Signature

const signer = createSign("rsa-sha512");

signer.update(msg);

const signature = signer.sign(privateKey, "hex");

// Verification
const verifier = createVerify("rsa-sha512");
verifier.update(msg);
const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(isVerified);
