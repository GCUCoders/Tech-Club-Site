import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

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
    console.log(await getHomepageContent());
	renderHomepageContent(await getHomepageContent());
};

const getHomepageContent = async function () {
	return (await get(ref(db, 'homepage/committees'))).val();
};

const updateCommitteeData = async function (committee_id, data) {
	return await update(ref(db, `homepage/committees/${committee_id}`), data);
};

const renderHomepageContent = function (data = []) {
	document.querySelector('#admin-div').classList.add('hidden');
	document.querySelector('#panel-container').classList.remove('hidden');
	/*
	const title_parent = document.createElement('div');
	title.classList.add('committee-title');
	const 
	title.appendChild()
	document.createElement('div')
	*/
	const card = ({name, description}) => `
      <div>
        <div class="committee-title">
          <input type="text" placeholder="${name}" />
        </div>
        <div class="committee-description">
          <textarea rows="5" cols="25" placeholder="${description}"></textarea>
        </div>
        <div class="delete"><button>Delete</button></div>
        <div class="save"><button>Save</button></div>
      </div>
	`;
	for(const item of data)
		document.getElementById('panel-container').innerHTML += card(item);
};

document.querySelector('#admin-form').addEventListener('submit', login);
