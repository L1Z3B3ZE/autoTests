describe('authorizationTest', () => {
    it('None-existent password test', () => {
        cy.fixture('loginTest').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit('https://dev.profteam.su/login')

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод несуществующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.none_existent_password)


            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.wait(2000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

        })
    })
})
