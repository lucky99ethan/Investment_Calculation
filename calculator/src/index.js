import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    'background': 'radial-gradient(#303b37, #1a1f1a)',
    'color': '#e1eeeb',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }]
  },
  '#header': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#header h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  '#user-input': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'maxWidth': [{ 'unit': 'rem', 'value': 30 }],
    'margin': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '4px',
    'background': 'linear-gradient( 180deg, #307e6c, #307e6c)'
  },
  'input-group': {
    'display': 'flex',
    'justifyContent': 'space-between',
    'gap': '1.5rem'
  },
  '#user-input label': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.25 }],
    'fontFamily': '"Roboto Condensed", sans-serif',
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': 'bold',
    'textTransform': 'uppercase'
  },
  '#user-input input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#76c0ae' }],
    'borderRadius': '0.25rem',
    'backgroundColor': 'transparent'
  }
});
