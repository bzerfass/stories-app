import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Questionnaire, Select } from '../../src/components'
import * as FormData from '../../src/constants/FormData.js'

function setup(propOverrides) {

    const props = Object.assign({
        id: 'phq-9-1',
        text: 'Testing 123',
        dropdown: FormData.FORM_DROPDOWN,
        actions: {
          updateQuestion: expect.createSpy(),
        }
    }, propOverrides);


  const renderer = TestUtils.createRenderer()
  renderer.render(<Questionnaire {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Questionnaire', () => {
    it('should render container', () => {

      const { output, props } = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('question-item')

      const [ div, select ] = output.props.children;

      expect(div.type).toBe('div');
      expect(div.props.className).toBe('question-label')

      expect(select.type).toBe(Select);
      expect(select.props.className).toBe('question-dropdown');
      expect(select.props.name).toBe(props.id);

      select.props.children.forEach((item, i) => {
          expect(item).toBe(props.dropdown[i])
      });
    })
  })
})
