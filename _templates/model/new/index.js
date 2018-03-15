var inflection = require('inflection');
module.exports = {
  params: ({ args }) => {
    var plural = inflection.pluralize(args.name);
    var singular = inflection.singularize(args.name);
    return Promise.resolve({
      args,
      name: args.name,
      className: inflection.camelize(plural),
      idName: inflection.camelize(singular, true) + 'Id'
    });
  }
};
