function releve() {
	var a= document.getElementById("note1").value;
    var b= document.getElementById("note2").value;
    var c= document.getElementById("note3").value;

    var d= document.getElementById("coef1").value;
    var e= document.getElementById("coef2").value;
    var f= document.getElementById("coef3").value;

    var s= Number(a)*Number(d)+Number(b)*Number(e)+Number(c)+Number(f);
    var t= Number(s)/Number(d)+Number(e)+Number(f)

    moyenne.value=t;

    if (t<8)
    	resultat.value=("Redoublement...")
    else if (t<10)
    	resultat.value=("Rattrapages")
    else if (t<12)
    	resultat.value=("Admis passable")
    else if (t<14)
    	resultat.value=("Admis mention Assez Bien")
    else if (t<16)
    	resultat.value=("Admis Mention Bien")
    else if (t<=20)
    	resultat.value=("Admis mention Très bien")
    else if (t>20)
    	alert("Erreur")
    }