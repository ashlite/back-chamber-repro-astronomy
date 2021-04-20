import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom'

//startup
import '../imports/startup/client'

Meteor.startup(() => {
  render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={'dark'} />
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ChakraProvider>,
    document.getElementById('react-target'));
});

