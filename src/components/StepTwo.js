import React from "react" ;


const StepTwo = ({name , email , password, setStep}) => {
    return(
        <>
            <div>Result</div>

            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>password : {password}</p>
            <button onClick={() => {
                setStep(1)
            }

            } >
                Back to Sign In
            </button>
        </>
    )
}

export default StepTwo ;