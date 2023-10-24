Feature: File Upload
Scenario: File Upload
Given I open fineuploader page
When I click to demos link
Then I assert current url and protocol
And I click to Gallery View
Then I assert that I am on Gallery View
