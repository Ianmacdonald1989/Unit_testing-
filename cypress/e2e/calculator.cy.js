describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working numbers to diplay running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23' )
    
  })

  it('should have working numbers to diplay addition of 2 add 3', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5' )
  })

  it('should have working numbers to diplay addition of 2 add 3', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5' )
  })

  it('should have working numbers to diplay chain operations of 3 add 2 subtract 1 to equal 4', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4' )
  })


  it('should have working numbers to diplay addition of 2 add 3 to equal 5 as a positive number', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5' )

  })

  it('should have working numbers to diplay addition of 1 subtract 3 to equal negative number of -2', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2' )
  })

  it('should have working numbers to diplay multiplication of 4.5 by 3 to equal 13.5', () => {
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '13.5' )
})


it('should have working numbers to diplay a very large number by multiplying 12050 by 14878 to equal 179279900 ', () => {
  cy.get('#number1').click();
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('#number5').click();
  cy.get('#number0').click();
  cy.get('#operator-multiply').click()
  cy.get('#number1').click();
  cy.get('#number4').click();
  cy.get('#number8').click();
  cy.get('#number7').click();
  cy.get('#number8').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '179279900' )
})

it('should have working numbers 3 divided by 0 to equal 0', () => {
  cy.get('#number3').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '0' )
})



})