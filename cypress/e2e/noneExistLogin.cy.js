describe('authorizationTest', () => {
    it('None-existent login test', () => {
        cy.fixture('loginTest').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit('https://dev.profteam.su/login')

            cy.log("Ввод несуществующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.none_existent_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)


            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

        })
    })
})