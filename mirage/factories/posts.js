// import { Factory } from 'ember-cli-mirage';
import Mirage, {faker}  from 'ember-cli-mirage';

// export default Factory.extend({
export default Mirage.Factory.extend({
  title: faker.hacker.phrase,
  text: faker.lorem.sentence
});
