/* global fetch */
import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router';
import Dashboard from './../dashboard';

export default class QuantumIndex extends React.Component {
  render() {
    return (
      <Dashboard
        title='Quantum'
        subtitle='Metrics & Insights'
        className='home'
      >
        <Link to='/quantum/responsiveness/parent'><em>Responsiveness</em>: Parent Input Latency</Link>
        <Link to='/quantum/responsiveness/content'><em>Responsiveness</em>: Content Input Latency</Link>
        <Link to='/quantum/pageload/render'><em>Page Load</em>: First Render</Link>
        <Link to='/quantum/benchmark/pageload'><em>Benchmark</em>: Page Load</Link>
        <Link to='/quantum/benchmark/sm'><em>Benchmark</em>: SM</Link>
        <Link to='/quantum/benchmark/hasal'><em>Benchmark</em>: Hasal</Link>
      </Dashboard>
    );
  }
}