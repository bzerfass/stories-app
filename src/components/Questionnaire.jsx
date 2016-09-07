import React, { Component, PropTypes } from 'react'
import Select from './Select.jsx'
import { FORM_DROPDOWN } from '../constants/FormData'


/**
 * Questionnaire Component
 * props: id, text, dropdown, actions.updateQuestion
 * components: Select
 */
class Questionnaire extends Component  {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.props.actions.updateQuestion(name, value);
    }

    render() {
        let { id, text, dropdown } = this.props;
        return (
            <div className="question-item">
                <div className="question-label">{ text } </div>
                <Select className="question-dropdown" name={id} onChange={e => this.handleChange(e)}>
                    { dropdown }
                </Select>
            </div>
        )
    }
}

Questionnaire.defaultProps = {
	dropdown: FORM_DROPDOWN,
};
Questionnaire.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
	dropdown: React.PropTypes.array,
};

export default Questionnaire
