---
to: src/store/<%= name %>/index.js
---
import { Container } from 'unstated';

class <%= name %>Container extends Container {
  state = {
    defaults
  };
}

export default <%= name %>Container;
