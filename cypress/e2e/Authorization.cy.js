describe('authorizationTest', () => {
  it('Existent authorization test', () => {
    cy.fixture('loginTest').then(data => {
      cy.log("Переход на страницу авторизации")
      cy.visit('https://dev.profteam.su/login')

      cy.log("Ввод существующего логина")
      cy.get('input[class="form-input--text form-input"]').type(data.login)

      cy.log('Ввод существующего пароля')
      cy.get('input[class="form-input--password form-input"]').type(data.password)

      cy.log("Клик по кнопке 'Войти' ")
      cy.get('.button__background-color-green').click()

    })
  })
})