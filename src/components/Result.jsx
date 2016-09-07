import React, { Component, PropTypes } from 'react';
import { FORM_DROPDOWN, FORM_RESULTS } from '../constants/FormData';
import Therapist from './Therapist.jsx'


/**
 * Result Component
 * props: score, results, actions.getScore, actions.getResults
 * components: Therapists
 */
class Result extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		this.props.actions.getScore(nextProps.questions);
		this.props.actions.getResults(nextProps.questions);
	}

	getTotalScore() {
		let { form } = this.props;
		return form.length * ( FORM_DROPDOWN.length - 1 );
	}

	render() {
		let totalScore = this.getTotalScore();
		let { score, results, scale, actions, therapist } = this.props;

		return (
			<div className="result-container">
				<div className="score card">
					<div className="score-total">
						<div className="score-total-item active">
							{ score }
						</div>
						<div className="score-total-item total">
							{ totalScore }
						</div>
					</div>
					<div className="score-result">{ results.text }</div>

				</div>
				<div className="scale">
					<div className="scale-item">Despression Severity:</div>
					{scale.map((item, index) => {
						return <div className="scale-item" key={index}>{item.text} ({item.min} - {item.max})</div>
					})}
				</div>
				{ results.min >= 10 ? <Therapist actions={actions} therapist={therapist}/> : false }
			</div>
		)
	}
}


Result.defaultProps = {
	scale: FORM_RESULTS,
}
Result.propTypes = {
	score: PropTypes.number.isRequired,
	results: PropTypes.object.isRequired
};


export default Result
