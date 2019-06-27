import { NavigationActions } from 'react-navigation'

let _navigator = null

export function saveNavigationInstance(navigator) {
    _navigator = navigator
}

export function getInstance() {
    return _navigator
}


export function dispatch(action) {
    _navigator.dispatch(action)
}

export function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

export function navigateEx(options) {
    dispatch(
        NavigationActions.navigate(options),
    )
}

export function navigate(routeName, params) {
    navigateEx({routeName, params})
}

export function back(options) {
    dispatch(NavigationActions.back(options))
}

function _getCurrentStackState(state) {
    if (!state || !state.routes) {
        return null
    }
    const childRoute = state.routes[state.index]
    // dive into nested navigators, if they have routes
    if (childRoute.routes) {
        return _getCurrentStackState(childRoute)
    }
    // if child has not route...then im the curret stack...go for it
    return state
}

export function getCurrentStackState() {
    return _getCurrentStackState(_navigator.state.nav)
}