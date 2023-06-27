 const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  // Fetch and load available voices
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en')) // Filter for English voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  // Set the voice for speech synthesis
  function setVoice() {
    const selectedVoice = voices.find(voice => voice.name === voicesDropdown.value);
    msg.voice = selectedVoice;
  }

  // Toggle speaking
  function toggleSpeech() {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    } else {
      setVoice();
      speechSynthesis.speak(msg);
    }
  }

  // Set speech options when the rate, pitch, or text changes
  function setSpeechOptions() {
    msg.rate = options[0].value;
    msg.pitch = options[1].value;
    msg.text = options[2].value;
  }

  // Event listeners
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setSpeechOptions));
  speakButton.addEventListener('click', toggleSpeech);
  stopButton.addEventListener('click', () => speechSynthesis.cancel());

  // Initialize
  populateVoices();