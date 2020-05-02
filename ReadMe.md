# exersAIze
## Description
Lazy days at home are officially over. ExcersAIze is a project based on an Artificial Intelligence algorithm which recognizes objects within an image input. The idea is for the user to upload a picture, and based on the recognition of the algorythm, get different excercise routines. The user will also be able to save said routines and mix them together to create new ones, as-well as sharing them with other users!
## User Stories
* 404 -
* mainpage - logo and brief explanation of the project.
* homepage - Main functionality of the project, instructions and navbar for login signup and about. Able to see app but have to log in to try it.
* sign up - Signup 
* login - Login
* logout - logout for security.
* routine list - Where excercising routines will be displayed, with the possibility to mix them and make new routines
* about - about the app
## Backlog
List of other features outside of the MVPs scope
**User profile**:
* see profile
* upload profile picture
* update profile info
* see other users profile
* list of routines
* edit routines and make new ones
  Video chat:
* connect with other users to excercise together
* create videochat groups to make excercising groups
* stream same music
## Server Routes (Backend):
* `GET` `/`
  * renders the `main` view
* `GET` `/home`
  * renders the `home` view
* `GET` `/about`
  * renders `about` view
* `POST` `/routine/:routineId/add/:exerciseId`
  * adds exercise to a routine with a + 
- `POST` `/routine/:routineId/delete/:exerciseId`
  - button to delete excercise from the current routine
* `GET` `/auth/signup`
  * renders the `signup` form view
* `POST` `/auth/signup`
  * does not display if user is logged in
  * body:
    ```json
    {
      username: String,
      email: String,
      password: String,
      repeatPassword: String
    }
    ```
* `GET` `/auth/login`
  * renders the `login` view form
* `POST` `/auth/login`
  * does not display if user is logged in
  * body:
    ```js
    {
      username: String,
      password: String
    }
    ```
* `GET` `/auth/logout`
  - destroy session and redirects to `/home` home view
* `GET` `/personal`
  * displays `personal/profile` view with profile and routines
* `GET` `/personal/edit`
  * renders `edit` page
* `POST` `/personal/edit`
  * redirects to `/` if user is anonymous
  * body:
    ```js
    {
      username: String,
      email: String,
      profilePicture: MultiPart-Form-Data,
    }
    ```
* `GET` `/personal/routine/:routineId`
  * renders every routine page
* `GET` `/personal/routine/:routineId/delete`
  - Deletes a routine for the current user and renders `profile` view
## Models
##### User model
```js
{
  username: String,
  email: String,
  password: String,
  imgName: String,
  imgPath: String,
  routines: [{type: Schema.Types.ObjectId, ref: 'Routine'}]
}
```
##### Routine model
```js
{
  name: String,
	exercises: [{type: Schema.Types.ObjectId, ref: 'Excercise'}],
	description: String
}
```
##### Excercise model
```js
{
  name: String,
  description: String,
  type: String,
  imgPath: String,
  element: String,
  intensity: String
}
```
### Github
https://github.com/yolaresofia/project-module-two
### Trello
https://trello.com/b/OluXJkN6/excersaize-app
### Wireframes
https://www.figma.com/file/JFGpGCUAEGH6GxGXjxjcWM/exerAIze-APP?node-id=0%3A1
### Team
[Jacopo Rodighiero - Linkedin]()
[Milton Mannarino - Linkedin]()
[Sofia Santa Maria - Linkedin]()