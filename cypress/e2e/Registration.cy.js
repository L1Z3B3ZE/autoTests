describe('registerTest', () => {
    it('None-existent register login test', () =>{
        cy.fixture('registerTest').then(data => {
            cy.log("Переход на страницу регистрации")
            cy.visit(data.main_url)

            cy.log("Ввод неподходящего логина")
            cy.get('div[class="form__labels"] input:first').type(data.none_existent_login)

            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None-existent register email test', () =>{
        cy.fixture('registerTest').then(data => {
            cy.log("Переход на страницу регистрации")
            cy.visit(data.main_url)

            cy.log("Ввод логина")
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log("Ввод неподходящей электронной почты")
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.none_existent_email)

            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })

    it('None-existent register password test', () => {
        cy.fixture('registerTest').then(data => {
            cy.log("Переход на страницу регистрации")
            cy.visit(data.main_url)

            cy.log("Ввод логина")
            cy.get('div[class="form__labels"] input:first').type(data.login)

            cy.log("Ввод почты")
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

            cy.log('Ввод неподходящего пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.none_existent_passwd)

            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })
})