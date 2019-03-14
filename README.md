# Sample Popup Event Handler

<p>
  This is an example of showing a specific HTML element when the user's mouse goes towards the top of the screen.
</p>
<p>
  Once the user triggers the event, a modal background and message box appear. This is just a sample, and will be replaced by your actual popup.
</p>
<p>
  The thing is this will not work on mobile, as there is no mouse event to trace. My suggestion there would be another approach:<br>
  Keep track (using a variable) of how long they've been on the site and then after a minute or however long, if they do not have #Completed yet in their URL, display the popup.
</p>