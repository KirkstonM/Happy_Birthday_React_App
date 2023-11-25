import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

function App() {
  return (
    <div
    style={{
      background: "#222"
    }}
    >
      <Routes>
        {
          routes.map((item, i) => {
            return (
              <Route
              key={item.displayName}
              path={item.path}
              element= {<item.element/>}
              exact
              />
            )
          })
        }
      </Routes>
    </div>
  )
}

export default App