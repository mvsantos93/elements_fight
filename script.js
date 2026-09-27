const choices = ['Fire🔥', 'Water💧', 'Grass🌿']
let element;
let results;

function battle_logic() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    let player_choice = document.querySelector('input[name="options"]:checked')
    
    if (player_choice.value == 'fire'){
        element = "🔥Fire"
        if (choice == "Water💧"){
            results = "Too bad, you lost!";
        }
        else if (choice == "Grass🌿"){
            results = "Congratulations, you won!";
        }
        else {
            results = "It is a draw!";
        }
    }
    else if (player_choice.value == 'water'){
        element = "💧Water"
        if (choice == "Grass🌿"){
            results = "Too bad, you lost!";
        }
        else if (choice == "Fire🔥"){
            results = "Congratulations, you won!";
        }
        else {
            results = "It is a draw!";
        }
    }
    else if (player_choice.value == 'grass'){
        element = "🌿Grass"
        if (choice == "Fire🔥"){
            results = "Too bad, you lost!";
        }
        else if (choice == "Water💧"){
            results = "Congratulations, you won!";
        }
        else {
            results = "It is a draw!";
        }
    }

    document.getElementById("cpu_choice_id").innerText = `CPU chooses: ${choice}`;
    document.getElementById("versus_text_id").innerText = `It is ${element}  VS  ${choice}`;
    document.getElementById("results_id").innerText = results;
}