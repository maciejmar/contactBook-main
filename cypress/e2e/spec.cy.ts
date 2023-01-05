import Chance from 'chance';
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('http://localhost:4200');
    cy.get('#exampleInputEmail1').type(' manikbiradar365@gmail.com ');
    cy.get('#exampleInputPassword1').type('Admin@123');
    cy.get('body > app-root > div > app-auth > div > form > div:nth-child(4) > button.btn.btn-primary.mr-2').click();
    for(let i=0;i<5; i++){
      console.log('-',i);
      cy.then( ()=> {
          
          
         
          cy.get('body > app-root > div > app-contacts > div > div:nth-child(1) > app-contact-list > div > div').click();
          const chance = new Chance();
          const email = chance.email();
          const phone = chance.integer({min:220000333, max:999000999});
          cy.get('body > app-root > div > app-contacts > div > div:nth-child(2) > app-add-edit-contact > div > div > form > div:nth-child(1) > input').
          type('maciek');
          cy.get('input[name=lname]').type('abacki')
          cy.get('input[name=email').type(email);
          cy.get('input[name=phone]').type(phone);
          cy.get('button[type=submit]').click();
          cy.get('body > app-root > div > app-contacts > div > div:nth-child(1) > app-contact-list > div > div').click();
          
        
      })
    }

  })
  it('passes_2', ()=>{
    cy.visit('https://demo.noncommerce.com');
    //cy.title().should('NonCommerce');
    //cy.contains('NonCommerce');
  })

  it('passes_3', () => {
    
    cy.visit('http://localhost:4200');
    cy.get('#exampleInputEmail1').type(' manikbiradar365@gmail.com ');
    cy.get('#exampleInputPassword1').type('Admin@123');
    cy.get('body > app-root > div > app-auth > div > form > div:nth-child(4) > button.btn.btn-primary.mr-2').click();
  })
})