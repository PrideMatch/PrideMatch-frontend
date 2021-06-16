import firebase from '../firebase_config/firebase_config/config';
const socialMediaAuth = (provider) => {

   return firebase.auth().signInWithPopup(provider).then(res => {
        return res.user;
    }).catch((err) => {
        return err;
    })

}

export default socialMediaAuth;