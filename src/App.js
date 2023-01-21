import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { app } from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [users, setUsers] = useState({});
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  // Signin with google 
  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUsers(user)
        console.log(user)
      })
      .catch(error => console.log(error))
  }

  // Logout 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        const ans = window.confirm('Are you sure, You want ot logout..?')
        if (ans === true) {
          setUsers({})
        }
      })
      .catch(() => setUsers({}))
  }

  // Signup with github 
  const githubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      {
        users.uid ? <button onClick={handleSignOut}>Sign Out</button> :
          <div>
            <button onClick={googleSignUp}>Google</button>
            <button onClick={githubSignUp}>GitHub</button>
          </div>
      }
      <div>
        {
          users.uid && <div>
            <h3>{users.displayName}</h3>
            <p>{users.email}</p>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
