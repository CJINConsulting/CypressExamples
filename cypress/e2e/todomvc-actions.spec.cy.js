/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('todo actions', () => {
    const todoPage = new TodoPage;

    beforeEach(() => {
        cy.setCookie('localToken', 'localTokenValue');
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

    it('should be able to edit a task', () => {
        cy.contains('clean your bedroom').dblclick()
        cy.get('.edit').clear().type('have a rest{enter}');
        cy.get('label').should('have.text', 'have a rest');
    })

    it('should be able to remove a task (using force)', () => {
        cy.get('.destroy').click({force: true});
        cy.get('.todo-list').should('not.have.descendants', 'li');
    })

    it('should be able to remove a task (using show)', () => {
        cy.get('.destroy').invoke('show');
        cy.get('.destroy').should('be.visible');
        cy.get('.destroy').click();
        cy.get('.todo-list').should('not.have.descendants', 'li');
    })

    it.skip('should be able to remove a task (using human click)', () => {
        cy.get('label').realHover();
        cy.get('.destroy').click();
    })

})