async function addOptionOnChampion() {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json');
    const names = await response.json();
    var champion = Object.keys(names.data);
    for (let index = 0; index < champion.length; index++) {
        document.querySelector("#champs-list").innerHTML += ` <option value="${champion[index]}">${champion[index]}</option>`;
    }
    
  }
addOptionOnChampion();
