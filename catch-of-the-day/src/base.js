import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkwH0XulTlqPaDUv6fTRvDQqeyLxjbTHk",
    authDomain: "cetch-of-the-day.firebaseapp.com",
    databaseURL: "https://cetch-of-the-day.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;