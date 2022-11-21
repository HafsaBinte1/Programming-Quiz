
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestions from '../AllQuestions/AllQuestions';
import './QuizeQuestions.css'

const QuizeQuestions = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data)
    return (
        <div>
            <h3 className='text-center topic-head mt-5 mb-3'>Quize of {quizes.data.name}</h3>
            <div className='box-container'>
                {
                    quizes.data.questions.map(quize => <AllQuestions key={quize.id} quize={quize}>
                        console.log(quize)
                    </AllQuestions>)

                }
            </div>

        </div>
    );
};

export default QuizeQuestions;