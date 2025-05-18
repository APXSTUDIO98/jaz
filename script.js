var btn = document.getElementById('surpriseBtn');
var giftClosed = document.getElementById('giftClosed');
var surprise = document.getElementById('surprise');
var confettiContainer = document.getElementById('confetti');
var body = document.body;

btn.onclick = function() {
  giftClosed.style.display = 'none';
  surprise.classList.remove('hidden');
  btn.style.display = 'none';
  startConfetti(); // Trigger confetti after the gift is opened
  changeBackground(); // Change background color slowly after gift is opened
};

function createConfettiPiece() {
  var piece = document.createElement('div');
  piece.className = 'confetti-piece';
  piece.style.left = Math.random() * 100 + '%';
  piece.style.setProperty('--color', getRandomColor());
  piece.style.animationDuration = Math.random() * 2 + 3 + 's';
  confettiContainer.appendChild(piece);

  setTimeout(() => piece.remove(), 5000);
}

function getRandomColor() {
  var colors = ['#ff6f61', '#ffb74d', '#4caf50', '#1e88e5', '#e040fb'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function startConfetti() {
  setInterval(createConfettiPiece, 100);
}

// Function to change the background color gradually after the gift is opened
function changeBackground() {
  setTimeout(function() {
    body.style.backgroundColor = 'rgb(35, 194, 21)'; // New background color after gift opens
  }, 1000); // Delay the color change by 1 second for smoother transition
}
