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

    it('should chain expects within a "then" method block, with no retry', () => {
        cy.get('.todo-list > *')
        .then(item => {
            console.log(item.length)
            if (item.length === 3) {
                expect(item[0]).to.contain.text('learn cypress');
                expect(item[1]).to.contain.text('use js');
                expect(item[2]).to.contain.text('clean your bedroom');
            } else {
                throw new Error('Not enough elements!')
            }
        })
    });

    it('should chain expects within a "should" method block, with a retry', () => {
        cy.get('.todo-list > *')
        .should(item => {
            console.log(item.length)
            if (item.length === 3) {
                expect(item[0]).to.contain.text('learn cypress');
                expect(item[1]).to.contain.text('use js');
                expect(item[2]).to.contain.text('clean your bedroom');
            } else {
                throw new Error('Not enough elements!')
            }
        })
    });

})
