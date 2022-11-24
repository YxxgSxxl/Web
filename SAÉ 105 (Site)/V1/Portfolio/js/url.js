// INIT
let param = new URLSearchParams(location.search);
let sae = param.get('sae');

document.title = "SAE " + sae;

document.querySelector(".titre").innerHTML = "<div class=\"title\"><b>SAE " + sae + " " + (SAE["SAE" + sae]["titre"]) + "</div></b>";
document.querySelector(".competences").innerHTML = "<div class=\"center\"><b><i>Compétences</i> :</b> " + (SAE["SAE" + sae]["compétences"]) + "</div>";
document.querySelector(".description").innerHTML = "<div class=\"center\"><b><i>Description</i> :</b><br><br> " + (SAE["SAE" + sae]["description"]) + "</div>";

let ac = (SAE["SAE" + sae]["AC"]);

for (let cle in ac) {
    document.querySelector(".ac").innerHTML += "<div class=\"center\"><b><i>" + cle + "</i> :</b></div><br> " + ac[cle] + "<br><br>";
}

let res = (SAE["SAE" + sae]["ressources"]);

for (let cle1 in res) {
    document.querySelector(".ressources").innerHTML += "<b><i>" + cle1 + "</i> :</b> " + res[cle1] + "<br><br>";
}

document.querySelector(".semestre").innerHTML = "<div class=\"end\"><b><i>Semestre " + "</i>:</b> " + (SAE["SAE" + sae]["semestre"]) + "</div>";
// END INIT