export default function(server) {
  server.logging = true;
  server.createList('posts',10);
  // server.loadFixtures();
}
