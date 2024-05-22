describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport("iphone-xr")
  })

  it('redirecionar minha tela para a tela de busca', () => {
    cy.get("[href='/Favorites']").click()

    //cy.scrollTo("top")
  })

  it('Tocar musica favoritada', () => {
    cy.get("[aria-label='favorite-music']").eq(0).click()
  });

})