
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

// local storage mock
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

const currentDate = new Date('01-01-20');

global.localStorage = localStorageMock;
global.Date = class extends Date {
  constructor(date) {
    if (date) {
      return super(date);
    }

    return currentDate;
  }
};

window.URL = {
  ...window.URL,
  createObjectURL: window.URL?.createObjectURL || jest.fn()
};
