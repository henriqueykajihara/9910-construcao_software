describe('aplicando credito no restaurante', () => {
  it('reduzindo a quantidade de ticket do usuario', () => {
    
    cy.visit('http://localhost:3000/aplicar-credito')
    
    cy.get('[data-test="quantidadeAtualTickets"]').then(($quant) => {

      const quantidadeItens = $quant.text()
      
      cy.get('[data-test="quantidadeAtualTickets"]')
        .contains(quantidadeItens);
  
      cy.get('[data-test="removeTicketButton"]')
        .click();
  
      if ( quantidadeItens > 0 ) {
        cy.get('[data-test="quantidadeAtualTickets"]')
          .contains(quantidadeItens - 1);
      } else {
        cy.get('[data-test="quantidadeAtualTickets"]')
          .contains(quantidadeItens);
      }

    });

  });
})