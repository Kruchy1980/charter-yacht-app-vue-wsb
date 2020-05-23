import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import firebase from "./firebase.js";

Vue.config.productionTip = false

let app='';

try{
    firebase.auth().onAuthStateChanged(function(firebaseUser) {
        if(!app){
            app = new Vue({
                router,
                firebase,
                firebaseUser,
                render: h => h(App),
            }).$mount('#app')
        }
    });
}
catch(err){
    console.error("Error starting app: ", err);
}
