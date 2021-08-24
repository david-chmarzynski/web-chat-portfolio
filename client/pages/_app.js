import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from '../firebase'
import Login from './login'
import Loading from './loading'
import { useEffect } from 'react'
import firebase from 'firebase/app'

// IMPORT STYLES
import '../styles/sass/Chat.scss';

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if(user) {
      console.log(user);
      db.collection("users").doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
        isOnline: true
      }, { merge: true } )
    }
  }, [user])
  
  if(!user) {
    return <Login />
  }
  if(loading) {
    return <Loading />
  }
  return <Component {...pageProps} user={user} />
}

export default MyApp
