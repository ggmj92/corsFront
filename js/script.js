function getCharacterInfo() {
    const characterNameInput = document.getElementById('characterName');
    const characterInfo = document.getElementById('characterInfo');

    const characterName = characterNameInput.value.toLowerCase();

    fetch(`http://localhost:4000/characters/${characterName}`)
        .then(response => response.json())
        .then (data => {
            const { name, status, species, gender, origin, image } = data
            characterInfo.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <p>${status}</p>
            <p>${species}</p>
            <p>${gender}</p>
            <p>${origin.name}</p>
            `
        })
        .catch(error => characterInfo.innerHTML = `<p>Could not access character</p>`)
};