
describe('open Google home page', () =>  {
    beforeEach(() =>  {
        cy.visit('https://www.google.com/');
    });

    it('The title of the home page should be Google', () => {
        expect(cy.title().should('eq', 'Google'));
    });

    it('should exist the button Nu bekijken', () => {
        expect(cy.get('.APsr1')).to.exist;
    });

    it('should show Rabobank - Particulieren on search for Rabobank',()=>{
        cy.get('.gLFyf').type('niranjan rath');
        cy.get('.aajZCb > .VlcLAe > center > [value="Google zoeken"]').click().then(()=>{
             expect(cy.get('[href="https://www.facebook.com/public/Niranjan-Rath"] > .LC20lb')).to.exist;
        });
    });
});