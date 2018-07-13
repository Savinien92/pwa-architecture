import * as fire from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
}

const firebase = {
  init: () => {
    fire.initializeApp(config)
  }
}

export default firebase