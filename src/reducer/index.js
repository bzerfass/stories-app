import { combineReducers } from 'redux'
import questions from './questions'
import { score, results } from './results'
import therapist from './therapist'

/**
 * Combines all reduces into one global reducer
 */
const questionnaire = combineReducers({
  questions,
  score,
  results,
  therapist
})

export default questionnaire
