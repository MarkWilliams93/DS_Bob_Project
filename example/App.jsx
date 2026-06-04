import React from 'react';
import { Button } from '../src';
import '../src/styles/typography.css';
import '../src/components/Button.css';

export default function App(){
  return (
    <div style={{padding:20}}>
      <h1 className="ds-h1">Design System Demo</h1>
      <p className="ds-body">This shows the standard text styles and buttons.</p>
      <Button onClick={() => alert('Primary clicked')}>Primary</Button>
      <Button variant="secondary" size="lg" style={{marginLeft:8}}>Secondary</Button>
    </div>
  );
}
