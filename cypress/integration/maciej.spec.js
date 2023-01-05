const cypress = require("cypress")

describe('contactBook',()=>{
    const email='manikbiradar365@gmail.com'
    const pass ='Admin@123'

    beforeEach( () => {
        cy.visit('http://localhost:4200')
    })
    it('has a title', () => {
        cy.contains('H');
    })
})