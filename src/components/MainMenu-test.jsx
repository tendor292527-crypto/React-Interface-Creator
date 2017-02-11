import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import MainMenu from './MainMenu'

describe('<MainMenu />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainMenu onClickMenuItem={() => {}} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
