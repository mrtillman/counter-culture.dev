import React, { useEffect, useReducer } from 'react';
import Link from 'next/link';
import { CounterCulture } from 'counter-culture.client';
import KEYS from '../constants/keys';
import SERVERS from '../constants/servers';
import { loadUser } from '../actions/common.actions';
import utils from '../common/utils';
import commonReducer from '../reducers/common.reducer';
import initialState from '../reducers/initialState';

const Header = () => {
  
  const [state, dispatch] = useReducer(commonReducer, initialState);

  const handleToken = (token) => {
    if(!token) return;
    CounterCulture.connect(token);
      sessionStorage.setItem(KEYS.TOKEN_CACHE_KEY, token);
    loadUser()(dispatch);
  }

  const loadProfile = () => {
    const cachedToken = sessionStorage.getItem(KEYS.TOKEN_CACHE_KEY);

    if(cachedToken){
      return handleToken(cachedToken);
    } else if(utils.getQueryParam('logged_in')) {
      fetch(`${SERVERS.DEV}/user/profile`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
      }).then(res => {
        if(res.ok){
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      }).then(profile => handleToken(profile.token))
        .catch(console.log);
    }
  }

  useEffect(loadProfile,[]);

  const signOut = () => {
    sessionStorage.removeItem(KEYS.TOKEN_CACHE_KEY);
    fetch(`${SERVERS.DEV}/user/logout`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
    }).then(res => {
      if(res.ok){
        window.location = `${SERVERS.SECURE}/account/logout?redirect_uri=${encodeURIComponent(SERVERS.DEV)}`;
      } else {
        throw new Error(res.statusText);
      }
    }).catch(console.log);
  }

  return (
    <div>
      {state.user ? (
        <a 
          href="#"
          title="Sign Out"
          onClick={signOut}
        >Sign Out</a>
      ):(
        <Link href='/oauth2/callback'>
          <a title="Sign In">Sign In</a>
        </Link>
      )}
      &nbsp; | &nbsp;
      <Link href='/'>
        <a title="Home">Home</a>
      </Link>
      {state.user && <>
        &nbsp; | &nbsp;
        <Link href={`/register`}>
          <a>Register a new application</a>
        </Link>
        &nbsp; | &nbsp;
        <span>hello, {state.user.name}</span>
      </>}
      <br/><br/>
    </div>
  );
}

export default Header;