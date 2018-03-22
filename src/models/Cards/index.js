import PropTypes from "prop-types";
import data from "./data.json";
import Workers from 'models/Workers';

class Cards {
  constructor() {
    this.master = data;
    this.ids = Object.keys(data);
    this.list = Object.values(data);
  }

  find(cardId) {
    return this.master[cardId];
  }

  findEach(arr) {
    return arr.map(cardId => master[cardId]);
  }
}

Cards.shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.oneOf(Workers.ids)).isRequired
});

export default new Cards();
