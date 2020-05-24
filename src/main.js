import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import firebase from "./firebase.js";

Vue.config.productionTip = false

let vm='';

try{
    firebase.auth().onAuthStateChanged(function() {
        //czas trwania sesji
        // Indicates that the state will only persist in the current session or tab, 
        //and will be cleared when the tab or window in which the user authenticated is closed. 
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .catch(function(error) {
            console.error('Session persistence: '+error.code+' '+error.message);
        });
        if(!vm){
            vm = new Vue({
                router,
                render: h => h(App),
            }).$mount('#app')
        }
    });
}
catch(err){
    console.error("Error starting app: ", err);
}
