Feature: validation of insta login
Scenario Outline: validate by using Username and Password 
Given user launch the instagram url 
When user enter the "<username>" and "<password>" 
And user click the login button
Then user validate the titles of the webpages 

Examples:
|username|password|
|gokul@111|srguewhfwe|
|gokul@222|kuhfeugwil|
|gokul@333|ksuefgewhu|