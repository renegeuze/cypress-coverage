context("Required two factor authentication", () => {
    it("Can see footer text", () => {
        cy.visit("/");

        cy.get('footer').should('contain', 'Footer');
    });
});
