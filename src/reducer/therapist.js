/**
 * Therapist reducer - returns store therapists
 * @param  {string} [state=null]
 * @param  {object} action
 * @return {string} therapist
 */
const therapist = (state = null, action) => {

    switch (action.type) {
        case 'UPDATE_THERAPIST':

            return Number(action.id) >= 0 ? action.value : null

        default:
            return state
    }
}

export default therapist
