import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Constructor from './Constructor'
import Board from './Board'

describe('<Board />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Constructor>
        <Board />
      </Constructor>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with one child correctly', () => {
    const wrapper = shallow(
      <Constructor>
        <Board>
          <span>Fake</span>
        </Board>
      </Constructor>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with multiple child correctly', () => {
    const wrapper = shallow(
      <Constructor>
        <Board>
          <span>Fake</span>
          <span>Fake</span>
          <span>Fake</span>
        </Board>
      </Constructor>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
