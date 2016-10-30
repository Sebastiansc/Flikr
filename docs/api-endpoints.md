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
- `GET /api/tags/:photo_id`
  - return all tags for a photo
- `POST /api/photos/:photo_id/tags`: add tag to photo by name
- `DELETE /api/photos/:photo_id/tags/:tag_name`: remove tag from photo by
  name

## Comments
- `Get /api/comments/:photo_id`
  - index of all comments for a photo
- `Get /api/comments/:photo_id/count`
  - returns photo's number of comments
- `Patch /api/comments/:id`
  - updates comment if user owns it
- `Delete /api/comments/:id`
