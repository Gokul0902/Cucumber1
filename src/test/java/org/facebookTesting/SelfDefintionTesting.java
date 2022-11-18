package org.facebookTesting;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class SelfDefintionTesting {
	WebDriver driver;
	@Given("user launch the instagram url")
	public void user_launch_the_instagram_url() {
	   WebDriverManager.chromedriver().setup();
	   driver =new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	   driver.get("https://www.facebook.com/login.php/");
	 driver.findElement(By.xpath("//button[text()='Allow essential and optional cookies']")).click();
	}

	@When("user enter the {string} and {string}")
	public void user_enter_the_and(String string, String string2) {
	 
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(string);
		driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(string2);
	}

	@When("user click the login button")
	public void user_click_the_login_button() {
		driver.findElement(By.xpath("//button[@id='loginbutton']")).click();
	   
	}

	@Then("user validate the titles of the webpages")
	public void user_validate_the_titles_of_the_webpages() {
	  boolean contains = driver.getTitle().contains("Facebook");
	  Assert.assertTrue(contains);
	  driver.quit();
	}

}
