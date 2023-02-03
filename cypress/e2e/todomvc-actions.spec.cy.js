/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('todo actions', () => {
    const todoPage = new TodoPage;

    beforeEach(() => {
        todoPage.navigate();
        todoPage.addTodo('clean your bedroom');
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