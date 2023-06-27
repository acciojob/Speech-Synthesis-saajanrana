// Your script here.
function startSpeaking()
   {
      const text = document.getElementByTagName('textarea').value;
      msg.text = text;
      voicesDropdown.value;
      msg.voice = speechSynthesis.getVoices().find(voice => voice.name == voicesDropdown);
	   const rate = parseFloat(options.value);
      msg.rate = rate;
	 const pitch = parseFloat(options.value);
      msg.pitch = pitch;
      speechSynthesis.speak(msg);
    }

	function stopSpeaking()
	{
      speechSynthesis.cancel();
    }
	speakButton.addEventListener('click', startSpeaking);
    stopButton.addEventListener('click', stopSpeaking);