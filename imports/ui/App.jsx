import React from "react"
import { Meteor } from 'meteor/meteor'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import {
  Box
} from '@chakra-ui/react'
import { Footer } from './component/GlobalComponent'
import GameDb from './pages/gamedb/GameDB'


function LockedRoute({ children, ...rest }) {
  const userName = Meteor.user({fields: {'username' : 1}})
  return (
    <Route
      {...rest}
      render={props =>
        userName != null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  return (
    <>
      <Box pb={12} minH='80vh' >
        <Switch>
          {/* public page */}
          <Route path='/'>
            <GameDb />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path='/userdb'>
            <UserDb />
          </Route>
          <Route path="/host">
            <Host />
          </Route>
          <Route path="/editor">
            <GameEditor />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route> */}

          {/* 404 page route */}
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
          
        </Switch>
      </Box>
      <Footer />
    </>
  );
}
