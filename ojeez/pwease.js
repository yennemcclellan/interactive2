let photoyes = document.querySelector('#photoyes')
let ohgosh = document.querySelector('#ohgosh')
let whitecircle = document.querySelector('.whitecircle')
let whitecircle1 = document.querySelector('.whitecircle1')
let whitecircle2 = document.querySelector('.whitecircle2')
// let ohgosh1 = document.querySelector('#ohgosh1')

let haveYouClickedOnPhotoYes = false

photoyes.addEventListener('pointerdown',function(){
  haveYouClickedOnPhotoYes = true
})

photoyes.addEventListener('pointerenter',function(){
  ohgosh.classList.remove('hidden')
})


photoyes.addEventListener('pointerleave',function(){
  if(!haveYouClickedOnPhotoYes){
      ohgosh.classList.add('hidden')
  }


})

let pickCanvas = document.createElement('canvas')
let pickContext = pickCanvas.getContext('2d')

let pickImages = document.querySelectorAll('.pickOnMe')


for(let i = 0; i < pickImages.length; i++){
   setUpPicker(pickImages[i])
}

function setUpPicker(img){

  let color = 'rgb(0,0,0)'


  img.addEventListener('pointermove',function(e){
    let x = e.offsetX
    let y = e.offsetY

    let scaleX = img.naturalWidth / img.width
    let scaleY = img.naturalWidth / img.width
    x = Math.floor(x * scaleX)
    y = Math.floor(y * scaleY)

    pickCanvas.width = img.naturalWidth
    pickCanvas.height = img.naturalHeight
    pickContext.drawImage(img,0,0)

    let data = pickContext.getImageData(x, y, 1, 1).data;
    color = 'rgb('+data[0] + ',' + data[1] + ',' + data[2] + ')'

    console.log(color)
  })

  let colorCounter = 0

  img.addEventListener('click',function(){
     // you'd apply the colors here, i'll just set the background

    // document.body.style.background = color
    if(colorCounter == 0) whitecircle.style.backgroundColor = color
    if(colorCounter == 1) whitecircle1.style.backgroundColor = color
    if(colorCounter == 2) whitecircle2.style.backgroundColor = color
    if(colorCounter == 2 window.print())
    colorCounter ++



  })
}
