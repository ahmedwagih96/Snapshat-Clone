import {
    AttachFile,
    Create,
    Crop,
    MusicNote,
    Note,
    TextFields,
    Timer,
  } from "@mui/icons-material";
function ToolBar() {
  return (
    <div className="preview__toolbarRight">
    <TextFields />
    <Create />
    <Note />
    <MusicNote />
    <AttachFile />
    <Crop />
    <Timer />
  </div>
  )
}

export default ToolBar