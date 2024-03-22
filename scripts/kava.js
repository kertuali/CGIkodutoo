document.querySelectorAll('.osta').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var filmContainer = button.closest('.filterDiv');
    var film = filmContainer.querySelector('.film-title').textContent;
    var aeg = filmContainer.querySelector('.film-time').textContent.replace('Aeg: ', '');
    var url = 'istmebookimine.html?film=' + encodeURIComponent(film) + '&aeg=' + encodeURIComponent(aeg);
    window.location.href = url;
  });
});



function filters() {
    var x = document.getElementById("filters");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function ShowAndHide() {
    var x = document.getElementById("myBtnContainer");
    if(x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}



filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




//nuppude lisamine istmete ostuks
//hangin nupud
//var bookSeatsBtns = document.querySelectorAll('.osta');

//nupu kuulaja lisamine
//bookSeatsBtns.forEach(function(button) {
  //button.addEventListener('click', function(event) {
  //  event.preventDefault();
  //  var filmContainer = button.closest('.filterDiv');
  //  var film = filmContainer.querySelector('.film-title').textContent;
  //  var aeg = filmContainer.querySelector('.film-time').textContent.replace('Aeg: ', '');
  //  var url = 'filtrid.html?film=' + encodeURIComponent(film) + '&aeg=' + encodeURIComponent(aeg);
  //  window.location.href = url;
  
    //alert("Valitud film: " + film + ", Aeg: " + aeg)
    //window.location.href = 'filtrid.html?filterDiv=' + encodeURIComponent(filterDiv) + '&aeg=' + encodeURIComponent(aeg);
//  });
//});

// Nupule klõpsamisel suunatakse kasutaja istmete broneerimise lehele
document.getElementById('broneeriNupp').addEventListener('click', function() {
  var valitudFilm = document.getElementById('valitudFilm').value;
  var valitudAeg = document.getElementById('valitudAeg').value;
  window.location.href = 'istmebookimine.html?film=' + encodeURIComponent(valitudFilm) + '&aeg=' + encodeURIComponent(valitudAeg);
});
