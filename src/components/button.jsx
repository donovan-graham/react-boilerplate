import React from 'react';
import get from 'lodash/get';

const colors = { primary: 'red', secondary: 'lightgreen' };

export default () => <button style={{ backgroundColor: get(colors, 'secondary'), padding: 10 }}>Boom</button>;
