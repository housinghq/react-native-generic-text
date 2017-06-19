import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import assign from 'assign-all'
import GenericText from '../components'

const { describe, it } = global

describe('<GenericText />', () => {
  it('should render text content', () => {
    const wrapper = shallow(<GenericText>Hello World</GenericText>)
    expect(wrapper.contains('Hello World')).to.equal(true)
  })

  it('should have correct styles', () => {
    const wrapper = shallow(
      <GenericText size={18} color='green'>Hello World</GenericText>
    )

    const expected = {
      fontFamily: 'System',
      fontWeight: 'normal',
      fontSize: 18,
      color: 'green',
      lineHeight: 18,
      textAlign: 'left',
      includeFontPadding: false,
      textAlignVertical: 'center'
    }

    expect(assign(wrapper.find(Text).prop('style'))).to.deep.equal(expected)
  })
})
