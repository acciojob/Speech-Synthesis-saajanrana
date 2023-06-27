const text = document.querySelector('textarea');
const start = document.getElementById('speak');
const stop = document.getElementById('stop');

let utterance = new SpeechSynthesisUtterance(text.value);

start.addEventListener('click', () => {
	window.speechSynthesis.speak(utterance); 
});

stop.addEventListener('click', () => {
	window.speechSynthesis.cancel()
});