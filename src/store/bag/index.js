import Workers from 'models/Workers';
import { Container } from 'unstated';

function mkPool(val) {
  return Workers.ids.reduce((pool, id) => {
    pool.push(...Array(val).fill(id));
    return pool;
  }, []);
}

const defaultCounts = {
  bar: 2,
  dead: 0,
  discard: 3,
  draw: 5,
  reserve: 20
};

const prepBag = () => {
  return {
    bar: mkPool(defaultCounts.bar),
    dead: mkPool(defaultCounts.dead),
    discard: mkPool(defaultCounts.discard),
    draw: mkPool(defaultCounts.draw),
    reserve: mkPool(defaultCounts.reserve),
    projects: {}
  };
};

const newBag = {
  bar: [],
  dead: [],
  discard: [],
  draw: [],
  reserve: [],
  projects: {}

};


class bagContainer extends Container {
  state = newBag;

  fromTo(orig, dest, count) {
    const origWorkers = this.state[orig];
    const destWorkers = this.state[dest];
    const draw = origWorkers

  }

}

export default bagContainer;
