let countTotal = document.getElementById('count-total')
let countInterview = document.getElementById('count-interview')
let countRejected = document.getElementById('count-rejected')

const jobCardsCount = document.getElementById('job-card-container')
const mainContainer = document.querySelector('main')

let interviewArray = []
let rejectedArray = []

function calculateCount(){
    countTotal.innerText = jobCardsCount.children.length
    countInterview.innerText = interviewArray.length
    countRejected.innerText = rejectedArray.length
}
calculateCount()