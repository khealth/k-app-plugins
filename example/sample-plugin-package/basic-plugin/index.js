import React from 'react'
import { View, Text, Button } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { PluginsRegistry } from '../../../src'
import { BASIC_APP_NAME } from '../app-names'

class BasicApp extends React.Component {

    exitApp = () => {
        PluginsRegistry.exitPluginApp(BASIC_APP_NAME)
    }

    render() {
        const {parameters, name}  = this.props

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Basic plugin App</Text>
                <Text>Parmeters:</Text>
                <Text>{JSON.stringify(parameters, null, 2)}</Text>
                <Text>Store.name must be empty = &quot;{name}&quot;</Text>
                <Button
                    onPress={this.exitApp}
                    title="Exit App"
                ></Button>                
            </View>
        )
    }
}

BasicApp.propTypes = {
    parameters: PropTypes.object,
    name: PropTypes.string
}

function mapStateToProps(state) {
    const { name } = state
    return { name }
}

const BasicAppPimped = connect(mapStateToProps, null)(BasicApp)
export default BasicAppPimped