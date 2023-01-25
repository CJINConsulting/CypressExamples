/// <reference types="cypress" />

it('should navigate to the todomvc homepage', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
});

it('should be able to add a new to-do to the list', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo').type('clean your bedroom{enter}');
})  

it('should be able to add a new to-do after a short delay', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh?delay-new-todo=4001');
    cy.get('.new-todo', {timeout: 5001}).type('clean your bedroom{enter}');
});

it('should be able to complete a task', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo').type('clean your bedroom{enter}');
    cy.get('.toggle').click();
});

it('should be able to clear completed tasks', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo').type('clean your bedroom{enter}');
    cy.get('.toggle').click();
    //cy.get('.clear-completed').click();
    cy.contains('Clear completed').click();
})  

