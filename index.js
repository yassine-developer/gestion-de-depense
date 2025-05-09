const depenses = [];
const listes = document.querySelector(".liste-depenses ul");
const totale = document.querySelector("#totale");
const emojis = ["🍔","🏠","🚗","🎮"];
const categories = ["Alimentation", "Logement", "Transport", "Divertissement"];

document.querySelector("button").addEventListener('click', (e) => {
    e.preventDefault();
    const nom = document.getElementById("description").value;
    const montant = parseInt(document.getElementById("montant").value, 10);
    const categorie = document.getElementById("categorie").value;
    const date = document.getElementById("date").value;


    depenses.push([nom, montant, categorie, date]);

    document.getElementById("description").value = "";
    document.getElementById("montant").value = "";
    document.querySelector("#categorie").value="";
    document.getElementById("date").value = "";

    let somme = 0;
    listes.innerHTML = "";
    depenses.forEach((element, index) => {
        const li = document.createElement("li");
        let emoji = emojis[categories.indexOf(element[2])];
        li.innerHTML = `
        ${element[0]} ${element[1]} ${emoji} ${element[2]} ${element[3]}
        <button class="supprimer" data-index="${index}">supprimer</supprimer>
        `;
        listes.appendChild(li);
        console.log(li);
        somme += element[1];
    });


    totale.innerText = `${somme}`;
    

})

listes.addEventListener('click', (e) => {

    if (e.target.classList.contains('supprimer')) {
        let listeNum = e.target.dataset.index;
        depenses.splice(listeNum, 1);

        let somme = 0;
        listes.innerHTML = "";
        depenses.forEach((element, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
        ${element[0]} ${element[1]} ${element[2]}
        <button class="supprimer" data-index="${index}">supprimer</supprimer>
        `;
            listes.appendChild(li);
            console.log(li);
            somme += element[1];
        })
        totale.innerText = `${somme}`;
    }



})