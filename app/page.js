// app/page.js
import React from 'react';
import Header from './components/Header';
import Generator from './components/Generator';

const Home = () => (
  <div className="container">
    <Header />
    <main>
      <Generator />
    </main>
  </div>
);

export default Home;

