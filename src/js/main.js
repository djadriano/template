import '../styles/index.scss';
import App from './layouts/App.svelte';

var app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

export default app;
