Feature: Show and hide events details
 Scenario: An event element is collapsed by default.
  Given the user first opens the app
  When the user recieves the full list of events
  Then all events are colapse by default.
 Scenario: User can expand an event to see its details
  Given the user gets a list of events
  When a user selects event details button
  Then the details will show up for that choosen event
 Scenario: User can collapse an event to hide its details
  Given the user sees the details of an event
  When the user presses a button to hide details
  Then the details of that even will be hidden