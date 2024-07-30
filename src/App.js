import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

function App() {

  const [copiedText,setCopiedText] = useState();

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language:'en-IN' })
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  const [isCopied, setCopied] = useClipboard(copiedText);

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
        <h1>Hello Amit</h1>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="main-content" onClick={()=>setCopiedText(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied?'Copied!':'Copy to clipboard'}
        </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>

      </div>
    </>
    
  );
}

export default App;
