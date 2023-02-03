/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('todo filtering', () => {
    const todoPage = new TodoPage;

    beforeEach(() => {
        todoPage.navigate();
        todoPage.addTodo('clean your bedroom');
        todoPage.addTodo('use js');
        todoPage.addTodo('learn cypress');
        todoPage.clickTodoByIndex(2);
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
        cy.get('.todo-list li').should('have.length', 3);
    });

})
