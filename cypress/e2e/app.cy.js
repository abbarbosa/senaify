describe('template spec', () => {

  before(() => {
    cy.visit('/')
  })

  beforeEach(()=>{
    cy.viewport("iphone-xr")
    //cy.visit('http://localhost:8081')
 })


  it('passes', () => {

    //capturar o elemento tittle e ver se ele está visivel
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })

  it("Verificar se existe itens na listagem das playlists", () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  })

  it("clicar no primeiro item da lista, para listar suas músicas", () => {
    cy.get("[aria-label='playlist-item']").first().click();
    cy.get("[aria-label='music-item']").first().click();
    
  })

  it("clicar na música desejada e executar o áudio", () =>{
    cy.get("[aria-label='music-item']").eq(2).click()
  })

  it("tocar determinada música com base no nome dela", () =>{
    cy.get("[aria-label='music-item']").contains('Gosta De Rua').click()

  })
})