###Questions###

1. What is the difference between server side routing and client side routing?
Server side--GET requests/full reload. Client side--changes to state within the code, no external requests.

Server side - retrieves only the requested data. Request is sent to the server--GET request--which discards the old page and brings in fresh data. Unfortunately, it also causes the entire page to refresh, which could include things like headers or footers that will not actually need to change.
For a long time, server side routing was the defacto, so it search engines tend to optimize for this still.

Client side - Javascript is loaded from within the page, requests to the server are blocked. Changes the STATE, rendering a new component, sending information to html or changes to html. Routing is typically faster because there is less data that is being transferred. Requires more code, libraries, in order to allow for this--as mentioned, server side was the way to do this for many years. 

2. Mention some advantages of using client side routing.
Client side routing can be advantageous because it typically loads faster upon changes to state. It may not load faster upon the initial load, because since the data to GET is not specified, more data may be processed than is necessary, which can cause a slow down.
During the application processes, however, the entire page does not need to be re-rendered as it would with a server-side GET request. This means that after the initial load of the page, it is faster to change components and facets of the page using client side routing.

3. Which component is used to define a route and what props are commonly added to it?

In class we have been putting the routing inside the App.js or Index.js component. The route is meant to be placed inside the highest level component, or head component. This means that the most outside level of code exoskeleton will hold the data for the routing information. Information provided would be the same of the component the route points to, the file path to access that component, and information regarding the exact-ness of accessing that component (whether it will strictly show at that exact location, or any child of that route).

3. How can I make sure that the component associated with the "/" route is not displayed for every other route?

To prevent a component from displaying at all other routes, it is important to include the 'exact' keyword with the file path to ensure that it's view is restricted to only the root '/' path.