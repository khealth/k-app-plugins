import { PluginsRegsitry } from '../'

describe('Basic Plugins Resgitry', () => {
    PluginsRegsitry.registerPluginApp('my app', () => { }, { title: 'hello world' })
    
    it('should work', () => {
        expect(PluginsRegsitry.getPluginApp('my app').title).to.equal('hello world')
    })
})


