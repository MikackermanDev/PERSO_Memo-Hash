const { publicEncrypt, privateDecrypt } = require("crypto");

const { publicKey, privateKey } = require("./5.keyPair");

const msg = "Mikackerman est toujours un génie, cela n'a pas changé";

const encryptedData = publicEncrypt(publicKey, Buffer.from(msg));

console.log("msg crypté : " + encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log("msg décrypté : " + decryptedData.toString("utf-8"));
