/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

import{createUserWithEmailAndPassword,updateProfile,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import axios from "axios";

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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail};
    
     if(currentUser){
        // const loggedUser ={email:currentUser.email};
        axios.post('https://online-job-marketplaces-server.vercel.app/jwt', loggedUser,{
            withCredentials:true})
            .then(res => {
                console.log('token response', res.data);
            })
     }
     else{
        axios.post('https://online-job-marketplaces-server.vercel.app/logout',loggedUser,{
            withCredentials:true 
        })
        .then(res =>{
            console.log(res.data);
        })
     }
     setUser(currentUser);
     setLoading(false);
     });
    
     
     return () =>{
         unSubscribe();
     }  
             
        },[user]);




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