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

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

    })
  })

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

  it('None-existent login and password test', () => {
    cy.fixture('loginTest').then(data => {
      cy.log("Переход на страницу авторизации")
      cy.visit('https://dev.profteam.su/login')

      cy.log("Ввод несуществующего логина")
      cy.get('input[class="form-input--text form-input"]').type(data.none_existent_login)

      cy.log('Ввод несуществующего пароля')
      cy.get('input[class="form-input--password form-input"]').type(data.none_existent_password)

      cy.log("Клик по кнопке 'Войти' ")
      cy.get('.button__background-color-green').click()

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

    })
  })

})


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

  it('None-existent register confirm password test', () => {
    cy.fixture('registerTest').then(data => {
      cy.log("Переход на страницу регистрации")
      cy.visit(data.main_url)

      cy.log("Ввод логина")
      cy.get('div[class="form__labels"] input:first').type(data.login)

      cy.log("Ввод почты")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

      cy.log('Ввод подходящего пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

      cy.log('Ввод неподходящего повтора пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.none_existent_confirm_passwd)

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })

  it('None-existent register surname test', () => {
    cy.fixture('registerTest').then(data => {
      cy.log("Переход на страницу регистрации")
      cy.visit(data.main_url)

      cy.log("Ввод логина")
      cy.get('div[class="form__labels"] input:first').type(data.login)

      cy.log("Ввод почты")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

      cy.log('Ввод пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

      cy.log('Ввод повтора пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.confirmPasswd)

      cy.log("Клик по кнопке 'Далее' ")
      cy.get('div[class="form__buttons"] div:last button[type="submit"]').click()

      cy.log("Ввод неподходящей фамилии")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').type(data.none_existent_surname)

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

    })
  })


  it('None-existent register name test', () => {
    cy.fixture('registerTest').then(data => {
      cy.log("Переход на страницу регистрации")
      cy.visit(data.main_url)

      cy.log("Ввод логина")
      cy.get('div[class="form__labels"] input:first').type(data.login)

      cy.log("Ввод почты")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

      cy.log('Ввод пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

      cy.log('Ввод повтора пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.confirmPasswd)

      cy.log("Клик по кнопке 'Далее' ")
      cy.get('div[class="form__buttons"] div:last button[type="submit"]').click()

      cy.log("Ввод фамилии")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').type(data.surname)

      cy.log("Ввод имени")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) div input').type(data.none_existent_name)

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })


  it('None-existent register patronym test', () => {
    cy.fixture('registerTest').then(data => {
      cy.log("Переход на страницу регистрации")
      cy.visit(data.main_url)

      cy.log("Ввод логина")
      cy.get('div[class="form__labels"] input:first').type(data.login)

      cy.log("Ввод почты")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

      cy.log('Ввод пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

      cy.log('Ввод повтора пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.confirmPasswd)

      cy.log("Клик по кнопке 'Далее' ")
      cy.get('div[class="form__buttons"] div:last button[type="submit"]').click()

      cy.log("Ввод фамилии")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').type(data.surname)

      cy.log("Ввод имени")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) div input').type(data.name)

      cy.log("Ввод неподходящего отчества")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) div input').type(data.none_existent_surname)

      cy.wait(1000)

      cy.log("Проверка вывода сообщения, сигнализирующего об ошибке")
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })

  it('Existent register test', () => {
    cy.fixture('registerTest').then(data => {
      cy.log("Переход на страницу регистрации")
      cy.visit(data.main_url)

      cy.log("Ввод логина")
      cy.get('div[class="form__labels"] input:first').type(data.login)

      cy.log("Ввод почты")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').type(data.email)

      cy.log('Ввод пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').type(data.password)

      cy.log('Ввод повтора пароля')
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').type(data.confirmPasswd)

      cy.log("Клик по кнопке 'Далее' ")
      cy.get('div[class="form__buttons"] div:last button[type="submit"]').click()

      cy.log("Ввод фамилии")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').type(data.surname)

      cy.log("Ввод имени")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) div input').type(data.name)

      cy.log("Ввод отчества")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) div input').type(data.patronym)

      cy.log("Клик по кнопке 'Создать аккаунт' ")
      cy.get('div[class="form__buttons"] div:nth-child(3) button[type="submit"]').click()

    })
  })
})