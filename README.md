How does these codes work:

In short: All of these just works (https://www.youtube.com/watch?v=nVqcxarP9J4)

This is a break down of the code

HTML:

Each timeblock is given an id according to their time (e.g. 9 am has an id="9", 2 pm has id="14" because 14:00)
These id will be used to match the key in the local storage and compare time
Then you have button, message textbox(reminder) and input bar with their given class (see HTML)

Jquery:

renderMessageFromLocalStorage() is used to render the message from the local storage to append to their respective textbox
the function will first loop through all the message in the local storage. Each data in the local storage will be looped through all the li until it find
a li which its id is identical to the storage key. Once it does, it will append the message from the storage to the li's textbox/reminder

renderTimeandDate() will compare the time with the id (both are conversed to INT so they can be compared). If id is lower than the time, it is in the past. Equal, the present. Higher, the future. The function is refreshed every second in line 60-62

renderTimeandDate() renders the Time and Date

unhiddenInput() Unhidden the input bar and hide the reminder so you can type into the box

The rest should be pretty straight forward
