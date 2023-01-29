/// <reference types="cypress" />

describe('todo filtering', () => {

    beforeEach(() => {
        cy.visit('https://todomvc-app-for-testing.surge.sh');
        cy.get('.new-todo').type('clean your bedroom{enter}');
        cy.get('.new-todo').type('use js{enter}');
        cy.get('.new-todo').type('learn cypress{enter}');

        cy.get('.todo-list li:nth-child(2) .toggle').click();

    });

    it('should filter "active" todos', () => {
        cy.contains('Active').click();
        cy.get('.todo-list li').should('have.length', 2);
    });

    it('should filter "completed" todos', () => {
        cy.contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1);
    });

    it('should filter "All" todos', () => {
        cy.contains('All').click();
        cy.get('.todo-list li').should('have.length', 2);
    });

})