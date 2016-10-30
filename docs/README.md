# Flikr

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://flikr.herokuapp.com/#/

## Minimum Viable Product

Flikr is a web application inspired by Flickr built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
- [ ] Albums
- [ ] Tags
- [ ] Comments
- [ ] Production README [sample](../production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Photo Model, API, and components (2 days)

**Objective:** Photos can be created, read and destroyed through
the API.

### Phase 3: Albums (2 day)

**Objective:** Photos may belong to Albums that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (1 days)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

### Phase 5: Comments (2 days)

**objective:** Comments can be created, read and destroyed through the api

### Phase 6: - Pagination / continuous scroll for Explore and Main templates (1 day)

**objective:** Add continuous scroll to Photo Display templates

### Bonus Features (TBD)
- [ ] Follows
- [ ] Groups
- [ ] Favorites
- [ ] Multiple sessions
