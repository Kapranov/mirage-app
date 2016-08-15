// import { Factory } from 'ember-cli-mirage';
import Mirage, {faker} from 'ember-cli-mirage';

// export default Factory.extend({
export default Mirage.Factory.extend({
  'first-name'() { return faker.name.firstName(); },
  'last-name'() { return faker.name.lastName(); }
});
