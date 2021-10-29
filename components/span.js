import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
const I = (props) => <Text style={{ fontVariant: 'italic' }}>{props.children}</Text>

export { B, I };