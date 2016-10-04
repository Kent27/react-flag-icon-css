// @flow
import CssModulesTransform from 'react-css-modules'
import { propTypes as tcombProps } from 'tcomb-react'
import type { default as ReactType } from 'react'
import typeof { default as ReactModule } from 'react'
import FlagIcon from './FlagIcon'
import styles from '../styles'
import { makeStyles, makeFlagIconOptions } from '../functions'
import { FlagIconPropsTypeTcomb } from '../types/tcomb'
import type { FlagIconOptionsType } from '../types/flow'


const FlagIconFactory = (React: ReactModule,
                         options?: FlagIconOptionsType) : ReactType.createElement => {
  const computedOptions = makeFlagIconOptions(options)

  const FlagIconComponent = FlagIcon(React, computedOptions)
  const FlagIconComponentComputed = Object.assign(FlagIconComponent, {
    propTypes: tcombProps(FlagIconPropsTypeTcomb)
  })
  const computedStyles = makeStyles(styles, options)
  const fnCssModules = CssModulesTransform(computedStyles, { allowMultiple: true })

  return computedOptions.useCssModules ?
            fnCssModules(FlagIconComponentComputed) : FlagIconComponentComputed
}

export default FlagIconFactory
