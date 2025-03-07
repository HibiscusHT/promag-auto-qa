Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('promag auto qa', () => {

  let myUrl = Cypress.env('base_url')
  let newUrl = ''
    
  before(() => {
    cy.task('writeLine',`automation test by ${Cypress.env('developer')} version: ${Cypress.env('version')}`)
    cy.visit(myUrl)
    cy.screenshot()
  })
  
  

    it('open brands and find card entitle promag',()=>{
        cy.task('writeLine','open brand menu')
        cy.get('a#navbarDropdown.nav-link.rounded-sm').each((val,index)=>{
          if(val.text() === 'Brands'){ 
           cy.wrap(val).click()
          }
        })
        cy.screenshot()
        Cypress.$('ul.dropdown-menu.triangle.dropdown-menu-end').show()
        Cypress.$('div#navbarNav').css('display','block')
        cy.task('writeLine','select submenu digestive')
        cy.get('a.dropdown-item').each((val,index)=>{
          if(val.text() === 'Digestive'){
           cy.wrap(val).click() 
          }
        })
        cy.screenshot()
        cy.url().should('include','/brands/digestive')
        cy.screenshot()
        cy.task('writeLine','select card entitle promag')
        cy.get('#__layout > div > div:nth-child(2) > div > section > div:nth-child(4) > div.d-none.d-md-block > div > div > div > div.slick-slide.slick-current.slick-active > div > a > div > div.card-body > div.discover-brands > div').click()
        cy.url().should('include','/brands/digestive-and-skin/promag')
        cy.screenshot()
    })

    it('second test',()=>{
        cy.task('writeLine','second test')
    })

  })