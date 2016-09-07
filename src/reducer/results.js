import * as formData from '../constants/FormData'

const DEFAULT_RESULTS = {min: null, max: null, text: 'Answer All Questions'};


/**
 * Score reducer - reproduces score based off of questions evaluated
 * @param  {Number} [state=0]
 * @param  {object} action
 * @return {Number}
 */
export const score = (state = 0, action) => {

    switch (action.type) {

        case 'GET_SCORE':

            return action.input.map( item => item.value )
                .reduce( ( a, b ) => a + b, 0 );

        default:
            return state
    }

    return state
}

/**
 * Results reducer - gets the results from scale and score
 * @param  {object} [state=DEFAULT_RESULTS]
 * @param  {object} action
 * @return {object}
 */
export const results = (state = DEFAULT_RESULTS, action) => {

  switch (action.type) {

    case 'GET_RESULTS':
    
        let severity = DEFAULT_RESULTS;
        if (formData.FORM_INFO.length !== action.result.length) {
            return severity;
        }
        let results = action.result.map( item => item.value )
            .reduce( ( a, b ) => a + b, 0 );

        return formData.FORM_RESULTS.filter((item) => {
            return item.min <= results && item.max >= results
        }).shift();

    default:
      return state
  }
}
