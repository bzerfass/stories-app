/**
 * Question Reducer - alters individual question
 * @param  {object} state
 * @param  {object} action
 * @return {object}
 */
const question = (state, action) => {

    switch (action.type) {
        case 'ADD_QUESTION':

            if (Number(action.value) < 0) {
                return state;
            }
            return {
                id: action.id,
                value: parseInt(action.value)
            }

        case 'UPDATE_QUESTION':

            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                value: parseInt(action.value)
            })

        default:
            return state
    }
}


/**
 * Questions reducer - alters all questions
 * @param  {Array}  [state=[]]
 * @param  {object} action
 * @return {Array}
 */
const questions = (state = [], action) => {

  switch (action.type) {

    case 'UPDATE_QUESTION':

        if (!state.some((e) => e.id === action.id)) {
            action.type = 'ADD_QUESTION';
            return [...state, question(undefined, action)];
        }
        if (Number(action.value) < 0) {
            return state.filter((item) => item.id !== action.id);
        }
        return state.map(t =>
            question(t, action)
        );

    default:
      return state
  }
}

export default questions
