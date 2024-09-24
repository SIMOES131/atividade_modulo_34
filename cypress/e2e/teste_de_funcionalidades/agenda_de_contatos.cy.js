/// <reference types="cypress" />


describe('Teste para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher as informações e adicionar o contato', () => {
        cy.get('input[placeholder="Nome"]').should('be.visible')
        cy.get('input[placeholder="Nome"]').type('Simoes Santos', { delay: 300})

        cy.get('input[placeholder="E-mail"]').should('be.visible')
        cy.get('input[placeholder="E-mail"]').type('simoes@teste.com.br', { delay: 300})

        cy.get('input[placeholder="Telefone"]').should('be.visible')
        cy.get('input[placeholder="Telefone"]').type('77 123456789', { delay: 300})
    })

    it('Deve adicionar, deletar e editar um contato da lista', () => {
        

    it('Deve adicionar um contato da lista', () => {
        cy.get('.adicionar').click()
        })    
        
    it('Deve deletar um contato da lista', () => {
        cy.get('.delete').click()
    })

    it('Deve editar um contato da lista', () => {
        cy.get('.edit').click()
    })
    })

})