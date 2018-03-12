import firebase from '@firebase/app'
import '@firebase/firestore'

var config = {
  apiKey: 'AIzaSyCOSibZs2qSs2EJrDa6AhUcs3zT3A8AUVg',
  authDomain: 'minicurso-firebase-6ba1d.firebaseapp.com',
  databaseURL: 'https://minicurso-firebase-6ba1d.firebaseio.com',
  projectId: 'minicurso-firebase-6ba1d',
  storageBucket: 'minicurso-firebase-6ba1d.appspot.com',
  messagingSenderId: '609117236909'
}

export const app = firebase.initializeApp(config)

export const db = app.firestore()
