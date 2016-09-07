import expect from 'expect';
import { score, results } from '../../src/reducer/results'
import * as formData from '../../src/constants/FormData'
import * as types from '../../src/constants/ActionTypes'

describe('score reducer', () =>{

    it('should handle initital state', () => {
        expect(
            score(undefined, {})
        ).toEqual(0)
    })

    it('should handle GET_SCORE', () => {
        expect(
            score(0, {
                type: types.GET_SCORE,
                input: [{id: 'some_id', value: 2}]
            })
        ).toEqual(2)

        expect(
            score(2, {
                type: types.GET_SCORE,
                input: [{id: 'some_id', value: 2}, {id: 'some_id', value: 3}]
            })
        ).toEqual(5)
    })

})

describe('result reducer', () =>{

    it('should handle initital state', () => {
        expect(
            results(undefined, {})
        ).toEqual({
            min: null,
            max: null,
            text: 'Answer All Questions'
        })
    })

    it('should handle GET_RESULTS', () => {
        expect(
            results(0, {
                type: types.GET_RESULTS,
                result: [{id: 'some_id', value: 2}]
            })
        ).toEqual({
            min: null,
            max: null,
            text: 'Answer All Questions'
        })

        expect(
            results({min: null, max: null, text: 'Answer All Questions'}, {
                type: types.GET_RESULTS,
                result: [
                    {id: 'some_id_1', value: 2},
                    {id: 'some_id_2', value: 2},
                    {id: 'some_id_3', value: 2},
                    {id: 'some_id_4', value: 2},
                    {id: 'some_id_5', value: 2},
                    {id: 'some_id_6', value: 2},
                    {id: 'some_id_7', value: 2},
                    {id: 'some_id_8', value: 2},
                    {id: 'some_id_9', value: 2}
                ]
            })
        ).toEqual({
            min: 15,
            max: 19,
            text: 'Moderately Severe'
        })
    })
})
