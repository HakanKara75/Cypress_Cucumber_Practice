Feature: Text arama
Scenario: Text arama
Given "https://www.pazarama.com" sitesine gider
When arama kutusuna "çanta" yazip aratir
Then sonuclarda "Çanta" veya "Bag" oldugunu dogrular
