import projects from "./projects.mjs"

const projectHeading = document.getElementById('project-heading');
const secondColumnElms = Array.from(document.querySelectorAll('.second')) 
const projectContainer = document.getElementById('project-container');

function createProjectList(arr) {
    arr.forEach(project => {
        const newLi = document.createElement('li');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const comma = document.createElement('span');

        const completed = document.createElement('span')
        completed.textContent = " (completed)"
        completed.style.color = "green"

        const cooking = document.createElement('span')
        cooking.textContent = " (cooking...)"
        cooking.style.color = "#FF00FF"

        comma.textContent = ",";

        span.textContent = project.name;
        span.style.color = "#FCEE21";

        p.appendChild(span);
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

function handleProjectClick (e){
    secondColumnElms.forEach(elm => {
        elm.style.display = "block"
    })
}

const num = 1;

console.log(secondColumnElms)