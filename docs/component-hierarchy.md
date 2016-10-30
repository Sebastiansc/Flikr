## Component Hierarchy

**AuthFormContainer**
  - SessionForm

**HomeContainer**
  - Home
    * NavBarContainer
      - NavBar
        - NavBarItem
          - NavBarDropItem
        - SearchBox
    * HomeNav
      - HomeNavItem
    * ImageGallery
      * ImageGalleryItemContainer
        - ImageGalleryItem
          - GalleryItemHeader
          - GalleryItemFooter
    - Footer
      - FooterItem


**ExploreContainer**
  * NavBarContainer
    - NavBar
      - NavBarItem
        - NavBarDropItem
      - SearchBox
  - ExploreGallery
    - ExploreGalleryItem
  - Footer
    - FooterItem

**ProfileContainer**
  * NavBarContainer
    - NavBar
      - NavBarItem
        - NavBarDropItem
      - SearchBox
  - ProfileHeader
  - ProfileNav
    * CameraRollContainer
      - CameraRollOptions
        - CameraRollItem
          - CameraRollItemOptions

    - PhotoStream
      - PhotoStreamSorter
      - ImageItem

    - Albums
      - NewAlbum
      - AlbumItem
  - Footer
    - FooterItem

**ImageContainer**
  * NavBarContainer
    - NavBar
      - NavBarItem
        - NavBarDropItem
      - SearchBox
  - Image
    - ImageStream
      - ImageItem
  - UserDescription
    - UserLink
    - Comments
      -CommentItem
  - PhotoDetails
    - AlbumItem
    - Tags
      - TagItem
  - Footer
    - FooterItem

**AlbumContainer**
  * NavBarContainer
    - NavBar
      - NavBarItem
        - NavBarDropItem
      - SearchBox
  - AlbumDetail
    - AlbumCover
    - ImageItem
  - Footer
    - FooterItem


    |Path   | Component   |
    |-------|-------------|
    | "/sign-up" | "AuthFormContainer" |
    | "/sign-in" | "AuthFormContainer" |
    | "/home" | "HomeContainer" |
    | "/home/explore" | "ExploreContainer" |
    | "/home/profile" | "ProfileContainer" |
    | "/home/photos/:photoId" | "ImageContainer" |
    | "/home/profile/albums" | "Albums"
    | "/home/profile/camera_roll" | "CameraRollContainer"
    | "/home/profile/photo_stream" | "PhotoStream"
    | "/home/albums/:albumId" | "AlbumContainer"
