import { useEffect, useState } from "react";
// Firebase
import { db } from "../firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
// React Toast
import { toast } from "react-toastify";

function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(
      q,
      (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (error) => {
        toast.error("Error, please try again", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    );
  }, []);
  return posts;
}

export default useFetchPosts;
