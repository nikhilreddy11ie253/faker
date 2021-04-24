// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
// faker.js fake date for laptops

* @namespace faker.laptop
*/
var Laptop = function (faker) {
 var self = this;
 var fake = faker.fake;

 /**
  * manufacturer
  *
  * @method faker.laptop.manufacturer
  */
 self.manufacturer = function () {
   return faker.random.arrayElement(faker.definitions.laptop.manufacturer);
 };

 self.manufacturer.schema = {
   "description": "Generates a manufacturer name.",
   "sampleResults": ["dell", "hp", "lenovo", "asus"]
 };

module["exports"] = Laptop;

// * model
a
self.model = function () {
    return faker.random.arrayElement(faker.definitions.laptop.model);
  };

  self.model.schema = {
    "description": "Generates a laptop model.",
    "sampleResults": ["i3", "i5", "i7", "i9"]
  };
  module["exports"] = model;