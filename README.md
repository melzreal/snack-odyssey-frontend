# Snack Odyssey App FrontEnd

React App snackodyssey -  a travel blog React CMS
with a rails api backend, which lives in https://github.com/melzreal/snack-odyssey-backend

Npm install and npm start. For the rails api backend, on a separate terminal, clone, bundle install and start the server with rails s - Puma is configured to run on 3001 so it doesn't clash with the default 3000 the react app will be running on.



A user can login, register, create posts about its travels,look for memes and share memes with friends. Just because memes should be included in everything ha!

Done - ish
- Working on clearing forms after submit [done]
- Issue with New posts not yet know to the reducer on first refresh (done - I need to make forms a child of blog posts or just ensure newpost doesn't override current redux store?) [done, for some reason dispatching the action to clear the form made mapDispatchtoprops call properly]
- MemeList functionality [ needs to be improved - some crazy mappings, a default cat too]
- Need to make sure users only see their own posts (currently posting as user 1 and everyone can access) [done with a serializer on the ]
- Add a few more stateless components to finish fulfilling project requirements (done)

Current to do:
- Pass logged in user id from redux store to getPosts (not getting user id from store)
- Maybe add a few more meme apis for fun



