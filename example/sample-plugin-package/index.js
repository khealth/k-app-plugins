import { PluginsRegistry } from '../../src'
import { BASIC_APP_NAME, NAV_APP_NAME } from './app-names'
import LazyLoadComponentProxy from './lazy-load-component-proxy'

// Gal: Be nice! lazy load your apps (alternatively just import them...but this would
// affect overall performance)
const BasicApp = LazyLoadComponentProxy(() =>
    import('./basic-plugin'),
)
const NavApp = LazyLoadComponentProxy(() =>
    import('./nav-app-plugin'),
)


PluginsRegistry.registerPluginApp(BASIC_APP_NAME, () => BasicApp, { title: 'Basic App' })
PluginsRegistry.registerPluginApp(NAV_APP_NAME, () => NavApp, { title: 'Nav App' })
