# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
  - accepts `tag_name` query param to list photos by tag
  - send back all comments, favorites and tags for each photo
  - accepts pagination params
- `GET /api/photos/:id`
- `POST /api/photos`
- `PATCH /api/photos/:id`
  - accepts payload with only new title and description
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `POST /api/albums/photo`
  - adds to album and to photostream
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`
  - index of all photos for an album

### Tags
- `GET /api/tags`
  - index of all tags
- `POST /api/tags`: add tag to photo by name
  - accepts photo_id and tagname in the body of the request
- `DELETE /api/tags`: remove tag from photo by
  name

## Comments
- `Post /api/comments`
  - accepts photo_id and body in the body of the request
- `Patch /api/comments/:id`
- `Delete /api/comments/:id`

## Favorites
- `Post /api/likes`
- `Delete /api/likes/:id`
