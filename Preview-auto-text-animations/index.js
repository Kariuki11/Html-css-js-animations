const containerEl = document.querySelector(".container")

const careers = ["Software Engineer", "Student", "Backend Developer", "Programmer",];

let careerIndex = 0

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
    <h1 class="text">I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;

    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex === careers.length)
    {
        careerIndex = 0;
    }
    setTimeout(updateText, 140);
}