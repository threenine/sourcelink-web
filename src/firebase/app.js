import Firebase from 'firebase/app';
import credentials from './credentials';


const FirebaseApp = Firebase.initializeApp(credentials.config);


// eslint-disable-next-line import/prefer-default-export
export const App = FirebaseApp;
