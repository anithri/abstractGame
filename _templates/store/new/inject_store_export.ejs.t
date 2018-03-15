---
to: src/store/index.js
inject: true
skip_if: <%= h.inflection.titleize(name) %>
after: export default \[
---
  <%= h.inflection.titleize(name) %>Container,