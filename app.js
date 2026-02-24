let countTotal = document.getElementById('count-total')
let countInterview = document.getElementById('count-interview')
let countRejected = document.getElementById('count-rejected')
currentStatus = "job-btn"

let jobButton = document.getElementById('job-btn')
let interviewButton = document.getElementById('interview-btn')
let rejectedButton = document.getElementById('rejected-btn')

const jobCardsCount = document.getElementById('job-card-container')
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')

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
    currentStatus = id

    if (id == 'interview-btn'){
        jobCardsCount.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        interviewRender()
    }
    else if (id == 'job-btn'){
        jobCardsCount.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
    else if (id == 'rejected-btn'){
        jobCardsCount.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        rejectedRender()
    }
}

mainContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('job-btn-1')){
        const parenNode = event.target.parentNode.parentNode
        const jobTitle = parenNode.querySelector('.jobTitle').innerText
        const jobSubTitle = parenNode.querySelector('.jobSubTitle').innerText
        const jobDetail = parenNode.querySelector('.jobDetail').innerText
        const status = parenNode.querySelector('.status').innerText
        const jobNote = parenNode.querySelector('.jobNote').innerText
        parenNode.querySelector('.status').innerText = 'INTERVIEW'
        
        const cardInfo = {jobTitle, jobSubTitle, jobDetail, status, jobNote}
        
        const interviewExist = interviewArray.find(item => item.jobTitle == cardInfo.jobTitle)
        
        if (!interviewExist){
            interviewArray.push(cardInfo)
        }
        rejectedArray = rejectedArray.filter(item => item.jobTitle != cardInfo.jobTitle)
        if (currentStatus == "rejected-btn") {
            rejectedRender();
        }
        calculateCount()
    }
    else if (event.target.classList.contains('job-btn-2')){
        const parenNode = event.target.parentNode.parentNode
        const jobTitle = parenNode.querySelector('.jobTitle').innerText
        const jobSubTitle = parenNode.querySelector('.jobSubTitle').innerText
        const jobDetail = parenNode.querySelector('.jobDetail').innerText
        const status = parenNode.querySelector('.status').innerText
        const jobNote = parenNode.querySelector('.jobNote').innerText
        parenNode.querySelector('.status').innerText = 'REJECTED'
        
        const cardInfo = {jobTitle, jobSubTitle, jobDetail, status, jobNote}
        
        const rejectedExist = rejectedArray.find(item => item.jobTitle == cardInfo.jobTitle)
        
        if (!rejectedExist){
            rejectedArray.push(cardInfo)
        }
        interviewArray = interviewArray.filter(item => item.jobTitle != cardInfo.jobTitle)
        if (currentStatus == "interview-btn") {
            interviewRender();
        }

        calculateCount()
    }
})

function interviewRender(){
    filteredSection.innerHTML = ''
    for(let i of interviewArray){
        let div = document.createElement('div')
        div.className = 'job-card'
        div.innerHTML = `
        <div>
            <div class="job-card-gap">
                <h3 class="jobTitle">${i.jobTitle}</h3>
                <p class="grey jobSubTitle">${i.jobSubTitle}</p>
            </div>
            <p class="job-card-gap grey jobDetail">${i.jobDetail}</p>
            <p class="job-card-gap status">${i.status}</p>
            <p class="job-card-gap jobNote">${i.jobNote}</p>
            <div class="job-card-gap job-card-button">
                <button class="job-btn-1">INTERVIEW</button>
                <button class="job-btn-2">REJECTED</button>
            </div>
        </div>
        <div>
            <button class="job-btn-3"><i class="fa-regular fa-trash-can"></i></button>
        </div>`
        filteredSection.appendChild(div)
    }
}
function rejectedRender(){
    filteredSection.innerHTML = ''
    for(let i of rejectedArray){
        let div = document.createElement('div')
        div.className = 'job-card'
        div.innerHTML = `
        <div>
            <div class="job-card-gap">
                <h3 class="jobTitle">${i.jobTitle}</h3>
                <p class="grey jobSubTitle">${i.jobSubTitle}</p>
            </div>
            <p class="job-card-gap grey jobDetail">${i.jobDetail}</p>
            <p class="job-card-gap status">${i.status}</p>
            <p class="job-card-gap jobNote">${i.jobNote}</p>
            <div class="job-card-gap job-card-button">
                <button class="job-btn-1">INTERVIEW</button>
                <button class="job-btn-2">REJECTED</button>
            </div>
        </div>
        <div>
            <button class="job-btn-3"><i class="fa-regular fa-trash-can"></i></button>
        </div>`
        filteredSection.appendChild(div)
    }
}