Feature: Boyner
Background: Login
	Given Go to Boyner
        And Click on user icon
        And enter email address
        And enter password
        And Click on Giriş Yap Button

	Scenario: Ceket
        And arama kutusuna ceket yaz
        When erkek menusune bas
        And onerilen siralama tikla
        And onerilen siralamayi fiyat dusukten yuksege yap
        Then fiyatin dusukten yuksege oldugunu dogrula


