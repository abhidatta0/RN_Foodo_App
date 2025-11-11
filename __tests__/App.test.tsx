/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {act,create} from 'react-test-renderer';

test('renders correctly', async () => {
  await act(() => {
    create(<App />);
  });
});