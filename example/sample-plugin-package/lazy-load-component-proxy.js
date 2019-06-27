import React from 'react'
import PropTypes from 'prop-types'

// Treatment for a seeming babel issue with async import
const asyncModule = theModule =>
    theModule.default && theModule.default.__esModule
        ? theModule.default
        : theModule

/**
 * Lazy load a component. note that statics are not hoisted! so if required...don't use.
 * importPromiseFunc should be something of ()=> import('lalallala'). and the component should be default
 * @param {*} importPromiseFunc
 */

export default function LazyLoadComponentProxy(importPromiseFunc) {
    let TheComponentGlobal = null // given that imports may do not actually rerun this may be unecessary
    const wrapped = class extends React.PureComponent {
        constructor(props) {
            super(props)
            this.state = { TheComponent: TheComponentGlobal }
        }

        componentDidMount() {
            if (!this.state.TheComponent) {
                importPromiseFunc().then(theModule => {
                    if (this.unmounted) {
                        return
                    }

                    const TheComponent = asyncModule(theModule).default

                    // assuming default, so setting the module
                    this.setState({ TheComponent })
                    TheComponentGlobal = TheComponent
                })
            }
        }

        componentWillUnmount() {
            this.unmounted = true
        }

        render() {
            const { renderPlaceholder, ...rest } = this.props
            const { TheComponent } = this.state
            if (!TheComponent) {
                if (renderPlaceholder) {
                    return renderPlaceholder(rest)
                } else {
                    return null
                }
            }
            return <TheComponent {...rest} />
        }
    }

    wrapped.propTypes = {
        // you can use this to draw something in place
        renderPlaceholder: PropTypes.func,
    }

    // no hoisting of statics...cause that would defeat the purpose
    return wrapped
}
