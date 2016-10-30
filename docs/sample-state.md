{
  currentUser: {
    id: 1,
    username: "app-academy"
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
     }
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
 ]
}
