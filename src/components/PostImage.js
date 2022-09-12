import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Image, Title } from "../styled";
import { newImageThunk } from "../store/event/thunks";

export const PostImage = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    data.append("upload_preset", "lbazsi6x");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/df03t7txo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file);
    setImage(file.url);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit works");
    dispatch(newImageThunk(id, image));
    setShowForm(false);
  };

  return (
    <div>
      {" "}
      {showForm && (
        <form onSubmit={submitForm}>
          {" "}
          <label>Select files:</label> <br></br>
          <input type="file" onChange={uploadImage} multiple />
          <div>
            <Image
              src={
                image
                  ? image
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
            />
            {image ? (
              <Title style={{ fontSize: 15 }}>Succesfully uploaded!</Title>
            ) : (
              ""
            )}
          </div>
          <Button type="submit"> Submit</Button>
        </form>
      )}
    </div>
  );
};
