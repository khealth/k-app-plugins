import { PluginsRegistry } from '../../src'
import { BASIC_APP_NAME, NAV_APP_NAME, STATE_KEY } from './app-names'
import LazyLoadComponentProxy from './lazy-load-component-proxy'

// Gal: Be nice! lazy load your apps (alternatively just import them...but this would
// affect overall performance)
const BasicApp = LazyLoadComponentProxy(() =>
    import('./basic-plugin'),
)
const NavApp = LazyLoadComponentProxy(() =>
    import('./nav-app-plugin'),
)


PluginsRegistry.registerPlugin(BASIC_APP_NAME, () => BasicApp, { menu: { title: 'Basic App' }, stateKey: STATE_KEY } )
PluginsRegistry.registerPlugin(NAV_APP_NAME, () => NavApp, { menu: { title: 'Nav App' }, stateKey: STATE_KEY })
