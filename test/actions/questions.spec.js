import expect from 'expect';
import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions'

describe('actions', () =>{

    it('updateQuestion should create UPDATE_QUESTION action', () => {
        expect(actions.updateQuestion('some_id', 1)).toEqual({
            type: types.UPDATE_QUESTION,
            id: 'some_id',
            value: 1
        })
    })

    it('getScore should create GET_SCORE action', () => {
        expect(actions.getScore([{id: "some_id", value: 1}])).toEqual({
            type: types.GET_SCORE,
            input: [{id: "some_id", value: 1}]
        })
    })

    it('getResults should create GET_RESULTS action', () => {
        expect(actions.getResults([{id: "some_id", value: 2}])).toEqual({
            type: types.GET_RESULTS,
            result: [{id: "some_id", value: 2}]
        })
    })

    it('updateTherapist should create UPDATE_THERAPIST action', () => {
        expect(actions.updateTherapist('some_id', "John Doe")).toEqual({
            type: types.UPDATE_THERAPIST,
            id: 'some_id',
            value: 'John Doe'
        })
    })
})
