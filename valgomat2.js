const questions = [
    {question: 'Det er ikke greit å øke bompengene mer',
        heltEnig: {R: 2, SV: -1, AP: 2, SP: 2, MDG: -1, KRF: 1, V: 1, H: 2, FrP: 2},
        littEnig: {R: 1, SV: 0, AP: 1, SP: 1, MDG: 0, KRF: 2, V: 0, H: 1, FrP: 1},
        littUenig: {R: 0, SV: 1, AP: 0, SP: 0, MDG: 1, KRF: 0, V: 2, H: 0, FrP: 0},
        heltUenig: {R: -1, SV: 2, AP: -1, SP: -1, MDG: 2, KRF: -1, V: 1, H: -1, FrP: -1},
    },
    {question: 'Bergensskolen bør ha mobilforbud',
    heltEnig: {R: -1, SV: -1, AP: -1, SP: 2, MDG: 2, KRF: 1, V: -1, H: -1, FrP: -1},
    littEnig: {R: 0, SV: 0, AP: 0, SP: 1, MDG: 1, KRF: 2, V: 0, H: 0, FrP: 0},
    littUenig: {R: 2, SV: 2, AP: 1, SP: 0, MDG: 0, KRF: 0, V: 2, H: 2, FrP: 2},
    heltUenig: {R: 1, SV: 1, AP: 2, SP: -1, MDG: -1, KRF: -1, V: 1, H: 1, FrP: 1},
    },
    
    {question: 'Bergen må prioritere å få tilbudet om «Rask psykisk helsehjelp» på plass i alle bydelene',
        heltEnig: {R: 2, SV: 2, AP: 2, SP: 2, MDG: 2, KRF: 2, V: 1, H: 2, FrP: 2},
        littEnig: {R: 1, SV: 1, AP: 1, SP: 1, MDG: 1, KRF: 1, V: 2, H: 1, FrP: 1},
        littUenig: {R: 0, SV: 0, AP: 0, SP: 0, MDG: 0, KRF: 0, V: 0, H: 0, FrP: 0},
        heltUenig: {R: -1, SV: -1, AP: -1, SP: -1, MDG: -1, KRF: -1, V: -1, H: -1, FrP: -1},
    }, 
    
    {question: 'Mer areal i Bergen kommune må bli satt av til å bygge boliger',
        heltEnig: {R: -1, SV: -1, AP: 1, SP: 1, MDG: -1, KRF: -1, V: -1, H: 2, FrP: 2},
        littEnig: {R: 0, SV: 0, AP: 2, SP: 2, MDG: 0, KRF: 0, V: 0, H: 1, FrP: 1},
        littUenig: {R: 1, SV: 2, AP: 0, SP: 0, MDG: 1, KRF: 2, V: 2, H: 0, FrP: 0},
        heltUenig: {R: 2, SV: 1, AP: -1, SP: -1, MDG: 2, KRF: 1, V: 1, H: -1, FrP: -1},
    },
    
    {question: 'Aktivitetskortet for barn og unge bør bli gratis for alle',
        heltEnig: {R: 2, SV: 2, AP: 2, SP: -1, MDG: 2, KRF: 2, V: 1, H: -1, FrP: 2},
        littEnig: {R: 1, SV: 1, AP: 1, SP: 0, MDG: 1, KRF: 1, V: 2, H: 0, FrP: 1},
        littUenig: {R: 0, SV: 0, AP: 0, SP: 2, MDG: 0, KRF: 0, V: 0, H: 1, FrP: 0},
        heltUenig: {R: -1, SV: -1, AP: -1, SP: 1, MDG: -1, KRF: -1, V: -1, H: 2, FrP: -1},
    },
    
    {question: 'Bergen må bruke penger på å gi fastlegene færre pasienter og bedre arbeidsvilkår',
        heltEnig: {R: 2, SV: 2, AP: 2, SP: 1, MDG: 2, KRF: 1, V: 1, H: 1, FrP: 1},
        littEnig: {R: 1, SV: 1, AP: 1, SP: 2, MDG: 1, KRF: 2, V: 2, H: 2, FrP: 2},
        littUenig: {R: 0, SV: 0, AP: 0, SP: 0, MDG: 0, KRF: 0, V: 0, H: 0, FrP: 0},
        heltUenig: {R: -1, SV: -1, AP: -1, SP: -1, MDG: -1, KRF: -1, V: -1, H: -1, FrP: -1},
    },
    
    {question: 'Norsk politi må ha lov å ransake deg for å finne ut om du har narkotika til eget bruk',
        heltEnig: {R: -1, SV: -1, AP: 1, SP: 2, MDG: -1, KRF: 2, V: -1, H: -1, FrP: 2},
        littEnig: {R: 0, SV: 0, AP: 2, SP: 1, MDG: 0, KRF: 1, V: 0, H: 0, FrP: 1},
        littUenig: {R: 1, SV: 1, AP: 1, SP: 0, MDG: 1, KRF: 0, V: 1, H: 1, FrP: 0},
        heltUenig: {R: 2, SV: 2, AP: -1, SP: -1, MDG: 2, KRF: -1, V: 2, H: 2, FrP: -1},
    },
    
    {question: 'Retten til abourt bør begrenses, for abort er å ta liv',
        heltEnig: {R: -1, SV: -1, AP: -1, SP: 1, MDG: -1, KRF: 1, V: -1, H: -1, FrP: -1},
        littEnig: {R: 0, SV: 0, AP: 0, SP: 2, MDG: 0, KRF: 2, V: 0, H: 0, FrP: 0},
        littUenig: {R: 1, SV: 1, AP: 1, SP: 0, MDG: 1, KRF: 0, V: 1, H: 1, FrP: 1},
        heltUenig: {R: 2, SV: 2, AP: 2, SP: -1, MDG: 2, KRF: -1, V: 2, H: 2, FrP: 2},
    },
    
    {question: 'Undervisningsopplegget Rosa kompetanse bør ikke brukes i skole og barnehager',
        heltEnig: {R: -1, SV: -1, AP: -1, SP: 2, MDG: -1, KRF: 2, V: -1, H: -1, FrP: -1},
        littEnig: {R: 0, SV: 0, AP: 0, SP: 1, MDG: 0, KRF: 1, V: 0, H: 0, FrP: 0},
        littUenig: {R: 1, SV: 1, AP: 1, SP: 0, MDG: 1, KRF: 0, V: 1, H: 1, FrP: 1},
        heltUenig: {R: 2, SV: 2, AP: 2, SP: -1, MDG: 2, KRF: -1, V: 2, H: 2, FrP: 2},
    },
    
    {question: 'På havbunnen finnes nyttige metaller og mineraler som Norge bør hente opp',
        heltEnig: {R: -1, SV: -1, AP: 2, SP: 1, MDG: -1, KRF: 1, V: -1, H: 1, FrP: 2},
        littEnig: {R: 0, SV: 0, AP: 1, SP: 2, MDG: 0, KRF: 2, V: 0, H: 2, FrP: 1},
        littUenig: {R: 2, SV: 2, AP: 0, SP: 0, MDG: 1, KRF: 0, V: 1, H: 0, FrP: 0},
        heltUenig: {R: 1, SV: 1, AP: -1, SP: -1, MDG: 2, KRF: -1, V: 2, H: -1, FrP: -1},
    },
]; // ... add more questions

let partyScores = {
    R: 0,
    SV: 0,
    AP: 0,
    SP: 0,
    MDG: 0,
    KrF: 0,
    V: 0,
    H: 0,
    FrP: 0,
}
const questionT = document.getElementById("question");
const btnNext = document.getElementById("btnNext");
const rbAnswer = document.getElementsByName('answer');

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            
            radioChecked.checked = false
            questionT.innerHTML = questions[qidx].question
            
        }
        else { 
            inputForm.style.display = 'none'
            showResult()
        }
        
    }

}

function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}

function showResult() {
    let sorted = new Map()
    const resultBox = document.getElementById("result")

    while (sorted.size < Object.keys(partyScores).length ) {
        let max = null

        for (party in partyScores) {
            if (max ===null && !sorted.has(party)) {
                max = party
            }
            else if(partyScores[party] > partyScores[max] && !sorted.has(party)) {
                max = party
            }
        }
        sorted.set(max, partyScores[max])
    }


    sorted.forEach((score, party) => {
        console.log(party, score);
    });

}