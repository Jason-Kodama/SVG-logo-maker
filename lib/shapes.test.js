const shapes = require('./shapes')
const index = require('../index')

describe('Shapes', () => {
    describe('render', () => {
        it('should set the shape', () => {
            const shape = new shapes.Circle
            expect(shapes.render()).toEqual('<circle cx="50" cy="50" r="50" />')
        })
    })
})