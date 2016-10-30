## Component Hierarchy

**AuthFormContainer**
  - SessionForm

**HomeContainer**
  - Home
    * NavBarContainer
    - Footer

**MainContainer**
  * HomeNav
    - HomeNavItem
  * ImageGallery
    * ImageGalleryItemContainer
      - ImageGalleryItem
        - GalleryItemHeader
        - GalleryItemFooter

**NavBarContainer**
  - NavBar
    - NavBarItem
      - NavBarDropItem
    - SearchBox

**Footer**
  - FooterItem


**ExploreContainer**
  * NavBarContainer
  - ExploreGallery
    - ExploreGalleryItem
  - Footer

**ProfileContainer**
  * NavBarContainer
  - ProfileHeader
  - ProfileNav
  - Footer

* CameraRollContainer
  - CameraRollOptions
    - CameraRollItem
      - CameraRollItemOptions

**PhotoStream**
  - PhotoStreamSorter
  - ImageItem

**Albums**
  - NewAlbum
  - AlbumItem

**PhotoContainer**
  * NavBarContainer
  - Photo
    - PhotoStream
      - PhotoItem
  - UserDescription
    - UserLink
    - Comments
      - CommentItem
  - PhotoDetails
    - AlbumItem
    - Tags
      - TagItem
  - Footer

**AlbumContainer**
  * NavBarContainer
  - AlbumDetail
    - AlbumCover
    - ImageItem
  - Footer

**TagsContainer**
  * NavBarContainer
    - TagIndex
      - TagTime
        - TagItem
  - Footer


    |Path   | Component   |
    |-------|-------------|
    | "/sign-up" | "AuthFormContainer" |
    | "/sign-in" | "AuthFormContainer" |
    | "/home/main" | "MainContainer" |
    | "/home/explore" | "ExploreContainer" |
    | "/home/profile" | "ProfileContainer" |
    | "/home/photos/:photoId" | "PhotoContainer" |
    | "/home/profile/albums" | "Albums"
    | "/home/profile/camera_roll" | "CameraRollContainer"
    | "/home/profile/photo_stream" | "PhotoStream"
    | "/home/tags" | "TagsContainer"
