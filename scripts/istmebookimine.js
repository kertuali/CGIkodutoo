document.addEventListener('DOMContentLoaded', function() {
  var params = new URLSearchParams(window.location.search);
  var film = params.get('film');
  var aeg = params.get('aeg');

  // Kuvame valitud filmi ja ajakava
  document.getElementById('valitudFilm').textContent = "Valitud film: " + film;
  document.getElementById('valitudAeg').textContent = "Aeg: " + aeg;
});



const seatsGrid = document.getElementById('seatsGrid');
const seatCountInput = document.getElementById('seatCount');
let selectedSeats = [];

function reserveSeats() {
  const seatCount = Number(seatCountInput.value);
  const totalSeats = 100; // Kinosaali koguarv kohti
  const takenSeats = new Set();
  
  while (takenSeats.size < 10) {
    const randomSeat = Math.floor(Math.random() * totalSeats) + 1;
    takenSeats.add(randomSeat);
  }
  
  seatsGrid.innerHTML = '';
  
  for (let i = 1; i <= totalSeats; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    
    if (takenSeats.has(i)) {
      seat.classList.add('reserved');
    } else {
      seat.addEventListener('click', () => selectSeat(seat, i));
    }
    
    seatsGrid.appendChild(seat);
  }
}

function selectSeat(seat, seatNumber) {
  if (selectedSeats.length < Number(seatCountInput.value)) {
    selectedSeats.push(seatNumber);
    seat.classList.add('selected');
  } else {
    alert('Oled valinud juba piisavalt kohti!');
  }
  
  if (selectedSeats.length === Number(seatCountInput.value)) {
    suggestSeats();
  }
}

function suggestSeats() {
  const suggestedSeats = [selectedSeats[0]];
  for (let i = 1; i < selectedSeats.length; i++) {
    suggestedSeats.push(selectedSeats[i] + 1);
  }
  
  suggestedSeats.forEach(seatNumber => {
    const seatElem = document.querySelector(`.seat:nth-child(${seatNumber})`);
    seatElem.classList.add('suggested');
  });
}

function confirmBooking() {
  if (selectedSeats.length < Number(seatCountInput.value)) {
    alert('Vali enne piisavalt kohti!');
  } else {
    alert(`Valisid järgmised kohad: ${selectedSeats.join(', ')}. Broneering kinnitatud!`);
    selectedSeats = [];
    
    const seats = document.querySelectorAll('.selected');
    seats.forEach(seat => {
      seat.classList.remove('selected');
      seat.classList.add('reserved');
      seat.removeEventListener('click');
    });
  }
}

function suggestSeats() {
    const totalSeats = 100; // Kinosaali koguarv kohti
    const selectedCount = Number(seatCountInput.value);
    const selectedMidPoint = Math.ceil(totalSeats / 2); // Ekraani keskpunkt
    const suggestedSeats = [];
  
    for (let i = 0; i < selectedCount; i++) {
      let suggestedSeat = selectedMidPoint + i - Math.floor(selectedCount / 2);
  
      // Kontrollime, et soovitatud koht jääb normaalsetesse piiridesse
      if(suggestedSeat < 1) {
        suggestedSeat = i + 1; // Kui eeldatud asukoht jääb ekraanist liiga vasakule, siis näitame ekraani paremat serva
      } else if(suggestedSeat > totalSeats) {
        suggestedSeat = totalSeats - selectedCount + i + 1;  // Kui eeldatud asukoht jääb ekraanist liiga paremale, siis näitame ekraani vasemat serva
      }
      
      suggestedSeats.push(suggestedSeat);
    }
  
    suggestedSeats.forEach(seatNumber => {
      const seatElem = document.querySelector(`.seat:nth-child(${seatNumber})`);
      seatElem.classList.add('suggested');
    });
  }




