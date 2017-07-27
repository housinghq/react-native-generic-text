import React from 'react'
import PropTypes from 'prop-types'
import { Text, Platform } from 'react-native'

function GenericText ({
  font,
  weight,
  size,
  color,
  lineHeight,
  align,
  children
}) {
  const style = {
    fontFamily: font,
    fontWeight: weight,
    fontSize: size,
    color,
    lineHeight,
    textAlign: align
  }

  return <Text style={style}>{children}</Text>
}

GenericText.propTypes = {
  ...Text.propTypes,
  font: PropTypes.string,
  weight: PropTypes.oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]),
  size: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  align: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify'])
}

GenericText.defaultProps = {
  font: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  weight: 'normal',
  size: 14,
  color: 'black',
  lineHeight: 18,
  align: 'left',
  style: {
    includeFontPadding: false,
    textAlignVertical: 'center'
  }
}

export default GenericText
