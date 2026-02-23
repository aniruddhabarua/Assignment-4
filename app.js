let countTotal = document.getElementById('count-total')
let countInterview = document.getElementById('count-interview')
let countRejected = document.getElementById('count-rejected')

let jobButton = document.getElementById('job-btn')
let interviewButton = document.getElementById('interview-btn')
let rejectedButton = document.getElementById('rejected-btn')

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

function toggleTab(id){
    let allButtons = document.querySelectorAll('.tab-btn')
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove('active')
    }
    document.getElementById(id).classList.add('active')
}