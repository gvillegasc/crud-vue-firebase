// Importar Firebase
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyBrrY2vjKJpPgx_p00NZYz8D92N6YrpBVE',
	authDomain: 'vue-crud-d2cff.firebaseapp.com',
	databaseURL: 'https://vue-crud-d2cff.firebaseio.com',
	projectId: 'vue-crud-d2cff',
	storageBucket: 'vue-crud-d2cff.appspot.com',
	messagingSenderId: '546102954133',
	appId: '1:546102954133:web:6f2dfa9982ab48c464b39c'
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Ya biene por defecto en true y se eliminar en un futuro
// firebaseApp.firestore().settings({
// 	timestampsInSnapshots: true
// });

export default firebaseApp.firestore();
