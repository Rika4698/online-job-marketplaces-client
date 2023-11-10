/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

import{createUserWithEmailAndPassword,updateProfile,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
  
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
   
    const createUser = (displayName, photoURL,email,password)=>{
        setLoading(true);

        return ( createUserWithEmailAndPassword(auth,email,password))
    .then(result => {
       
        return updateProfile(result.user, {
          displayName: displayName,
          photoURL: photoURL,
        }).then(() => {
          setUser(result.user);
          
          return result;
        });
      });
    };

    const googleSignIn = (value) => {
        setLoading(true);
    return signInWithPopup(auth,googleProvider);
       };

       const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
       };
       const logOut =()=>{
        setLoading(true);
            return signOut(auth);
       }

       useEffect(() =>{
        const unSubscribe= onAuthStateChanged (auth,currentUser =>{
     setUser(currentUser);
     setLoading(false);
     if(currentUser){
        const loggedUser ={email:currentUser.email};
        axios.post('http://localhost:5000/jwt', loggedUser,{
            withCredentials:true})
            .then(res => {
                console.log('token response', res.data);
            })
     }
     });
     
     return () =>{
         unSubscribe();
     }  
             
        },[]);




    const AuthInfo = {
        googleSignIn,
        user,
        loading,
       
        createUser,
        signIn,
        logOut,
     }; 
    return (
        <AuthContext.Provider value={AuthInfo}>{children}

            </AuthContext.Provider>
    );
};

export default AuthProvider;