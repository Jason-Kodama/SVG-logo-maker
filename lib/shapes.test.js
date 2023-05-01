const shapes = require('./shapes')

describe('Shapes', () => {
    describe('render', () => {
        it('assigns circle shapecolor', () => {
            const shape = new shapes.Circle
            expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="50" fill=${this.shapecolor} />`)
        })
    })
})
describe('Shapes', () => {
    describe('render', () => {
        it('assigns triangle shapecolor', () => {
            const shape = new shapes.Triangle
            expect(shape.render()).toEqual(`<polygon points="50 0, 100 100, 0 100" fill=${this.shapecolor} />`)
        })
    })
})
describe('Shapes', () => {
    describe('render', () => {
        it('assigns square shapecolor', () => {
            const shape = new shapes.Square
            expect(shape.render()).toEqual(`<rect width="100" height="100" fill=${this.shapecolor} />`)
        })
    })
})