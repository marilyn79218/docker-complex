import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // It will cause a creash as the App component is now attempts to render out the <Fib/>, 
  // where it'll make a request to our api-server, so we have to comment it out temporarily.

  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
