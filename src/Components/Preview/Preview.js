import "./Preview.css";
import { useEffect } from "react";
// Material UI
import {
  AttachFile,
  Close,
  Create,
  Crop,
  MusicNote,
  Note,
  Send,
  TextFields,
  Timer,
} from "@mui/icons-material";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  resetCameraImage,
  selectCameraImage,
} from "../../features/cameraSlice";
import { selectedUser } from "../../features/appSlice";
// Rex Router
import { useNavigate } from "react-router-dom";
// Firebase
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// Components
import { v4 as uuid4 } from "uuid";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectedUser);

  useEffect(() => {
    if (!cameraImage) navigate("/");
  }, [cameraImage, navigate]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  const sendPost = () => {
    const id = uuid4();

    const storageRef = ref(storage, `posts/${id}`);

    const uploadTask = uploadBytesResumable(storageRef, cameraImage);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const postsCol = collection(db, "posts");
          addDoc(postsCol, {
            image: downloadURL,
            username: user.username,
            read: false,
            profilePic: user.profilePic,
            timestamp: serverTimestamp(),
          });
          navigate("/chats");
        });
      }
    );
  };

  return (
    <div className="preview">
      <Close className="preview__close" onClick={closePreview} />
      <div className="preview__toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="capture preview" />
      <div className="preview__footer" onClick={sendPost}>
        <h2>Send Now</h2>
        <Send className="preview__sendIcon" />
      </div>
    </div>
  );
}

export default Preview;
