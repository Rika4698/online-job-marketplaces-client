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
    // console.log(currentUser);
     if(currentUser){
        // const loggedUser ={email:currentUser.email};
        axios.post('https://online-job-marketplaces-server.vercel.app/jwt', loggedUser,{
            withCredentials:true})
            .then(res => {
                console.log('token response', res.data);
                setLoading(false);
                
            })
     }
     else{
        axios.post('https://online-job-marketplaces-server.vercel.app/logout',loggedUser,{
            withCredentials:true 
        })
        .then(res =>{
            console.log(res.data);
            setLoading(false);
        })
     }
     setUser(currentUser);
     
     });
    
     
     return () =>{
         unSubscribe();
     }  
             
        },[user]);

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //         setUser(currentUser);
    //         setLoading(false);
    
    //         if (currentUser) {
    //             const userEmail = currentUser.email;
    //             const loggedUser = { email: userEmail };
    
    //             try {
    //                 const res = await axios.post('http://localhost:5000/jwt', loggedUser, {
    //                     withCredentials: true,
    //                 });
    //                 console.log('Token set:', res.data);
    //             } catch (error) {
    //                 console.error('Error setting token:', error);
    //             }
    //         } else {
    //             try {
    //                 await axios.post('http://localhost:5000/logout', {}, {
    //                     withCredentials: true,
    //                 });
    //                 console.log('User logged out, token removed');
    //             } catch (error) {
    //                 console.error('Error clearing token:', error);
    //             }
    //         }
    //     });
    
    //     return () => unSubscribe();
    // }, []);
    


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