import React from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"

class OtherScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Text>Other Screen</Text>
                <Text>Store.name should be not empty = &quot;{this.props.name}&quot;</Text>
            </View>
        )
    }
}

OtherScreen.propTypes = {
    name: PropTypes.string
}

function mapStateToProps(state) {
    const { name } = state
    return { name }
}

export default connect(mapStateToProps, null)(OtherScreen)