/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('todo filtering', () => {
    const todoPage = new TodoPage;

    beforeEach(() => {
        todoPage.navigate();
        todoPage.addTodo('clean your bedroom');
        todoPage.addTodo('use js');
        todoPage.addTodo('learn cypress');
    });

    it('add a class to the list item element to simulate completion', () => {
        cy.get('.todo-list')
        .children()
        .eq(0)
        .invoke('addClass', 'completed');
    });

    it('trigger an event on a list item to show the remove element', () => {
        cy.get('.todo-list')
        .children()
        .eq(0)
        .trigger('dblclick');

    });

})
