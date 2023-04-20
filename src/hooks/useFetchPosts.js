import { useEffect, useState } from "react";
// Firebase
import { db } from "../firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }, []);
  return posts
}

export default useFetchPosts