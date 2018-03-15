---
to: src/models/<%= className %>/index.js
---
import PropTypes from "prop-types";
import data from "./data.json";

class <%= className %> {
  constructor() {
    this.master = data;
    this.ids = Object.keys(data);
    this.list = Object.values(data);
  }

  find(<%= idName %>) {
    return this.master[<%= idName %>];
  }

  findEach(arr) {
    return arr.map(<%= idName %> => this.master[<%= idName %>]);
  }
}

<%= className %>.shape = PropTypes.shape({
  id: PropTypes.string.isRequired
});

export default new <%= className %>();
