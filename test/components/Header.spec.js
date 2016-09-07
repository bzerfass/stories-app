import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../../src/components/Header.jsx'

function setup() {

  const renderer = TestUtils.createRenderer()
  renderer.render(<Header />)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('header')
      expect(output.props.className).toBe('header card')

      const [ h1, div ] = output.props.children

      expect(h1.type).toBe('h1')
      expect(h1.props.className).toBe('header-title')

      expect(div.type).toBe('div')
      expect(h1.props.className).toBe('header-title')
    })
  })
})
