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
const projectContract = document.getElementById('contract')

projectNames.forEach(elm => { //activates when a project name gets clicked in first column
    elm.addEventListener('click' , handleProjectClick)
})

function handleProjectClick (e){

    const existingSpan = projectContract.querySelector('span');
    if (existingSpan) { //removes previous contracts
        projectContract.removeChild(existingSpan);
    }

    const contract = document.createElement('span')

    secondColumnElms.forEach(elm => { //displays second column
        elm.style.display = "block"
    })

    const clickedProject = projects.filter(project => project.name === e.target.textContent)[0];
    contract.textContent = shortenContract(clickedProject.contract)
    
    projectContract.appendChild(contract)
    projectHeading.textContent = e.target.textContent
}

//utilites 

function shortenContract(contract){
    let shorten;
    const start = contract.slice(0,4)
    const last = contract.slice(-4)
    shorten = `${start}...${last}`
    return shorten
}

