// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll(".like-glyph");

function likeHeartCallbacks(e) {
  const like = e.target;
  mimicServerCall()
    .then(response => {
      alert("Server Notified!");
      alert(response);
      if (like.innerText == EMPTY_HEART){
        like.innerText = FULL_HEART
        like.style.color = 'red';
      }
      else if (like.innerText == FULL_HEART || false){
        like.innerText = EMPTY_HEART
        like.style.color = '';
      } 
    })
    .catch(error => {
      alert(`ERROR: ${error.message}`)
    });
}

for (const icon of likeHearts) {
  icon.addEventListener("click", likeHeartCallbacks);
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
