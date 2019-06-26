let _navInstance = null

export function saveNavigationInstance(navInstance) {
    _navInstance = navInstance
}

export function getInstance() {
    return _navInstance
}