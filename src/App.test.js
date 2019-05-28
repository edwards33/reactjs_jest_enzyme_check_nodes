import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('contains 1 p element',() => {
    expect(wrapper.find('p').length).toBe(1);
  });
  it('contains class App-header',() => {
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });
  it('contains 2 child elements',() => {
    expect(wrapper.find('ul').children().length).toBe(2);
  });
  it('div has class class App',() => {
    expect(wrapper.find('div').hasClass('App')).toBe(true);
  });
  it('a has text: Learn React',() => {
    expect(wrapper.find('a').text()).toBe('Learn React');
  });
});
