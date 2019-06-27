import React from 'react'

const IsolatedAppNavigationOptions = {
    header: null
}

export default function PluginContainer(screenImporter) {
    const TheComponentGlobal = screenImporter()
    const wrapper = class extends React.PureComponent {
        constructor(props) {
            super(props)
        }

        render() {
            return <TheComponentGlobal parameters={this.props.navigation.state.params} />
        }
    }

    wrapper.navigationOptions = IsolatedAppNavigationOptions


    return wrapper
}