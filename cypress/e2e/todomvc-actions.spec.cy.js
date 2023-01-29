/// <reference types="cypress" />

describe('todo actions', () => {

    beforeEach(() => {
        cy.visit('https://todomvc-app-for-testing.surge.sh');
        cy.get('.new-todo').type('clean your bedroom{enter}');
        cy.get('label').should('have.text', 'clean your bedroom');
        cy.get('.toggle').should('not.be.checked', 'clean your bedroom');
    });

    it('should be able to complete a task', () => {
        cy.get('.toggle').click();
        cy.get('.toggle').should('be.checked', 'clean your bedroom');
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    });

    it('should be able to clear completed tasks', () => {
        cy.get('.toggle').click();
        cy.get('.toggle').should('be.checked', 'clean your bedroom');
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
        cy.contains('Clear completed').click();
        cy.get('.todo-list').should('not.have.descendants', 'li');
    })

})