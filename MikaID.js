// generateur d'ID basé sur une liste de caractère uniquement

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
console.log("ID : " + getIdAleatoire(50));

// generateur d'ID basé sur une liste de caractère + une partie du dateTime en milliseconde

const d = new Date();
let t = d.getTime();
//console.log("t : " + t);

let s = t.toString().substring(4);
console.log("s : " + s);

let id = s + getIdAleatoire(20);
console.log("ID : " + id);
