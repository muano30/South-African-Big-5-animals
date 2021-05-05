
// when user hover on the picture the sound of the animal plays.

function playSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function stopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}


// when user hover on the picture the second picture appear.

const setNewImage = () => {
  document.getElementById("elephant").src="images/elephantsound.png";
  console.log('me')
}

const setOldImage = () => {
  document.getElementById("elephant").src="images/elephant2.jpg";
 }

const setNewImage1 = () => {
  document.getElementById("leopard").src="images/leopard3sound.jpg";
}

const setOldImage1 = () => {
  document.getElementById("leopard").src="images/leopard.jpg";
}

const setNewImage2 = () => {
  document.getElementById("lion").src="images/roaringlion.jpg";
}

const setOldImage2 = () => {
  document.getElementById("lion").src="images/lion.jpg";
}
const setNewImage3 = () => {
  document.getElementById("buffalo").src="images/buffalo.jpeg";
}

const setOldImage3 = () => {
  document.getElementById("buffalo").src="images/buffalo2.jpg";
}

const setNewImage4 = () => {
  document.getElementById("rhino").src="images/rhinoSound.jpg";
}

const setOldImage4 = () => {
  document.getElementById("rhino").src="images/rhino.jpg";
}