import _shuffle from 'lodash/shuffle';
import PropTypes from 'prop-types';
import Workers from 'models/Workers';

import data from "./data.json";

const workers = _shuffle(Workers.ids);
const combos = workers.map(skip => _shuffle(workers.filter(w => w != skip)));

class Players {
  constructor() {
    this.ids = Object.keys(data);
    this.list = Object.values(data);
    this.master = data;
    this.ids.forEach((id, idx) => {
      this.find(id).spheres = combos[idx];
    });
  }

  find(PlayerId) {
    return this.master[PlayerId];
  }

  findEach(arr) {
    return arr.map(id => this.master[id]);
  }
}

Players.shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  spheres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
});

export default new Players();
