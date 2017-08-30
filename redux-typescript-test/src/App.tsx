import * as React from 'react';
import Hello from './components/Hello';
import Message from './components/Message';
import './App.css';

class App extends React.Component<object, object> {
  render() {
    return (
      <div>
        <Message />
        <Hello />
      </div>
    );
  }
}

export default App;
