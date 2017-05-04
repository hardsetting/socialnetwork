## App

This is the Angular2 application.
The main module is the AppModule, which routes the requests
to components according to the AppRoutingModule.

The application is divided in login, site and admin modules.

#### [login](login)
This modules only contains the LoginComponent, which
manages the user authentication with login and password.
Authentication is mandatory to access both site and admin modules.

#### [site](site)
The frontend application.
The only component is ProfileComponent, which is sub-routed
subsequently in [PostsComponent](site/profile/posts/post.component.ts),
[FriendsComponent](site/profile/friends/friends.component.ts) and
[SuggestionsComponent](site/profile/suggestions/suggestions.component.ts).

#### [admin](admin)
The backend application, that gives some useful analytics
regarding the social network.