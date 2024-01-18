Feature: Specify Number of Events
 Scenario: When the user has not specified a number, 32 events are shown by default
  Given the user has not specified or filtered the number of events
  When the user sees the list of events
  Then 32 events are shown by default
 Scenario: User can change the number of events they want to see
  Given the user has events displayed
  When the user chooses to change the number of events displayed
  Then the number of events displayed will update to the number the user selected