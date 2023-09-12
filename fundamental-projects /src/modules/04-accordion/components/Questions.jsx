import React from 'react';
import Question from "./Question.jsx";

const Questions = ({questions, toggleQuestion, activeId}) => {

    return (
        <section className="container">
            <h3>Questions</h3>
            {
                questions.map((question) =>
                    <Question
                        key={question.id}
                        {...question}
                        toggleQuestion={toggleQuestion}
                        activeId={activeId}
                    />)
            }
        </section>
    );
};

export default Questions;