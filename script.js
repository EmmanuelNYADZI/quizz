
const questions = [
    {
        libelle: "Quelle est la capitale de la France ?",
        bonneRep: 0,
        repPossibles: [
            "Paris",
             "Lyon",
              "Marseille"]
    },
    {
        libelle: "Quel est la capitale du Sénégal ?",
        bonneRep: 1,
        repPossibles: [
            "Abidjan", 
            "Dakar",
             "Paris"]
    },
    {
        libelle: "5 x 1000 = ?",
        bonneRep: 1,
        repPossibles: [
            10,
             5000,
              500]
    },
    {
        libelle: "Qui a peint la Joconde ?",
        bonneRep: 0,
        repPossibles: [
            "Léonard de Vinci",
             "Pablo Picasso", 
             "Vincent van Gogh"]
    },
    {
        libelle: "Quelle est la formule chimique de l'eau ?",
        bonneRep: 0,
        repPossibles: [
            "H2O",
             "CO2",
              "O2"]
    },
    {
        libelle: "Qui a écrit l'œuvre Les Misérables ?",
        bonneRep: 2,
        repPossibles: [
            "Émile Zola",
             "Gustave Flaubert", 
             "Victor Hugo"]
    },
    {
        libelle: "Quelle planète est connue comme la planète rouge ?",
        bonneRep: 1,
        repPossibles: [
            "Jupiter", 
            "Mars", 
            "Vénus"]
    },
    {
        libelle: "En quelle année a eu lieu la Révolution française ?",
        bonneRep: 1,
        repPossibles: [
            1804, 
            1789,
             1792]
    },
    {
        libelle: "Qui a inventé la théorie de la relativité ?",
        bonneRep: 0,
        repPossibles: [
            "Albert Einstein",
             "Isaac Newton",
              "Galileo Galilei"]
    },
    {
        libelle: "Quel est l'animal terrestre le plus rapide ?",
        bonneRep: 2,
        repPossibles: [
            "Gazelle", 
            "Lion", 
            "Guépard"]
    },
    {
        libelle: "Quelle langue est principalement parlée au Brésil ?",
        bonneRep: 0,
        repPossibles: [
            "Portugais",
             "Espagnol", 
             "Français"]
    },
    {
        libelle: "Combien de continents y a-t-il sur Terre ?",
        bonneRep: 0,
        repPossibles: [
            "Sept", 
            "Six",
             "Cinq"]
    },
    {
        libelle: "Qui a composé la Neuvième Symphonie ?",
        bonneRep: 0,
        repPossibles: [
            "Ludwig van Beethoven", 
            "Wolfgang Amadeus Mozart", 
            "Johann Sebastian Bach"]
    },
    {
        libelle: "Quel est le plus grand océan de la Terre ?",
        bonneRep: 1,
        repPossibles: [
            "Océan Atlantique", 
            "Océan Pacifique",
             "Océan Indien"]
    },
    {
        libelle: "Quelle est la monnaie du Japon ?",
        bonneRep: 0,
        repPossibles: [
            "Yen",
             "Dollar", 
             "Euro"]
    },
    {
        libelle: "Qui est le fondateur de Microsoft ?",
        bonneRep: 0,
        repPossibles: [
            "Bill Gates",
             "Steve Jobs",
              "Mark Zuckerberg"]
    },
    {
        libelle: "Quelle est la distance moyenne entre la Terre et le Soleil ?",
        bonneRep: 0,
        repPossibles: [
            "150 millions de kilomètres",
             "200 millions de kilomètres", 
             "100 millions de kilomètres"]
    },
    {
        libelle: "Qui a écrit l'œuvre Le Petit Prince ?",
        bonneRep: 0,
        repPossibles: [
            "Antoine de Saint-Exupéry", 
            "Marcel Proust",
             "Jean-Paul Sartre"]
    },
    {
        libelle: "Quelle est la plus haute montagne du monde ?",
        bonneRep: 0,
        repPossibles: [
            "Mont Everest", 
            "Mont Fuji",
             "Mont Kilimandjaro"]
    },
    {
        libelle: "Quel est l'élément chimique avec le symbole O ?",
        bonneRep: 0,
        repPossibles: [
            "Oxygène", 
            "Or", 
            "Osmium"]
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = `Question : ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('question-text').innerText = question.libelle;
    const reponsesDiv = document.getElementById('reponses');
    reponsesDiv.innerHTML = '';
    question.repPossibles.forEach((rep, index) => {
        const repElement = document.createElement('div');
        repElement.className = 'reponse';
        repElement.innerHTML = `<input type="radio" name="question" value="${index}">${rep}`;
        reponsesDiv.appendChild(repElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === questions[currentQuestionIndex].bonneRep) {
            correctAnswers++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayResults();
        }
    } else {
        alert("Veuillez sélectionner une réponse.");
    }
}

function displayResults() {
    document.querySelector('.SlideDeQuestion').innerHTML = `<h3>Vous avez trouvé ${correctAnswers} bonnes réponses.</h3>`;
}


displayQuestion();
