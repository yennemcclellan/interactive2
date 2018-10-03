


let allwhiteBites = document.querySelectorAll('.whiteBite')


for(let i = 0; i < allwhiteBites.length; i++){
  let whiteBite = allwhiteBites[i]

  whiteBite.onpointerup = function(e){
    whiteBite.classList.toggle('hide')

  }

}


//
// let allWhiteBites = document.querySelectorAll('.whiteBite')
//
//
// for(let i = 0; i < allWhiteBites.length; i++){
//   let aWhiteBite = allWhiteBites[i]
//
//   aWhiteBite.onClick = function(e){
//       this.classList.add('.hide')
//
//   }
//
// }




//
// abigbite.onClick = function(){
//   abigbite.classList.('hide')
// }
