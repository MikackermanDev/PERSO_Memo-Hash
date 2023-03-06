// generater aeatoire de mdp basé sur la table ASCII

let longueur = 20;
function getNumeroAleatoire(min, max) {
	min = 33; // INCLUS
	max = 127; // EXCLUS
	return Math.floor(Math.random() * (max - min) + min);
}

let test = "";

for (let i = 0; i < longueur; i++) {
	test += String.fromCharCode(getNumeroAleatoire());
}
console.log(test);

let code = "";
for (let j = 1; j <= 10; j++) {
	for (let i = 0; i < longueur; i++) {
		code += String.fromCharCode(getNumeroAleatoire());
	}
	console.log("mdp" + j + " : " + code);
	code = "";
}
