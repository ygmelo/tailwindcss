import _ from 'lodash'
import nameClass from '../util/nameClass'

export default function () {
  return function ({ addUtilities, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('ringOffsetWidth'), (value, modifier) => {
        return [
          nameClass('ring-offset', modifier),
          {
            '--tw-ring-offset-width': value,
          },
        ]
      })
    )
    addUtilities(utilities, variants('ringOffsetWidth'))
  }
}
