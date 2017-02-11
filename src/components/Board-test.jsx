import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Board from './Board'

describe('<Board />', () => {
  it('renders correctly', () => {
    const OriginalBoard = Board.DecoratedComponent
    const identity = el => el
    const wrapper = shallow(
      <OriginalBoard connectDropTarget={identity} drop>
        {[]}
      </OriginalBoard>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with one child correctly', () => {
    const OriginalBoard = Board.DecoratedComponent
    const identity = el => el
    const wrapper = shallow(
      <OriginalBoard connectDropTarget={identity} drop>
        {[<span key="1">Fake</span>]}
      </OriginalBoard>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with multiple child correctly', () => {
    const OriginalBoard = Board.DecoratedComponent
    const identity = el => el
    const wrapper = shallow(
      <OriginalBoard connectDropTarget={identity} drop>
        {[
          <span key="1">Fake</span>,
          <span key="2">Fake</span>,
          <span key="3">Fake</span>,
        ]}
      </OriginalBoard>,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
