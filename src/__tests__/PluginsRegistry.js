var expect = require('chai').expect
const { PluginsRegsitry } = require('../')

describe('Basic Plugins Resgitry', () => {
    
    it('Correctly register app title', () => {
        PluginsRegsitry.registerPluginApp('my app', () => { }, { title: 'hello world' })
        expect(PluginsRegsitry.getPluginApp('my app').metadata.title).to.equal('hello world')
    })
})


