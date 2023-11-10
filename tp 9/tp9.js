function seconnecter(){
	var login = prompt("Entrez votre nom d'utilisateur");
	var password = prompt("Entrez votre mot de passe");
	if ( login == "admin" && password == "admin"){
		document.write("Bienvenue :"+login)
	}
	else {
		alert("accès refusé");
	}
}

function seconnecter2(){
	window.location.href="identification.html"
}

function login(){
	var login = document.getElementById("t1").value;
	var password = document.getElementById("t2").value;
	if ( login == "admin" && password == "admin"){
		window.location.href='yes.html'
	}
	else {
		window.location.href='no.html'
	}
}
 function affichagetab(){
 	document.write('<table border=2px width=30%');
 	for (let i = 0; i <= 5; i++){
 		document.write('<tr><td>*<td><td>*<td><td>*<td><tr>');
 	}
 	document.write('</table>');
 }

 function affichagetab2(){
 	var count = prompt ("Combien de ligne souhaitez-vous ?");
 	document.write('<table border=2px width=30%');
 	for (let i = 1; i <= count; i++){
 		document.write('<tr><td>'+i+'</td><td>*</td><td>*<td><tr>');
 }
 	document.write('</table>');
 }

 function swich(){
 	var color = prompt("Entrez une couleur");
 	switch(color){
 	case "rouge" : document.body.style.background = "red";
 	break;
 	case "ROUGE": document.body.style.background = "red";
 	break;
 	case "bleu": document.body.style.background = "blue";
 	break;
 	case "BLEU": document.body.style.background = "blue";
 	break;
 	case "vert": document.body.style.background = "green";
 	break;
 	case "VERT": document.body.style.background = "green";
 	break;
 	default:alert("coueleur non définie");
 	}
 }

 function cdc() {
 	var chaine = prompt("donnez un mot")
 	document.write(chaine.toUpperCase()+"<br>");
 	document.write(chaine.toLowerCase()+"<br>");
 	document.write("La chaine contient" + 	chaine.length 	+ "caractères" + "<br>");
 	document.write("La premiere lettre est" +	chaine.substr(0,1) 	+"<br>")
 }

function seconnecter3(){
	var i = 0;
	do {
		var id = prompt ("Donnez votre nom d'utilisateur");
		var mdp = prompt ("Entrez votre mot de passe");
		if (id == "admin" && mdp == "admin")
	   {
	   	document.write("Bienvenue : " +id);
	   	break;
	}
	else
	alert ("accès refusé");
    i+=1;
   } while (i<3);
   if (i==3)
   	alert("délai dépassé");
}