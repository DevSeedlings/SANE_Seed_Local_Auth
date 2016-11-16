# SEAN-seed
This is a fully functional basic MEAN stack app seed. It has passport, gulp, and sass capabilities (gulp and sass not required for use).

###To use this seed
1. Git clone it
2. Run `npm install -g gulp` (if you want to use gulp)
3. In the project folder, run `npm install`
4. In one terminal window run `gulp` (if you want to use gulp)
5. Run 'nodemon' in another terminal window

### A more complicated update function if you would like to understand the concept better
```javascript
// Find user you want to update by id
db.user.user_search_id([req.params.id], function(err, user) {
  if (err) {
    console.log('User update search error', err);

    return res.status(401)
      .send(err);
  }
  if (user.length < 1) {
    console.log('User update user not found');

    return res.status(401)
      .send('User was unable to update');
  }

  // Get the update info and take the found user out of the array
  var userUpdate = req.body;
  user = user[0];

  // Loop through the update info and change the values to the new ones. This allows you to have varying amounts of data for updating without having to write more than one endpoint for it.
  for (var key in userUpdate) {
    user[key] = userUpdate[key];
  }

  // Update: add or remove column names as needed.
  db.user.user_update([user.name, user.email], function(err, user) {
    if (err) {
      console.log('User update error', err);

      return res.status(401)
        .send(err);
    }

    user = user[0];
    delete user.password;

    res.status(200)
      .json(user);
  });
});
```
