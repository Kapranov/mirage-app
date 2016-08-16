export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.namespace = '';

  // REST adapter data
  // this.get('posts');
  // this.get('posts/:id');
  // The JSON API standard requires a data block in this format with attributes.

  // this.get('/posts', 'post');

  this.get('/posts', (schema) => {
    return schema.posts.all();
  });

  // single data
  // this.get('/posts/:id', function(db, request) {
  //   let id = request.params.id;
  //
  //   // return db.posts.all();
  //   return {
  //     data: {
  //       type: 'posts',
  //       id: id,
  //       attributes: db.posts.find(id)
  //     }
  //   };
  // });

  // collection of data
  // this.get('/posts', function(db, request) {
  //   return {
  //     data: db.posts.map(attrs => (
  //       { type: 'posts', id: attrs.id, attributes: attrs }
  //     ))
  //   };
  // });

  // this.get('/posts', (db) => {
  //   let data = {};
  //   data = db.posts.map((attrs) => {
  //     let rec = {type: 'posts', id: attrs.id, attributes: attrs};
  //     return rec;
  //   });
  //
  //   return { data };
  // });
}
