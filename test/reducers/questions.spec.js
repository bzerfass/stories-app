import expect from 'expect';
import questions from '../../src/reducer/questions'
import * as types from '../../src/constants/ActionTypes'

describe('question reducers', () =>{

    it('should handle initital state', () => {
        expect(
            questions(undefined, {})
        ).toEqual([])
    })

    it('should handle UPDATE_QUESTION', () => {
        expect(
            questions([],{
                type: types.UPDATE_QUESTION,
                id: 'some_id',
                value: 2
            })
        ).toEqual([
            {
                id: 'some_id',
                value: 2
            }
        ])

        expect(
            questions([{id: 'some_id', value: 2}], {
                type: types.UPDATE_QUESTION,
                id: 'some_id_2',
                value: 3
            })
        ).toEqual([
            {
                id: 'some_id',
                value: 2
            },
            {
                id: 'some_id_2',
                value: 3
            }
        ])

        expect(
            questions([{id: 'some_id', value: 2}], {
                type: types.UPDATE_QUESTION,
                id: 'some_id',
                value: 3
            })
        ).toEqual([
            {
                id: 'some_id',
                value: 3
            }
        ])

        expect(
            questions([{id: 'some_id', value: 3}], {
                type: types.UPDATE_QUESTION,
                id: 'some_id',
                value: -1
            })
        ).toEqual([])
    })
})
