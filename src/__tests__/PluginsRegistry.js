var expect = require('chai').expect
const { PluginsRegistry } = require('../')

describe('Basic Plugins Resgitry', () => {
    
    it('Correctly register app title', () => {
        PluginsRegistry.registerPlugin('my app', () => { }, { menu: { title: 'hello world' } } )
        expect(PluginsRegistry.getPlugin('my app').metadata.menu.title).to.equal('hello world')
    })
})


