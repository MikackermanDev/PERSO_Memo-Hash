// https://www.youtube.com/watch?v=_XxrfGrdrB8

// import de npm i bcrypt
const bcrypt = require("bcrypt");

// fonction asynchrone
let monTexte = "Mikackerman";
(async () => {
	try {
		// on définit le salt
		let salt = await bcrypt.genSalt(12);
		console.log("salt : " + salt);
		// hash de monTexte avec utilisation du genSalt
		let monTexteBCrypt = await bcrypt.hash(monTexte, salt);
		let monTexteBCrypt2 = await bcrypt.hash(monTexte, salt);

		console.log(monTexteBCrypt);
		console.log(monTexteBCrypt2);

		// permet de comparer monTexte avec le hash
		let comparaison = await bcrypt.compare(monTexte, monTexteBCrypt);
		let comparaison2 = await bcrypt.compare(monTexte, monTexteBCrypt2);

		console.log("comparaison txtA vs crypt1 :" + comparaison);
		console.log("comparaison txtA vs crypt2 :" + comparaison2);
	} catch (error) {
		console.log(error.message);
	}
})();
