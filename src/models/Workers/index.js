import PropTypes from "prop-types";
import data from "./data.json";

class Workers {
  constructor() {
    this.master = data;
    this.ids = Object.keys(data);
    this.list = Object.values(data);
  }

  find(WorkerId) {
    return master[WorkerId];
  }

  findEach(arr) {
    return arr.map(WorkerId => master[WorkerId]);
  }
}

Workers.shape = PropTypes.shape({
  id: PropTypes.string.isRequired
});

export default new Workers();
