# Level 1 - Define a story

We want to evaluate your capability to define a complete story to your developer(s) team that can be complete with enough details to be dev straight away.

You are Product Manager at Google Flights and you need to define the story of the filters into the search journey.
User research has been done, UI is ready, check this out : https://www.google.fr/flights/.

Goal is to define the user story to filter within the search of flights into Google flights, ready to be provided to your lovely developer(s) team.

## Expectations
- story ready to be provided to dev
- writing skills, in english
- markdown file, or pdf, doc, txt (template provided has markdown syntax)

## Time required

2h to 3h

## Template

Here's a template of a complete story. Not all sections are necessary, up to you to define what is relevant and required for your developer(s).


	## 1. Business case
	 
	### 1.1 Description
	Describe the context, the problem to solve and/or the market opportunities to reach and/or the business value added by implementing this story.

	### 1.2 Use cases
	List one or different use cases we want to cover with this story
	 
	### 1.3 User Story
	Define the feature with a user story, or several ones, by defining the value(s). 
	As a ____, I want to ____ in order to _____.

	### 1.4 Metrics 
	Define KPIs, OKR or metrics to evaluate success of this story.
	 
	## 2. Description
	 
	### 2.1 Business rules
	Define all rules for this story (depending on user roles, combination of criteria, display by default...)
	 
	### 2.2 User journey(s)
	Define user steps to accomplish his task
	 
	### 2.3 UI expectations
	Describe all UI behaviors according to buiness rules and user journey
	 
	### 2.4 Error cases
	Define all possible errors and how we inform the user, how the app respond if any error
	 
	### 2.5 Definition of Ready
	List what's need to be ready before to start dev
	
	### 2.6 Functional tests
	Define functional scenario that your developer(s) must implement by setting up this feature.
	You can use Gherkin syntax (https://docs.behat.org/en/v2.5/guides/1.gherkin.html, https://cucumber.io/docs/gherkin/reference/)

	### Example of functional test

	```feature
	Feature: Some terse yet descriptive text of what is desired
	  In order to realize a named business value
	  As an explicit system actor
	  I want to gain some beneficial outcome which furthers the goal
	  
	  Background: Given there are 3 ninjas

	  Scenario: Some determinable business situation
	    Given some precondition
	     When some action by the actor
	      And some other action
	     Then some testable outcome is achieved
	      And something else we can check happens too

	  Scenario: A different situation
	      ...```

	## 3. Actions plan
	List actions to be executed by your developer(s) to provide this story.
	 
	## 4. Acceptance criteria
	- [ ] As a user, I can ...
	 
	## 5. Definition of done
	- [ ] This is done ...
