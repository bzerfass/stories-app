import React, { Component, PropTypes } from 'react';
import { FORM_THERAPISTS } from '../constants/FormData'
import Select from './Select.jsx';

/**
 * Therapists Component
 * props: therapist, dropdown
 * components: Select
 */
class Therapist extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(e) {
		let { value, selectedIndex } = e.target;
		this.id = value;
		this.text = e.nativeEvent.target[selectedIndex].text;
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.actions.updateTherapist(this.id, this.text);
    }

	render() {
		let { dropdown, therapist } = this.props;
		return (
			<div className="therapist-container card">
				{ !therapist ?
					<form onSubmit={e => this.handleSubmit(e)}>
						<div className="question-item">
		                	<div className="question-label">Please select one of the therapist:</div>
							<Select className="question-dropdown" name="therapist-dropdown" onChange={e => this.handleChange(e)}>
								{ dropdown }
							</Select>
						</div>
						<div className="question-submit">
							<button type="submit">Submit form</button>
						</div>
					</form>
				: <div className="therapist-selected">
					<div className="therapist-selected-heading">
						Thanks for your submission!
					</div>
					<div className="therapist-selected-name">You have selected { therapist}.</div>
				  </div>}
			</div>
		)
	}
}

Therapist.defaultProps = {
	dropdown: FORM_THERAPISTS,
	therapist: null,
};
Therapist.propTypes = {
	dropdown: PropTypes.array,
	therapist: PropTypes.string
};


export default Therapist
