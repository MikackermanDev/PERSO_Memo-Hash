// import de crypto-js
const CryptoJS = require("crypto-js");

// générateur personnel de secret_key
function getIdAleatoire(longueur) {
	let resultat = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let compteur = 0;
	while (compteur < longueur) {
		resultat += characters.charAt(Math.floor(Math.random() * charactersLength));
		compteur += 1;
	}
	return resultat;
}

const secret_key = getIdAleatoire(10);
console.log("secret key : " + secret_key);

// String à crypter
const monTexte = "MikaFinance";

// Crypter
const monTexteCryptoJS = CryptoJS.AES.encrypt(monTexte, secret_key).toString();
console.log("monTexteCryptoJS : " + monTexteCryptoJS);

// Decrypter
let monTexteBytes = CryptoJS.AES.decrypt(monTexteCryptoJS, secret_key);
console.log("monTexteBytes : " + monTexteBytes);

// Retrouver le texte d'origine
let monTexteOriginal = monTexteBytes.toString(CryptoJS.enc.Utf8);

console.log("monTexteOriginal :" + monTexteOriginal);
