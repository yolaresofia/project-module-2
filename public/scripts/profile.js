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
    const response = await fetch(`/personal/addroutine/${routineValue}`)
      const json =  await response.json()
      console.log(json)
})

