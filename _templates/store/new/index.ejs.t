---
to: src/store/<%= name %>/index.js
---
import { Container } from 'unstated';
import defaults from './defaults.json';

class <%= name %>Container extends Container {
  state = {
    defaults
  };
}

export default <%= name %>Container;
