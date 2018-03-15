---
to: src/store/index.js
inject: true
skip_if: import <%= h.inflection.titleize(name) %>Container
before: ^\s*$
---
import <%= h.inflection.titleize(name) %>Container from './<%= name %>';