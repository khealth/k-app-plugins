var expect = require('chai').expect
const { PluginsRegistry } = require('../')

describe('Basic Plugins Resgitry', () => {
    
    it('Correctly register app title', () => {
        PluginsRegistry.registerPluginApp('my app', () => { }, { title: 'hello world' })
        expect(PluginsRegistry.getPluginApp('my app').metadata.title).to.equal('hello world')
    })
})


