Feature: Login to Application
Scenario: Valid Login
Given I open login page
And I click to login button
When I fill username with "hakandenememail@gmail.com"
And I fill password with "123hakan."
And I click on submit login
Then I shoul see homepage

