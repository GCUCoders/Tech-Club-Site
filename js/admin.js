import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const app = initializeApp({
	apiKey: 'AIzaSyBUjgwLzmnqM7O3LSfSiIIQQogIvu8XBZc',
	authDomain: 'gcu-tech-club-site.firebaseapp.com',
	databaseURL: 'https://gcu-tech-club-site-default-rtdb.firebaseio.com',
	projectId: 'gcu-tech-club-site',
	storageBucket: 'gcu-tech-club-site.appspot.com',
	messagingSenderId: '1040213454604',
	appId: '1:1040213454604:web:a638bfdfd26e4e7795a329',
});
const auth = getAuth(app);
const db = getDatabase(app);


const login = async function (e) {
    e.preventDefault();
    console.log(e);
    console.log('In login');
    await signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value);
    //console.log(user);	
};

const getHomepageContent = async function () {
	return (await get(ref(db, 'homepage/committees'))).val();
};

document.querySelector('#admin-form').addEventListener('submit', login);
