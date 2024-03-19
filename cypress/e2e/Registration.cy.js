describe('registerTest', () => {

    it('None-existent register login', () =>{
        cy.fixture('registerTest').then(data => {
            cy.log("Переход на страницу регистрации")
            cy.visit(data.main_url)

            cy.log("Ввод неподходящего логина")
            cy.get('div[class="form__labels"] input:first').type(data.none_existent_login)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
    })
})