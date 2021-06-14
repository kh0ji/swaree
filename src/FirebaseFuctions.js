
import {auth ,firestore, storage} from "./firebase"



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




 export  var fetchimg = async (acceptedFiles) => {
      var promise = await new Promise(async (r, eror) => {
        var array = [];
        for (var i = 0; i < Array.from(acceptedFiles).length; i++) {
          try {
            
            let bucketName = "Images";
            var filename = Array.from(acceptedFiles)[i].name.split(".");
            var ext = filename[filename.length - 1];
            let storageRef = storage
              .ref(`${bucketName}/${Date.now()}.${ext}`);
            let upload = await storageRef.put(Array.from(acceptedFiles)[i]);
            
            const downloadURL = await upload.ref.getDownloadURL();
            array.push(downloadURL);
          } catch (error) {
            eror(error);
          }
        }
        r(array);
      });

      return promise;
    }