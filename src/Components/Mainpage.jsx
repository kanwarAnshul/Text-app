import React, { useState } from 'react';
import "../Components/Style.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-copy-to-clipboard';
const Mainpage = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [setText,Text] = useState();
  const [isCopied,setisCopied] = useClipboard("text to copy")

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <div className="container">
        <div className="p-5 text-center bg-body-tertiary rounded-3" style={{
          height: "100vh",
          width: "100vw",
          marginLeft: "0px", // Fix the typo here
          padding: "85px",
          position: "absolute",
          left: "0px"
        }}>
          <h1 className="text-body-emphasis">Speech to Text</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Transforming Spoken Words into Written Text: Empowering Communication with Cutting-Edge Speech-to-Text Technology
          </p>
          <div onClick={()=>setText(transcript)} className="dynamic-text-area" contentEditable="true" placeholder="Start typing...">
       <p></p>
          <div className="d-inline-flex gap-2 mb-5">
            <button onClick={startListening} className="d-inline-flex align-items-center btn btn-success btn-lg px-4 rounded-pill" type="button">
              Start listening
            </button>
            <button onClick={SpeechRecognition.stopListening} className="btn btn-danger btn-lg px-4 rounded-pill" type="button">
              Stop listening
            </button>
            <button onClick={setisCopied} className="btn btn-primary btn-lg px-4 rounded-pill" type="button">was it Copied ?{isCopied? "yes":"Nope"}
              Copy clipboard
            </button>
            <button onClick={resetTranscript} className="btn btn-primary btn-lg px-4 rounded-pill" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mainpage;
