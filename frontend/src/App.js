import './App.css';
import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"

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
const auth = getAuth(app);



function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
