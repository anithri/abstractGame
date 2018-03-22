import Workers from 'models/Workers';
import { Container } from 'unstated';

function mkPool(val) {
  return Workers.ids.reduce((pool, id) => {
    pool.push(...Array.from(id.repeat(val)));
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

const cleanBag = () => {
  return {
    bar: mkPool(defaultCounts.bar),
    dead: mkPool(defaultCounts.dead),
    discard: mkPool(defaultCounts.discard),
    draw: mkPool(defaultCounts.draw),
    reserve: mkPool(defaultCounts.reserve),

    projects: {}
  };
};

class bagContainer extends Container {
  state = cleanBag();

}

export default bagContainer;
