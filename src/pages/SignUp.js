import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [education, setEducation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

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
    console.log("submit works");
    dispatch(
      signUp(
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
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Sign Up</Title>
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
                value={city}
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
              <img
                alt=""
                src={
                  imageUrl
                    ? imageUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
              />
              {imageUrl ? (
                <Title style={{ fontSize: 15 }}>Succesfully uploaded!</Title>
              ) : (
                ""
              )}
            </div>
          </div>
          <br />
          <Button type="submit">Sign Up</Button>
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
