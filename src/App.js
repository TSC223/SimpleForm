import React,{useState} from "react" ;
import "./App.css";
import Form from "./components/Form" ;
import Footer from "./components/Footer" ;
import StepTwo from "./components/StepTwo" ;


function App() {
  const [confirmpass, setConfirmpass ] = useState("") ;
  const [name, setName ] = useState("") ;
  const [email, setEmail ] = useState("") ;
  const [password, setPassword ] = useState("") ;  

 const [ step, setStep] = useState(1);
  return (
    <>
    { step === 1 ? (
       
        <Form name={name} setName={setName} 
                  email={email} setEmail={setEmail} 
                  password={password} setPassword={setPassword}
                  confirmpass={confirmpass} setConfirmpass={setConfirmpass}
                  step={step} setStep={setStep}  
            />
    ):(
      
        <StepTwo 
        name={name} 
        email={email} 
        password={password} 
        setStep={setStep} />

    ) }
    <div>    <Footer/>   </div>
    </>
  );
}

export default App;