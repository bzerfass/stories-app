import { createStore } from 'redux'
import Questionnaire from '../reducer'


/**
 * Initialize store
 */
let store = createStore(Questionnaire);

export default store
