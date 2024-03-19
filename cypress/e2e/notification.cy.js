describe('notificationTest', () => {
    it('viewNotification', () => {
        cy.fixture('notification').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Уведомления' ")
            cy.get('nav[class="header__nav"] a:nth-child(4)').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Прочитать все' ")
            cy.get('.notification-title > :nth-child(3)').click()

        })
    })
})