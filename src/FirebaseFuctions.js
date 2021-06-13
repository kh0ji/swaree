
import {auth ,firestore} from "./firebase"



export  var  fetchuser=async()=>{
      var promise = await new Promise(async (r, eror) => {
        
    
          try {
                  auth.onAuthStateChanged(async function  (usr) {
          if (usr) {
            var ref=firestore.collection("users")
            var doc=await ref.where("email","==",usr.email).get()
          
          r({
              email:doc.docs[0].data().email,
              name:doc.docs[0].data().Name,
              img:doc.docs[0].data().img
        })
          } else {
           r(null)
          }
        });
            
          } catch (error) {
            eror(error);
          }
        
      
      });

      return promise;
    };




