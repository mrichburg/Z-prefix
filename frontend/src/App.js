import './App.css';
import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtYQZf6k5JwljP6eFpFwoP2DjxikNtGKI",
  authDomain: "rant-hub-be6be.firebaseapp.com",
  projectId: "rant-hub-be6be",
  storageBucket: "rant-hub-be6be.appspot.com",
  messagingSenderId: "122825066424",
  appId: "1:122825066424:web:27ea4899f3cf22dd0c714d",
  measurementId: "G-4TTKRCFNP1"
};

const app = initializeApp(firebaseConfig);
//instance of the firebase app
const auth = getAuth(app);

//everything below is a test

const provider = new GoogleAuthProvider()


const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      console.log(result._tokenResponse.idToken)
    })
    .catch((error) => {
      console.log(error)
    })
}

function App() {
  return (
    <div className="sign_in">
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <p>{}</p>
    </div>
  );
}

export default App;
