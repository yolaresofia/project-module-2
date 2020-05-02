p5.disableFriendlyErrors = true;

let classifier;
let inputImage = document.getElementById('img')
let urlImg
let pictureObj

function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6qPt5DIx-/model.json');
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
  console.log(results[0].label)
  pictureObj = results[0].label
}

async function handleSubmit(filteredResult) {
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
  console.log(json.exercises)
  let exerciseFromDB = json.exercises
  exerciseFromDB.forEach(e => {
    createP(`you can do ${e.name} with this intensity: ${ e.intensity}`)
  });
}