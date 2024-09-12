describe('Sprint', () => {
    // here go our tests
    beforeEach(() => {
        //code we want running before our tests run
        cy.visit('http://localhost:3000')
    });
    const pizzaBtn = () => cy.get('button[id=order-pizza]');
    const nameInput = () => cy.get('input[id=name-input');
    const submitBtn = () => cy.get('button[id=order-button]');
    


    it('Sanity test to make sure tests work', () => {
        expect (1 + 2).to.equal(3);
        //expect is an assertion, there can be many per test
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({})//not strict ==
        expect({}).to.eql({}); //strict ===
    });

    it('can submit form', () => {

            pizzaBtn().click()
            nameInput().type('Ashley')
            cy.get('[type=checkbox]').check()
            submitBtn().click()
    });


})