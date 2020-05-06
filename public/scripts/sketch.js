p5.disableFriendlyErrors = true;

let classifier;
let inputImage = document.getElementById('img')
let urlImg
let pictureObj

function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aQ7BIt5bH/model.json');
}

function setup() {
  // leave setup here, do not delete!
}
inputImage.addEventListener('change', (e) => {
  urlImg = URL.createObjectURL(event.target.files[0])
  imageReady(urlImg)
})



function imageReady(img1) {
  img1 = createImg(urlImg, 'alt', () => {
    classifier.classify(img1, gotResult)
  })
  img1.hide()
}

const selectElement = document.getElementById('excercise-select')
let filterResult

selectElement.addEventListener('change', (event) => {
  filterResult = event.target.value;
  handleSubmit(filterResult);
});

function gotResult(err, results) {
  if (err) {
    console.error(err);
  }

  pictureObj = results[0].label
}

const handleSubmit = async (filteredResult) => {
  let selected = filteredResult
  let data = {
    selected,
    pictureObj
  }
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }

  const response = await fetch('/main', options)
  const json = await response.json()
  let exerciseFromDB = json.exercises
  // let parentEx
  exerciseFromDB.forEach(e => {
    let optionString = json.user.routines.reduce((accumulator, routine) => {
      return accumulator += ` <option value='/personal/add/${e._id}/${routine._id}'>${routine.name}</option>`
    }, `<option value=''>Chose your routine</option>`)
    
    let eachEx = createDiv(` <div class="exercise-card">
   
        <div class="buttons-exer">
            <select class="ex-move-btn">
            ${optionString}
            </select>
            <button class="ex-delete-btn">X</button>
        </div>
        <div class="ex-card-main">
            <img src=${e.imgPath}" class="exer-img" alt="">
            <h2>${e.name}</h2>
            <h5>${e.element}</h5>
            <h5>${e.intensity}</h5>
            <h5>${e.type}</h5>
            <p>${e.description}</p>
        </div>
    
</div>`)
      // document.getElementById('allexers').appendChild(eachEx)
  //  eachEx.parent('.allexers')
    const selectedElement = eachEx.elt.querySelector('.ex-move-btn')
    const removeElement = eachEx.elt.querySelector('.ex-delete-btn')
    removeElement.addEventListener('click', (e) => {
      eachEx.elt.remove()
    })
    selectedElement.addEventListener('change', (e) => {
      //location = e.target.value
      eachEx.elt.remove()
      fetch(e.target.value)
        .then(response => {
          e.target.value = ''
          console.log('success')
          console.log(response.json())
        })
    })
  });

}