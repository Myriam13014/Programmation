// const prenom = 'titi';
// const age = '36';


// const afficherPrenomEtAgeTiti = (el1, el2) => {
//   console.log(Voici le prenom:${el1} ${el2})
// };

// afficherPrenomEtAgeTiti(prenom, age);


//const number1 = 3;
//const number2 = 2;

//const afficherN1N2 = (a, b) => {
  //je vais ajouter a et b
  //const resultat = a + b;
  //je retourne la valeur
  //return resultat;
//};


//const res = afficherN1N2(number1, number2);
//console.log(res);


//int main(int argc, char *argv[])
//{

//char chaine[8]; // Tableau de 6 char pour stocker S-i-m-p-l-o-n + le \0

//chaine[0] = 'S';
//chaine[1] = 'i';
//chaine[2] = 'm';
//chaine[3] = 'p';
//chaine[4] = 'l';
//chaine[5] = 'o';
//chaine[6] = 'n';
//chaine[7] = '\0';


// Affichage de la chaîne grâce au %s du printf
   //printf("%s", chaine);

   //return 0;
//};


const reorganiser = (mot) => {

    nouveauMot = mot[0].toUpperCase();

    i = 1;

    while (i < mot.length)
    {
        nouveauMot = nouveauMot + mot[i].toLowerCase();

        i++;
    }
    return nouveauMot;
}

var mot1 = "siMplon";
var mot2 = "sImplOn";
var mot3 = "SIMPLON";

console.log(reorganiser(mot1) + reorganiser(mot2) + reorganiser(mot3));

4
