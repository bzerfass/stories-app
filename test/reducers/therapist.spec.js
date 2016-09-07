import expect from 'expect';
import therapist from '../../src/reducer/therapist'
import * as types from '../../src/constants/ActionTypes'

describe('thereapist reducers', () =>{

    it('should handle initital state', () => {
        expect(
            therapist(undefined, {})
        ).toEqual(null)
    })

    it('should handle UPDATE_THERAPIST', () => {
        expect(
            therapist(null, {
                type: types.UPDATE_THERAPIST,
                id: 1,
                value: 'John Doe'
            })
        ).toEqual('John Doe')

        expect(
            therapist('John Doe', {
                type: types.UPDATE_THERAPIST,
                id: 2,
                value: 'Jane Doe'
            })
        ).toEqual('Jane Doe')
    })

})
