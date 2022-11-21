import React from 'react';
import './AllQuestions.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllQuestions = ({ quize }) => {

    const { id, question, options, } = quize
    const handleEyeBtn = () => {
        toast(quize.correctAnswer)
    }

    const rightAnswer = (e) => {
        // console.log(e.target)
        if (e.target.id == quize.correctAnswer) {
            console.log('correct')
            toast('Your Answer is Correct')

        }
        else {
            console.log('not Corrct')
            toast('Your answer is wrong!!!')
        }

    }

    return (
        <div>
            <div className='question-container'>
                <ToastContainer />

                <div className='questions-icon'>
                    <h4 className='heading'>Questions: {question}</h4>
                    <EyeIcon onClick={handleEyeBtn} className='text-dark eye-icon'></EyeIcon>
                </div>
                <div className='options'>
                    <div className='option-type d-flex'>

                        <input onChange={rightAnswer} type="radio" name="habib" id={options[0]} value='' />
                        <label htmlFor={options[0]}>{options[0]}</label>
                    </div>


                    <div className='option-type d-flex'>
                        <input onChange={rightAnswer} type="radio" name="habib" id={options[1]} value='' />
                        <label htmlFor={options[1]}>{options[1]}</label>
                    </div>


                    <div className='option-type d-flex'>
                        <input onChange={rightAnswer} type="radio" name="habib" id={options[2]} value='' />
                        <label htmlFor={options[2]}>{options[2]}</label>
                    </div>


                    <div className='option-type d-flex'>
                        <input onChange={rightAnswer} type="radio" name="habib" id={options[3]} value='' />
                        <label htmlFor={options[3]}>{options[3]}</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllQuestions;