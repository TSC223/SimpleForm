import React from "react" ;


const StepTwo = ({name , email , password, setStep}) => {
    return(
        <>
        <section className="BODYsection">
        
            <div className="pageTitle">Merci pour la visite !
            <p style={{color:"white",fontSize:"12px",textAlign:"center"}}>Votre compte vient d'être créer</p>
            </div>
                <div className="ficheUSer">
                        <p>name : {name}</p>
                        <p>email : {email}</p>
                        <p>password : {password}</p>

                </div>

            

            <button className="goBack" onClick={() => {
                setStep(1)
            }

            } >
                Back to Sign In
            </button>


        </section>
        </>
    )
}

export default StepTwo ;