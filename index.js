
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

//  for image hover

function playSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function stopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}


function setNewImage() {
  document.getElementById("elephant").src="images/elephantsound.png";
}

function setOldImage() {
  document.getElementById("elephant").src="images/elephant.jpeg";
 }

// function setNewImage() {
//   document.getElementById("leopard").src="images/leopardsound.jpg";
// }

// function setOldImage() {
//   document.getElementById("leopard").src="leopard.jpeg";
// }

// function setNewImage() {
//   document.getElementById("lion").src="images/lionroar.jpg";
// }

// function setOldImage() {
//   document.getElementById("lion").src="images/lion.jpg";
// }
// function setNewImage() {
//   document.getElementById("buffalo").src="images/buffalosound.jpg";
// }

// function setOldImage() {
//   document.getElementById("buffalo").src="images/buffalo.jpeg";
// }

// function setNewImage() {
//   document.getElementById("rhino").src="images/rhinosound.jpg";
// }

// function setOldImage() {
//   document.getElementById("rhino").src="images/rhino.jpeg";
// }