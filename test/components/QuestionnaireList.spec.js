import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { QuestionnaireList, Questionnaire } from '../../src/components'
import * as FormData from '../../src/constants/FormData.js'

function setup(propOverrides) {

    const props = Object.assign({
        form: FormData.FORM_INFO,
        actions: {
          updateQuestion: expect.createSpy(),
          getScore: expect.createSpy(),
          getResults: expect.createSpy(),
          updateTherapist: expect.createSpy(),
        }
    }, propOverrides);


  const renderer = TestUtils.createRenderer()
  renderer.render(<QuestionnaireList {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('QuestionnaireList', () => {
    it('should render container', () => {

      const { output } = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('question-container card')

      describe('question list', () => {
          it('should render', () => {
            const { output, props } = setup()
            output.props.children.forEach((item, i) => {
                expect(item.type).toBe(Questionnaire)
                expect(item.props.id).toBe(props.form[i].id)
                expect(item.props.text).toBe(props.form[i].text)
                expect(item.props.actions).toBe(props.actions)
            });
          })
      })
    })
  })
})
