$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/gokul/eclipse-workspace/Cucumber/src/test/resources/FacebookTesting.feature");
formatter.feature({
  "name": "validation of insta login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "validate by using Username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the instagram url",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user validate the titles of the webpages",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "gokul@111",
        "srguewhfwe"
      ]
    },
    {
      "cells": [
        "gokul@222",
        "kuhfeugwil"
      ]
    },
    {
      "cells": [
        "gokul@333",
        "ksuefgewhu"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate by using Username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the instagram url",
  "keyword": "Given "
});
formatter.match({
  "location": "SelfDefintionTesting.user_launch_the_instagram_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"gokul@111\" and \"srguewhfwe\"",
  "keyword": "When "
});
formatter.match({
  "location": "SelfDefintionTesting.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SelfDefintionTesting.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the titles of the webpages",
  "keyword": "Then "
});
formatter.match({
  "location": "SelfDefintionTesting.user_validate_the_titles_of_the_webpages()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.facebookTesting.SelfDefintionTesting.user_validate_the_titles_of_the_webpages(SelfDefintionTesting.java:43)\r\n\tat ✽.user validate the titles of the webpages(C:/Users/gokul/eclipse-workspace/Cucumber/src/test/resources/FacebookTesting.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "validate by using Username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the instagram url",
  "keyword": "Given "
});
formatter.match({
  "location": "SelfDefintionTesting.user_launch_the_instagram_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"gokul@222\" and \"kuhfeugwil\"",
  "keyword": "When "
});
formatter.match({
  "location": "SelfDefintionTesting.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SelfDefintionTesting.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the titles of the webpages",
  "keyword": "Then "
});
formatter.match({
  "location": "SelfDefintionTesting.user_validate_the_titles_of_the_webpages()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.facebookTesting.SelfDefintionTesting.user_validate_the_titles_of_the_webpages(SelfDefintionTesting.java:43)\r\n\tat ✽.user validate the titles of the webpages(C:/Users/gokul/eclipse-workspace/Cucumber/src/test/resources/FacebookTesting.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "validate by using Username and Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the instagram url",
  "keyword": "Given "
});
formatter.match({
  "location": "SelfDefintionTesting.user_launch_the_instagram_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"gokul@333\" and \"ksuefgewhu\"",
  "keyword": "When "
});
formatter.match({
  "location": "SelfDefintionTesting.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SelfDefintionTesting.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the titles of the webpages",
  "keyword": "Then "
});
formatter.match({
  "location": "SelfDefintionTesting.user_validate_the_titles_of_the_webpages()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.facebookTesting.SelfDefintionTesting.user_validate_the_titles_of_the_webpages(SelfDefintionTesting.java:43)\r\n\tat ✽.user validate the titles of the webpages(C:/Users/gokul/eclipse-workspace/Cucumber/src/test/resources/FacebookTesting.feature:6)\r\n",
  "status": "failed"
});
});