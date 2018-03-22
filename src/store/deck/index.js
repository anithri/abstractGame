import { Container } from 'unstated';
import Cards from 'models/Cards';
import Players from 'models/Players';

const cleanDeck = () => {
  const deck = {
    shuffled: false,
    draw: [...Cards.ids],
    discard: [],
    active: []
  };
  Players.ids.forEach(pid => deck[pid] = []);
  return deck;
};

class deckContainer extends Container {
  state = cleanDeck();

  resetDeck() {
    this.setState({...cleanDeck()});
  }
}

export default deckContainer;
