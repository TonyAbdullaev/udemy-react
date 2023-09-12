import React from 'react';
import Question from "./Question.jsx";

const Questions = ({questions, activeId, toggleQuestion}) => {

    return (
        <section className="container">
            <h3>Questions</h3>
            {
                questions.map((question) =>
                    <Question
                        key={question.id}
                        {...question}
                        activeId={activeId}
                        toggleQuestion={toggleQuestion}
                    />)
            }
        </section>
    );
};

export default Questions;