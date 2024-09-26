/// <reference types="cypress" />

describe('Teste para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        // Preencher os campos de input
        cy.get('input[placeholder="Nome"]').type('Simoes Santos')
        cy.get('input[placeholder="E-mail"]').type('simoes@teste.com.br')
        cy.get('input[placeholder="Telefone"]').type('77 123456789')

        // Clicar no botão adicionar
        cy.get('button.adicionar').click()

        // Verificar se o contato foi adicionado à lista
        cy.contains('Simoes Santos').should('exist')
        cy.contains('simoes@teste.com.br').should('exist')
        cy.contains('77 123456789').should('exist')
    })

    it('Deve editar o contato', () => {
        // Clicar no primeiro botão "edit"
        cy.get('.edit').first().click()

        // Verificar se o botão alterar existe
        cy.get('button.alterar').should('exist')

        // Alterar os valores
        cy.get('input[placeholder="Nome"]').clear().type('Simoes Editado')
        cy.get('input[placeholder="E-mail"]').clear().type('simoeseditado@teste.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('77 987654321')

        // Clicar no botão alterar
        cy.get('button.alterar').click()

        // Verificar se os dados foram alterados na lista
        cy.contains('Simoes Editado').should('exist')
        cy.contains('simoeseditado@teste.com.br').should('exist')
        cy.contains('77 987654321').should('exist')
    })

    it('Deve deletar o contato', () => {
        // Clicar no primeiro botão "delete"
        cy.get('.delete').first().click()

        // Verificar se o contato foi removido da lista
        cy.contains('Simoes Editado').should('not.exist')
        cy.contains('simoeseditado@teste.com.br').should('not.exist')
        cy.contains('77 987654321').should('not.exist')
    })
})
