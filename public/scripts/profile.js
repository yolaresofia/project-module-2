let newRoutine = document.getElementById('newRoutine')
let routineValue;
function displayInput() {
    newRoutine.style.display = 'block'
}
let routineName = document.getElementById('routineName')

routineName.addEventListener('change', (event) => {
    routineValue = event.target.value;
});

const addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', async () => {
    let data = {
        routineValue
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(`/personal/addroutine`, options)
        const json = await response.json()
        const routineFromDb = json.routine
        console.log(routineFromDb)
        const newRoutineDiv = document.createElement('div')
        newRoutineDiv.innerHTML = `<div class="eachRoutine">
        <a href="/personal/routine/${routineFromDb._id}">${routineFromDb.name}</a>
         <a href="/personal/${routineFromDb.name}/delete">X</a>
         </div>`
        const routineParent = document.querySelector('.routines-profile')
        routineParent.appendChild(newRoutineDiv)
    } catch (error) {
        console.log(error)
    }
})