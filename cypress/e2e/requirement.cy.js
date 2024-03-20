describe('requirementTest', () => {
    it('empty requirement fields test', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Создать потребность' ")
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log("Ввод названия потребности")
            cy.get('.desktop-modal .labels .label:first div input').type(data.requirement)
            cy.get('.desktop-modal .labels .label:first div input').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:first div:nth-child(2) span').should('exist')

            cy.log("Ввод обязанностей")
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.duties)
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(3) div:nth-child(2)').should('exist')

            cy.log("Ввод требований")
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requests)
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(4) div:nth-child(2)').should('exist')

        })
    })

    it('empty requirement name field test', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Создать потребность' ")
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log("Ввод названия потребности")
            cy.get('.desktop-modal .labels .label:first div input').type(data.requirement)
            cy.get('.desktop-modal .labels .label:first div input').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:first div:nth-child(2) span').should('exist')
        })
    })

    it('empty requirement duties field test', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Создать потребность' ")
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log("Ввод названия потребности")
            cy.get('.desktop-modal .labels .label:first div input').type(data.requirement)

            cy.log("Ввод обязанностей")
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.duties)
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(3) div:nth-child(2)').should('exist')
        })
    })

    it('empty requirement requests field test', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Создать потребность' ")
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log("Ввод названия потребности")
            cy.get('.desktop-modal .labels .label:first div input').type(data.requirement)

            cy.log("Ввод обязанностей")
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.duties)

            cy.log("Ввод требований")
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.requests)
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').clear()
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(4) div:nth-child(2)').should('exist')

        })
    })

    it('invalid requirement field', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('div[class="page-navigation"] div:first div:nth-child(6) p').click()
            cy.wait(2000)

            cy.log("Клик по кнопке 'Создать потребность' ")
            cy.get('div[class="needs-block__content"] div:first button[type="submit"]').click()

            cy.log("Ввод названия потребности")
            cy.get('.desktop-modal .labels .label:first div input').type(data.invalid_requirement)
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:first div:nth-child(2) span').should('exist')

            cy.log("Ввод обязанностей")
            cy.get('.desktop-modal .labels .label:nth-child(3) div textarea').type(data.invalid_duties)
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(3) div:nth-child(2)').should('exist')

            cy.log("Ввод требований")
            cy.get('.desktop-modal .labels .label:nth-child(4) div textarea').type(data.invalid_requests)
            cy.wait(1000)

            cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
            cy.get('.desktop-modal .labels .label:nth-child(4) div:nth-child(2)').should('exist')

        })
    })

})


describe('studentRequirementTest', () => {
    it('responding to a need', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.student_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.student_password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()
            cy.wait(2000)

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('nav[class="header__nav"] a:nth-child(2)').click()
            cy.wait(2000)

            cy.get('.need-item--approved')
                .find('.button__background-color-green') // Находим кнопку отклика
                .not('[disabled]') // Фильтруем только активные кнопки
                .first() // Берем первую активную кнопку
                .click() // Нажимаем на кнопку

        })
    })

    it('can not respond to a need', () => {
        cy.fixture('requirement').then(data => {
            cy.log("Переход на страницу авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод существующего логина")
            cy.get('input[class="form-input--text form-input"]').type(data.student_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]').type(data.student_password)

            cy.log("Клик по кнопке 'Войти' ")
            cy.get('.button__background-color-green').click()
            cy.wait(2000)

            cy.log("Выбор пункта меню 'Потребности' ")
            cy.get('nav[class="header__nav"] a:nth-child(2)').click()
            cy.wait(2000)


            cy.get('.need-item--approved').each(($needItem) => {
                cy.wrap($needItem).within(() => {
                    cy.get('.button__background-color-light-blue').should('be.disabled');
                });
            });
        })
    })
})

