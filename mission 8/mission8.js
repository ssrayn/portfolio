function function0() {
	let test = prompt("Merci d'inscrire une chaine de caractères ");
	document.body.innerHTML = test;
}

function function1() {
	let a = 42;
	let b = 7569;
	let result = a + b;
	alert(result);
}

function function2() {
	let note_maths = 11;
	let note_francais = 9;
	let nohe_hg = 16;
	let moyenne = ( note_maths + note_francais + note_hg) / 3;
	alert ('La moyenne est de ' + moyenne);
}

function function3() {
	let budget = 1553.89;
	let achats = 1554.76;
	if(budget >= achats) {
		alert('Le  budget (' + budget + ' euros ) permet de payer tout les achats (' + achats +' euros)') 
	} else {
		alert('Le  budget ne (' + budget + ' euros ) permet pas de payer tout les achats (' + achats +' euros)') 
	}
}

function function4() {
	let ht = prompt ("Montant HT ?");
	let ttc = ht * 1.2;
	document.body.innerText = ttc;
}

function function5() {
	let ht = prompt("Montant HT ?");
	let taux_tva = prompt("Taux de TVA ?");
	let taux_tva_calcul = (taux_tva / 100) + 1;
	let ttc = ht * taux_tva_calcul;
	document.body.innerText = ttc;
}

function function6() {
	let ht = prompt("Montant HT ?");
	let taux_tva = prompt("Taux de TVA ?");
	let ttc = ht * (taux_tva / 100) + 1;
	if (ttc > 100) {
		document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
	} else {
		document.body.innerHTML = '<h1 style"color: green;">' + ttc + '</h1>'
}

}

function function7() {
	
}

function function8() {
	for(i = 10;i <= 1000;i+=10) {
		console.log(i);
	}
}

function function9() {
	let age = prompt ("Quel est votre âge ?")
	if (age >= 18) {
		alert('Vous êtes majeur !')
	} else {
		alert ('Vous êtes mineur !')
}

}

function function10() {
	let cp = 70000;
	while(cp <= 77999) {
		console.log(cp);
		cp++;
	}
}

function function11() {
	let n = 5;
	let html = '';
	for(let i = 1;i <= 10;i++) {
		html = html + n + 'x' + i + '=' + (n * i) + '</br>';
	}
	document.body.innerHTML = html;
}

function function12() {
	let html = '';
	for(let i = 1;i <= 5;i++) {
		for (let k = 1;k <= i;k++) {
			html = html + i;
		}
		html =  html + '<br/>'
	}
	document.body.innerHTML = html;
}

function function13() {
	let html = '';
	let k = 0;

	while(k <= 20) {
		html = html + k + '<br/>';
		k = k + 2;
	}
	document.body.innerHTML = html;
}

function function14() {
	let tableau = '<table>';
	let lignes = 5;
	let colonnes = 3;

	for(let i = 1;i <= lignes;i++) {
		tableau = tableau + '<tr>';
		for(let k = 1;k <= colonnes;k++) {
			tableau = tableau + '<td>yolo</td>'
		}
		tableau = tableau + '</td>'
	}
	tableau = tableau + '</table>';
	document.body.innerHTML = tableau;
}

function function15() {
	let lignes = prompt ("Nombre de lignes ?");
	let colonnes = prompt ("Nombre de colonnes ?");
	let tableau = '<table>';

	for(let i = 1;i <= lignes;i++) {
		tableau = tableau + '<tr>';
		for(let k = 1;k <= colonnes;k++) {
			tableau = tableau + '<td>yolo</td>';
		}
		tableau = tableau + '</tr>';
		}
	tableau = '</table>';
	document.body.innerHTML = tableau;
	}

function function16() {
	let html = '<ul>';
	let nalea = 10;
	for(let i = 0;i < nalea;i++) {
		html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
	}
	html = html + '</ul>';
	document.body.innerHTML = html;
}

function function17() {
	let html = '<ul>';
    let nalea = 10;
    for(let i = 0;i < nalea;i++) {
        html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
    }
    html = html + '</ul>';
    document.body.innerHTML = html;
}

function function18() {
	let html = '<ul>';
    let nalea = 10;
    for(let i = 0;i < nalea;i++) {
        let tmp = Math.floor(Math.random() * 11);
        if(tmp == 10) {
            console.log('Le nombre 10 fait parti du tirage.');
        }
        html = html + '<li>' + tmp + '</li>';
    }
    html = html + '</ul>';
    document.body.innerHTML = html;
}

function function19() {
	let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.background = color;
}
