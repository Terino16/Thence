import { useState } from 'react';
import Heading from "../components/Heading";
import Logo from "../assets/Logo.svg";


const Projects = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email });
        setIsSubmitted(true);

       
        setTimeout(() => {
          window.location.href=("/")
        }, 5000);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
        setIsEmailValid(isValid);
    };

    const isFormValid = name.trim() !== '' && isEmailValid;

    return (
        <div className="p-8">
            <img src={Logo} alt="Logo" />
            <div className="mt-12 flex flex-col items-center">
            {!isSubmitted ? (
              <>
                <Heading title="Registration Form" message="Start your Success Journey here!" />
                    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 w-full my-12">
                        <input
                            placeholder="Enter your Name"
                            className="p-4 bg-slate-200 rounded-full w-1/3"
                            value={name}
                            type='text'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Enter your Email"
                            className={`p-4 bg-slate-200 rounded-full w-1/3 ${!isEmailValid ? 'border-red-500' : ''}`}
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {!isEmailValid && <p className="text-red-500">Please enter a valid email address.</p>}
                        <button
                            type="submit"
                            className={`p-4 bg-slate-200 rounded-full w-1/3 ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                            disabled={!isFormValid}
                        >
                            Submit
                        </button>
                    </form>
                    </>
                ) : (
                    <div className='space-y-4'>
                         <Heading title="Successfully Submitted" message="Congratulations" />
                         <p className='text-2xl text-center text-gray-500'>Your message has been successfully submitted to us. We Will validate your information and get back to you. </p>
                        <p className="text-black text-2xl absolute bottom-8">Redirecting to Home...</p>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Projects;
