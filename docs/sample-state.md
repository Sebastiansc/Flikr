```js

{
  currentUser: {
    id: 1,
    username: "app-academy",
    profile_pic: "path/to/pic"
    favorites: [ "...photo ids"]
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: ["Invalid type"]},
    comment: {errors: ["Empty box, that won't work"]}
  },
  photos: {
    1: {
     title: "Sample Photo",
     description: "Photo description",
     author_id: 1,
     album_id: 1,
     tags: {
       1: {
         id: 1
         name: "Summer"
       }
     },
     favorites: [
       { username: "User", profile_pic: "path/to/pic"},
       { username: "User2", profile_pic: "path/to/pic2"}
     ]
   }
  },
  albums: {
     1: {
      title: "Collection",
      description: "Vacations"
     }
  },
  comments: [
    {body: "Comment blabla", author_id: 2 },
    {body: "Comment fufu", author_id: 3 }
  ],
  tags: [ "... tag names" ]
}
