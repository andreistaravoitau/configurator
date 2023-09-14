function displayNone(forms) {
  for (i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
}

function onCardClickListener(element) {
  let forms = document.getElementsByClassName("forms");
  if (document.getElementById("form-" + element.id).style.display == "block") {
    displayNone(forms);
  } else {
    displayNone(forms);
    document.getElementById("form-" + element.id).style.display = "block";
  }
}

function onBodenChangeListener(event) {
  var dropdown = event.target;
  var wandInput = dropdown.closest('.row').querySelector('.form-group input[name="wand"]');

  var dropdownValue = dropdown.value;
  var newValue = (parseInt(dropdownValue) - 2) + " mm";
  wandInput.value = newValue;
}

function onVolumeChange(){
  let length = parseInt(document.getElementById("laenge").value);
  let height = parseInt(document.getElementById("hoehe").value);

  document.getElementById("groesse").value = Math.round(length*height*2.3/1000000)
}

// let prePaymentModal = document.querySelector('.prepayment-modal')

// prePaymentModal.addEventListener('click', ()=>{
  
// })

// document.querySelector("#RAL").addEventListener("input", ()=>{
//
// })

