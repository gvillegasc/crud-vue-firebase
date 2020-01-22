// Importar Firebase
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
	'Pegar creenciales de firebase'
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Ya biene por defecto en true y se eliminar en un futuro
// firebaseApp.firestore().settings({
// 	timestampsInSnapshots: true
// });

export default firebaseApp.firestore();
