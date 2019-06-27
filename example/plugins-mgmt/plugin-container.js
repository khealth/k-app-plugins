import React from 'react'
import { Provider } from 'react-redux'
import { isolationStore } from './isolation-store'

const IsolatedAppNavigationOptions = {
    header: null
}

function PluginContainer(screenImporter) {
    const TheComponentGlobal = screenImporter()
    const wrapper = class extends React.PureComponent {
        constructor(props) {
            super(props)
        }

        render() {
            return (<Provider store={isolationStore}>
                <TheComponentGlobal parameters={this.props.navigation.state.params} />
            </Provider>)
        }
    }

    wrapper.navigationOptions = IsolatedAppNavigationOptions


    return wrapper
}

export default PluginContainer

/**
 * const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
 */