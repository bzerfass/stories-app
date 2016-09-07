import * as types from '../constants/ActionTypes'


/**
 * Updates Question state
 * @param  {int} id
 * @param  {string} value
 * @return {object}
 */
export function updateQuestion(id, value) {
    return {
        type: types.UPDATE_QUESTION,
        id,
        value
    }
}

/**
 * Get Active score from form
 * @param  {array} input
 * @return {object}
 */
export function getScore(input) {
    return {
        type: types.GET_SCORE,
        input
    }
}

/**
 * Get results from form
 * @param  {array} result
 * @return {object}
 */
export function getResults(result) {
    return {
        type: types.GET_RESULTS,
        result
    }
}

/**
 * Update Therapist state
 * @param  {int} id
 * @param  {string} value
 * @return {object}
 */
export function updateTherapist(id, value) {
    return {
        type: types.UPDATE_THERAPIST,
        id,
        value
    }
}
