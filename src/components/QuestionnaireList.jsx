import React, { Component, PropTypes } from 'react'
import Questionnaire from './Questionnaire.jsx'


/**
 * QuestionnaireList Component
 * props: form
 * components: Questionnaire
 */
class QuestionnaireList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { form, actions } = this.props;
        return (
            <div className="question-container card">
                {form.map((item, index) => {
                    return <Questionnaire key={index} actions={actions} {...item} />
                })}
            </div>
        )
    }
}

QuestionnaireList.propTypes = {
    form: PropTypes.array.isRequired,
}

export default QuestionnaireList
