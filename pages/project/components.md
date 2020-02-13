---
layout: detail
title: Project Components
nav_order: 1
permalink: /assignments/components
---

For your project, you will need to select three components from the lists below to include in your design. You must select at least one component from Group 1 and one from Group 2. Some may be used in combination; for example you may choose to include a Data Visualization (Group 1) and then extend it with an Interactive Data Filter (Group 2). This would count as two components.  If you have any questions about the components, please reach out to the course staff! You are also welcome to petition a component, so long as your TA signs off on your idea.

### Group 1

{:.link-menu}
1. [Data Collection Form](#-data-collection-form)
2. [Data Visualization](#-data-visualization)
3. [User Profiles](#-user-profiles)
4. [External Data Integration](#-external-data-integration)
5. [Branding](#-branding)
6. [Chrome Extension](#-chrome-plugin)

### Group 2

{:start="7" .link-menu}
7. [Interactive Data Selection](#-interactive-data-selection)
8. [Interactive Data Filter](#-interactive-data-filter)
9. [Social Interactions](#-social-interactions)
10. [Gamification / Rewards](#-gamification--rewards)
11. [Custom Calendar](#-custom-calendar)
12. [Responsive Website](#-responsive-website)
 
## <i class="fas fa-align-justify"></i> Data Collection Form 
A form is used to collect data from users. Forms are ubiquitous on the web; you fill one out every time you purchase something or sign up for an event online. For this project, your form should meet the following requirements at a minimum:
1. Contain at least five fields.
2. Contain at least two different types of fields (text, radio, checkbox, etc.).
3. Support data validation. Data validation functions check to see whether the user entered data into a form correctly. For example, if a particular field asks for the user’s phone number, the user should not be allowed to enter text or an incorrect number of digits. Your data validation functions should be intuitive based on your input fields.
4. Follow the guidelines for good form design (covered in lecture).

### Examples

{:.link-menu}
* <a href="https://www.google.com/forms/about/" target="_blank">Google Forms</a>
* <a href="https://www.typeform.com/" target="_blank">Typeform</a>

### Tutorials

{:.link-menu}
* <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">W3Schools Tutorial/W3Schools Validation Tutorial</a> 
* <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form" target="_blank">Mozilla Form Tutorial</a>
* <a href="https://medium.theuxblog.com/10-best-practices-for-designing-user-friendly-forms-fa0ba7c3e01f?gi=9d66b97dae07" target="_blank">10 Best Practices for Designing User Friendly Forms</a>


## <i class="far fa-chart-bar"></i> Data Visualization
Depending on the problem your project aims to solve, it may be appropriate for your website to communicate data to users through a data visualization. For example, you may want to display a line graph that shows how a user’s mood has changed over time using data that the user inputted through a form. Or you may way to display a map that shows the locations of community organizations in a given area. Data visualizations allow you to share information with users in an easy-to-understand format that highlights connects the users might not otherwise notice. For this project, your data visualization should meet the following requirements at a minimum:
* Display at least one data visualization on your website. The format of this visualization could be a table, chart, graph, map, or network graph. The visualized data can come from any source (does not need to be inputted by the user).
* The data visualization should show the relationship between at least two different types of data. For example, a line graph might show how a user’s mood changed over time, showing the relationship between two types of data, mood and time.
* The data you choose to visualize should be related, and you should choose a visualization format that effectively demonstrates this relationship.

### Examples

{:.link-menu}
* <a href="https://bl.ocks.org/" target="_blank">Bl.ocks</a>
* <a href="https://codepen.io/search/pens?q=d3&limit=all&type=type-pens" target="_blank">Codepens that use D3</a> (great for finding simple visualizations!)
* <a href="https://flowingdata.com/" target="_blank">Flowing Data</a>

### Tutorials 
(tables, charts, and graphs)

{:.link-menu}
* <a href="https://plot.ly/javascript/" target="_blank">Plot.ly</a>
* <a href="https://www.chartjs.org/" target="_blank">Chart.js</a>
* <a href="https://formidable.com/open-source/victory/" target="_blank">Victory</a>
* <a href="https://d3js.org/" target="_blank">D3</a>
* <a href="https://vega.github.io/vega/" target="_blank">Vega</a>
* <a href="https://www.highcharts.com/" target="_blank">HighCharts</a>
* <a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">Google Maps</a>
* <a href="https://leafletjs.com/" target="_blank">Leaflet</a>


## <i class="fas fa-user"></i> User Profiles
By supporting user profiles, your interface can provide personalized content for each user. Profiles are sometimes utilized to allow users to store information, such as preferences or personal information like address and credit card number. Profiles can also be used to provide different classes of users with access to different features. For example, a website owner may want to add or edit content, but a website customer should not have access to these features. User profiles allow you to personalize your application to most effectively meet the needs of different users. For this project, your user profiles should meet the following requirements at a minimum:
* Provide a login feature that allows a user to enter their credentials.
* Provide support for at least two users. The application should look different for each user (i.e. display personalized information such as name, stored data, etc). These profiles can be hard-coded (i.e. create a separate HTML page for each user that includes their personal information).
* The two (or more) user profiles should be personalized to the user, at a minimum by showing their personal information when logged in. If it makes sense for your application and representative tasks, the two user profiles should provide access to different features. For example, if you created user profiles to allow a website manager to have access to different features than a regular user, the two user profiles you create should support different features.

### Examples

{:.link-menu}
* <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
* <a href="https://www.facebook.com/" target="_blank">Facebook</a>

### Tutorials

{:.link-menu}
* <a href="https://uxplanet.org/designing-ux-login-form-and-process-8b17167ed5b9" target="_blank">Designing Login Form</a> 
* <a href="https://www.designyourway.net/blog/inspiration/mobile-user-interface-login-form-design-inspiration-41-examples/" target="_blank">Login Form Design for Mobile</a> 
* <a href="https://www.w3schools.com/howto/howto_css_login_form.asp" target="_blank">W3schools: Creating a login form</a> 
* <a href="https://medium.theuxblog.com/10-best-practices-for-designing-user-friendly-forms-fa0ba7c3e01f" target="_blank">10 Best Practices for Designing User Friendly Forms</a> 


## <i class="fas fa-cloud-download-alt"></i> External Data Integration
Depending on the problem your project aims to solve, it may be appropriate for your website to allow users to interact with content from external providers. For example, you may want to view streams of relevant content that have been posted to sites like Twitter, Instagram, YouTube, etc. Many of these companies provide support for web developers to integrate their content into external websites in user-friendly ways. For this project, your external content integration should meet the following requirements at a minimum:

* Integrate at least two different types of external content into your website. Note that simply adding social media buttons (Twitter / Instagram / Facebook) or embedding an iFrame is not enough. Rather, you should create a custom UI / interaction with data accessed from another website. We have already seen many examples of this in class (Spotify assignment, Yelp + interactive map in-class activity, etc.)
* External content should be integrated into your design in a seamless and usable way so that users can interact with the content as they would any other features.
* Provide a justification for why each type of external content is important or necessary for supporting one of your representative tasks (one paragraph per type of content).

### Relevant Lectures
In order to complete this assignment, you will be using the JavaScript fetch API and the <a href="https://www.apitutor.org" target="_blank">API Tutor</a> (proxy server) to query Spotify. Relevant lectures and labs:

{:.link-menu}
* [Lecture 6](../lectures/10lecture)
* [JavaScript Lab](../lectures/12lab)
* <a href="https://docs.google.com/presentation/d/1pr1HH5VS1ZbH89XN5MGRPJIs_eFILSogcAdkp9jecgM/edit#slide=id.g56d97eb60e_0_542" target="_blank">Ajax</a>
* [JavaScript & REST](../lectures/16lecture)

## <i class="fas fa-trademark"></i> Branding
More elaboration on this will be posted later today.

## <i class="fas fa-hand-pointer"></i> Interactive Data Selection
More elaboration on this will be posted later today.

## <i class="fas fa-filter"></i> Interactive Data Filter
More elaboration on this will be posted later today.

## <i class="fas fa-user-friends"></i> Social Interactions
More elaboration on this will be posted later today.

## <i class="fas fa-gamepad"></i> Gamification / Rewards
More elaboration on this will be posted later today.

## <i class="fas fa-calendar-alt"></i> Custom Calendar
More elaboration on this will be posted later today.

## <i class="fab fa-chrome"></i> Chrome Extension
More elaboration on this will be posted later today.

## <i class="fas fa-mobile-alt"></i> Responsive Website