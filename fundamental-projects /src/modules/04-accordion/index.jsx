import React, {useState} from 'react';
import questionsData from "./questions.js";
import Questions from "./components/AlternativeWay/Questions.jsx";
// import Questions from "./components/Questions.jsx";
import "./assets/index.css"
const Accordion = () => {
    const [questions, setQuestions] = useState(questionsData)
    const [activeId, setActiveId] = useState(null);

    const toggleQuestion = (id) => {
        if (id !== activeId) {
            return setActiveId(id);
        }
        return setActiveId(null)
    }

    return (
        <>
            <div className='title' style={{marginTop: "5rem"}}>
                <h2>Questions</h2>
                <div className='title-underline'></div>
            </div>
            <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
        </>
    );
};

export default Accordion;