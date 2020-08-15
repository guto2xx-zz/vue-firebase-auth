import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import firebase from "firebase"

const config = {
  apiKey: "AIzaSyBpMhDVefnFQFi_kBxm4id_cQ1L9jNMEhU",
  authDomain: "vue-firebase-auth-c33e4.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-c33e4.firebaseio.com",
  projectId: "vue-firebase-auth-c33e4",
  storageBucket: "vue-firebase-auth-c33e4.appspot.com",
  messagingSenderId: "490990015892",
  appId: "1:490990015892:web:c0e03295448a0a2c9c2b81",
  measurementId: "G-LGRGTW90R3",
}
firebase.initializeApp(config)

let app = ""

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app")
  }
})
