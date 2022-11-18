package org.facebookTesting;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\gokul\\eclipse-workspace\\Cucumber\\src\\test\\resources\\FacebookTesting.feature",
glue="org.facebookTesting",monochrome = true,
plugin = "html:C:\\Users\\gokul\\eclipse-workspace\\Cucumber\\target")
public class TestRunnerClass {

}
