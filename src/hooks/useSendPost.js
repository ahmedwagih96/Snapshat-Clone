// React Router
import { useNavigate } from "react-router-dom";
// Firebase
import { storage, db } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// Components
import { v4 as uuid4 } from "uuid";
import useUserSlice from "./useUserSlice";
import useCameraSlice from "./useCameraSlice";
// React Toast
import { toast } from 'react-toastify';


function useSendPost() {
    const navigate = useNavigate();
    const {user} = useUserSlice()
    const {capturedImage} = useCameraSlice()
    const sendPost = () => {
        const id = uuid4();
        const storageRef = ref(storage, `posts/${id}`);
        uploadString(storageRef, capturedImage, "data_url").then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            const postsCol = collection(db, "posts");
            addDoc(postsCol, {
              image: downloadURL,
              username: user.username,
              read: false,
              profilePic: user.profilePic,
              timestamp: serverTimestamp(),
            });
            navigate("/chats");
          }).catch(()=>{
            toast.error("Error, please try again", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
          })
        });;
        })
      };
  return sendPost
}

export default useSendPost