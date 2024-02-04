import projects from "./projects.mjs"

const secondColumnElms = Array.from(document.querySelectorAll('.second')) 
const projectContainer = document.getElementById('project-container');

function createProjectList(arr) { //creates li elements from projects array
    arr.forEach(project => {
        const newLi = document.createElement('li');
        const p = document.createElement('p');

        const projectName = document.createElement('span');
        projectName.classList.add('projectName')

        const comma = document.createElement('span');

        const completed = document.createElement('span')
        completed.textContent = " (completed)"
        completed.style.color = "green"

        const cooking = document.createElement('span')
        cooking.textContent = " (cooking...)"
        cooking.style.color = "#FF00FF"

        comma.textContent = ",";

        projectName.textContent = project.name;
        projectName.style.color = "#FCEE21";

        p.appendChild(projectName);
        p.appendChild(comma);

        if(project.completed){
            p.appendChild(completed)
        } else {
            p.appendChild(cooking)
        }

        newLi.appendChild(p);

        projectContainer.appendChild(newLi);
    });
}


document.addEventListener('DOMContentLoaded', createProjectList(projects))

const projectNames = Array.from(document.querySelectorAll('.projectName'))

//Displaying clicked project second column

const projectHeading = document.getElementById('project-heading');
const projectContract = document.getElementById('contract');
const projectReadiness = document.getElementById('project-readiness');

projectNames.forEach(elm => { //activates when a project name gets clicked in first column
    elm.addEventListener('click' , handleProjectClick)
})

function handleProjectClick (e){
    
    const clickedProject = projects.filter(project => project.name === e.target.textContent)[0];

    if (!clickedProject.clickable) {
        return
    }



    if(clickedProject.completed){
        projectReadiness.textContent = "(completed)"
        projectReadiness.style.color = "green"
    } else {
        projectReadiness.textContent = "(cooking)"
        projectReadiness.style.color = "#FF00FF"
    }

    const existingSpan = projectContract.querySelector('a');
    if (existingSpan) { //removes previous contracts being displayed
        projectContract.removeChild(existingSpan);
    }

    const contract = document.createElement('a')
    contract.setAttribute('href', `${clickedProject.solscan}` ); // Replace with your actual link
    contract.setAttribute('target', '_blank');
    contract.style.textDecoration = "underline"
    contract.style.color = "white"

    secondColumnElms.forEach(elm => { //displays second column
        elm.style.display = "block"
    })

    
    contract.textContent = shortenContract(clickedProject.contract)
    
    projectContract.appendChild(contract)
    projectHeading.textContent = e.target.textContent
}

//utilites 

function shortenContract(contract){
    const start = contract.slice(0,4)
    const last = contract.slice(-4)
    return `${start}...${last}`
}

