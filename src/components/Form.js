import React, {useState} from "react" ;

const Form = (props) => {

const [errorMessage, setErrorMessage ] = useState("") ;
const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpass,
    setConfirmpass,
    setStep,
} = props ;   
  

    return(
    <>
        <div className="title">
          <h1> My <span>F</span>orm</h1>
              <p>Create Accompte</p>
        </div>



         <form  className="form_base"
      onSubmit={(event) => {
        event.preventDefault() ;
        
        if(confirmpass !== password){    
           
          setErrorMessage("Les mots de passe ne sont pas identiques ")
          }else{
              setStep(2) ;
          // alert(name + email + password) ;
          
          }
      }}>
            <input type="text" 
            value={name} 
            onChange={ event =>{
            setName(event.target.value) ;
        }}
        placeholder="Nom" />
        <br />
            <input type="text" 
            value={email} 
            onChange={ event =>{
            setEmail(event.target.value) ;
        }}
        placeholder="Email" />
        <br />
            <input type="password" 
            value={password} 
            onChange={ event =>{
            setPassword(event.target.value) ;
        }}
        placeholder="Mot de passe" />
        <br />
        <input type="password" 
            value={confirmpass} 
            onChange={ event =>{
          setConfirmpass(event.target.value) ;
        }}
        placeholder="Confirmer le mot de passe" />
        <br />
        <button className="button" type="submit" onClilck={() => {
        }}>
          Valider
        </button>
        
        <p style={{color:"red"}}> {errorMessage} </p>
      </form>


    </>
        
            )
}
export default Form ;