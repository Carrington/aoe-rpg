import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        AoE test FE
      </header>
      <main>
        <Card
          arcana="minor"
          suit="pentacles"
          face="king"
          name="sample_action"
          label="Sample Action"
          type="action"
        />
      </main>
    </div>
  );
}

export default App;
