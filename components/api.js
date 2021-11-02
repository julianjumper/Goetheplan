// This class gets the JSON of the DSBMobile API from github.com/cyborck/DSBmobileAPI
// Well, not at that second: A dummy object is  initialized as 'plan'.
import React from 'react';
import { Text } from 'react-native';
import { fetchApi } from './api_axios';

const plan2 = fetchApi;
console.log("PLAN2 :: ", plan2);

const plan = require("./plan.json");


export { plan };