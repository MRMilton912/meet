Feature 2: Show/Hide event details
Scenario: Event details are hidden by default

Given: User has not selected event details
When: No action is taken
Then: Event details are hidden by default

Scenario: As a user, I should be able to expand an event so that the details can be shown

Given: Details are hidden
When: User selects event details
Then: Details will be shown about upcoming events

Scenario: As a user, I should be able to collapse an event so that the details are hidden

Given: Event details are shown
When: User selects hide button
Then: Details will be hidden

Feature 3: Specify number of events
Scenario: If the user has not specified a number, 32 events will be displayed by default

Given: By default
When: No action
Then: 32 events will be displayed

Scenario: As a user, I should be able to specify the number of events displayed so that I can change how many events are shown

Given: User has events displayed
When: User specifies number of events to be displayed
Then: User will see number of events displayed

Feature 4: Use app offline
Scenario: As a user, I should be able to see the cached data so that I can use the app while offline

Given: User is offline
When: User tries to access events page
Then: List that was cached should appear

Scenario: Show error when user changes search settings

Given: User if offline
When: User tries to upload new data
Then: Error will be shown

Feature 5: Shortcut to homescreen
Scenario: As a user, I should be able to install the meet app as a shortcut so that I can access the app from my home screen

Given: User wants to add shortcut to homescreen
When: User adds app to home screen
Then: Shortcut will be displayed on home screen

Feature 6: Display charts visualizing event details
Scenario: As a user, I should be able to see charts displaying event details so that I can see the number of upcoming events in each city

Given: User is on events page
When: User selects chart view
Then: A chart is shown with the number of upcoming events in each city

Serverless functions will play a pivotal role authorizing users who want to access event data from the Google Calendar API. I chose AWS Lamda for its scalability and ease of use so I don't have to focus on managing a server myself, using the Serverless Toolkit. Lambda functions are implemented for authenticating users by obtaining an access token from the authorization server on the cloud and data processing.
