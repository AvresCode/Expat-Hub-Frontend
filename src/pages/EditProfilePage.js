import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { editProfileThunk } from "../store/auth/thunks";
import { useNavigate } from "react-router-dom";

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const profile = useSelector(selectUser);

  const [firstName, setFirstName] = useState(profile?.firstName);
  const [lastName, setLastName] = useState(profile?.lastName);
  const [email, setEmail] = useState(profile?.email);
  const [password, setPassword] = useState("");
  const [city, setCity] = useState(profile?.city);
  const [birthDate, setBirthDate] = useState(profile?.birthDate);
  const [gender, setGender] = useState(profile?.gender);
  const [nationality, setNationality] = useState(profile?.nationality);
  const [education, setEducation] = useState(profile?.education);
  const [imageUrl, setImageUrl] = useState(profile?.imageUrl);

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
    setImageUrl(file.url);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "submit works",
      firstName,
      lastName,
      email,
      password,
      city,
      birthDate,
      gender,
      nationality,
      education,
      imageUrl
    );
    dispatch(
      editProfileThunk(
        firstName,
        lastName,
        email,
        password,
        city,
        birthDate,
        gender,
        nationality,
        education,
        imageUrl
      )
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setCity("");
    setBirthDate("");
    setGender("");
    setNationality("");
    setEducation("");
    setImageUrl("");

    navigate("/MyPage");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Edit Profile</Title>
        <form onSubmit={submitForm}>
          <div>
            <label>First Name:</label>
          </div>
          <div>
            {" "}
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
          </div>
          <div>
            {" "}
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
          </div>
          <div>
            {" "}
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
          </div>
          <div>
            {" "}
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>City:</label>
          </div>
          <div>
            {" "}
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label>Date of birth:</label>
          </div>
          <div>
            <div>
              {" "}
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div>
              <label>Gender:</label>
            </div>
            <div>
              {" "}
              <Input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <label>Nationality:</label>
            </div>
            <div>
              {" "}
              <Input
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div>
              <label>Education:</label>
            </div>
            <div>
              {" "}
              <Input
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
            <div>
              <label>Upload photo:</label>
            </div>
            <div>
              {" "}
              <Input type="file" onChange={uploadImage} />
            </div>
            <div>
              <img alt="" width={200} src={imageUrl ? imageUrl : ""} />
              {imageUrl ? (
                <Title style={{ fontSize: 15 }}>Succesfully uploaded!</Title>
              ) : (
                ""
              )}
            </div>
          </div>
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
`;
