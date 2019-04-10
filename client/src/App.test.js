import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from '../components/App';



describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders successfully', () => {
    render(<App />);
  })

  it('Foul counter works', () => { 
    const { getByText } = render(<App />);
    const button = getByText(/foul/i);

    fireEvent.click(button);

    getByText(/\d/i);
  });

  it('Hit counter works', () => { 
    const { getByText } = render(<App />);
    const button = getByText(/hit/i);

    fireEvent.click(button);
    
    getByText(/\d/i);
  });

  it('Ball counter works', () => { 
    const { getByText } = render(<App />);
    const button = getByText(/ball/i);

    fireEvent.click(button);
    
    getByText(/\d/i);
  });

  it('Strike counter works', () => { 
    const { getByText } = render(<App />);
    const button = getByText(/strike/i);

    fireEvent.click(button);
    
    getByText(/\d/i);
  });

});


