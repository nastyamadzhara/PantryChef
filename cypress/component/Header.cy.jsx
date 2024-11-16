import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../client/src/components/Header';

const Wrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe('Header Component', () => {
  beforeEach(() => {
    mount(
        <Wrapper>
          <Header />
        </Wrapper>
    );
  });

  it('should render the PantryChef logo', () => {
    cy.get('.logo').should('exist');
    cy.get('.carrotIcon')
        .should('have.attr', 'src')
        .and('include', '.svg');
  });

  it('should render the "Log in" button', () => {
    cy.get('.header-log-in').should('exist').and('contain', 'Log in');
  });

  it('should render the "Sign up" button', () => {
    cy.get('.header-sign-up').should('exist').and('contain', 'Sign up');
  });

  it('should navigate to /login on "Log in" button click', () => {
    cy.get('.header-log-in').click();
    cy.url().should('include', '/login');
  });

  it('should navigate to /signup on "Sign up" button click', () => {
    cy.get('.header-sign-up').click();
    cy.url().should('include', '/signup');
  });

  it('should navigate to home page on logo click', () => {
    cy.get('.logo').click(); // Клік по логотипу
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
