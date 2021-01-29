import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from '../context/firebase';

export default function useContent(target){
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(()=>{
        firebase.firestore().collection(target).get().then((snapshot)=>{
            const allContent = snapshot.docs.map((contentObj)=>(
                {...contentObj.data(),
                docId: contentObj.id,
                
            }));

            setContent(allContent);
        }).catch((error)=>console.error(error));
    },[]);

    return { [target]: content };
}