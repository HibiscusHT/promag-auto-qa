Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('promag auto qa', () => {

    it('first test',()=>{
        cy.task('writeLine','first test')
    })

    it('second test',()=>{
        cy.task('writeLine','second test')
    })

  })