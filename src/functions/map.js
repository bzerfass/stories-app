import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import * as FormData from '../constants/FormData'


/**
 * Connects states to props
 * @param  {object} state
 * @return {object}
 */
export const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        score: state.score,
        results: state.results,
        therapist: state.therapist
    }
};

/**
 * Connects dispatch to props into application
 * @param  {object} dispatch
 * @return {object}
 */
export const mapDispatchToProps = (dispatch) => {
    return {
        form: FormData.FORM_INFO,
        actions: bindActionCreators(actions, dispatch)
    }
}
