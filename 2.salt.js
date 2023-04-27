const crypto = require("crypto");
//const { randomBytes, scryptSync, timingSafeEqual } = require("crypto");
// scryptSync permet de hasher et timingSafeEqual permet de comparer les 2 hash en limitant les timing attack

function signUp(email, password) {
	const salt = crypto.randomBytes(16).toString("hex");
	const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex");

	// La syntaxe ${} est utilisée pour insérer des expressions dans la chaîne de caractères.
	// Dans ce cas, les variables “salt” et “hashedPassword” sont insérées dans la chaîne de caractères pour créer la propriété “password” de l’objet utilisateur.
	const user = { email, password: `${salt}:${hashedPassword}` };

	users.push(user);

	return user;
}

function login(email, password) {
	const user = users.find((v) => v.email === email);

	const [salt, key] = user.password.split(":");
	const hashedBuffer = crypto.scryptSync(password, salt, 64);

	const keyBuffer = Buffer.from(key, "hex");
	const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer);

	if (match) {
		return "Login succes !";
	} else {
		return "login failed";
	}
}

const users = [];

const user = signUp("mika@live.fr", "un mot de passe");
console.log(user);

const result = login("mika@live.fr", "un mot de passe");
console.log("resultat : " + result);
