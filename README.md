## SocialNetwork
This is the client-side part of the application "SocialNetwork"
written for the Distributed Web Applications course.

### Overview

The client-side application is writted in javascript,
using the [Angular2](https://angular.io/) framework.

Angular2 is usually considered a component-based framework,
but can be seen as a MVC framework as well, in which
the components are mapped nicely to controllers.

### Architecture
The client-side application is downloaded almost entirely
at the first access, and is cached for subsequent requests.
The following requests are directed to the API, exposed by
the server-side application.