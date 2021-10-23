import {firebase} from '../lib/firebase_config/config'

const useSocialAuth = () => {

    const loginWith = (provider) => {
        return firebase.auth().signInWithPopup(provider)
        .then((res)=>{
            return res.user;
        })
        .catch((err)=>{
            return err;
        })
    }


    return loginWith
}

export default useSocialAuth;
