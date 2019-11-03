# Snack Odyssey App FrontEnd

React App snackodyssey -  a travel blog React CMS
with a rails api backend, which lives in https://github.com/melzreal/snack-odyssey-backend

Npm install and npm start. For the rails api backend, on a separate terminal, clone, bundle install and start the server with rails s - Puma is configured to run on 3001 so it doesn't clash with the default 3000 the react app will be running on.



A user can login, register, create posts about its travels,look for memes and share memes with friends. Just because memes should be included in everything ha!

Current version, work in progress:
- Missing ability to register, only login so far
- Working on clearing forms after submit
- Issue with New posts not yet know to the reducer on first refresh (do I need to make forms a child of blog posts or just ensure newpost doesn't override current redux store?)
- MemeList functionality need to be added so users can share them around
- Need to make sure users only see their own posts (currently posting as user 1 and everyone can access)

