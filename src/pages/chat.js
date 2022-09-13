// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useEffect, useState } from "react";
import ChatBox from "../components/Chatbox";
import { Button } from "../styled";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDG7nDtWKLtXS29UvM6LDzVgazWRJ2_OSI",
  authDomain: "expat-hub.firebaseapp.com",
  projectId: "expat-hub",
  storageBucket: "expat-hub.appspot.com",
  messagingSenderId: "39809052468",
  appId: "1:39809052468:web:9386f6f4e717b607967f61",
});

//for displaying chat and input field
const db = firebaseApp.firestore();

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(" ");

  const query = db.collection("messages").orderBy("createdAt", "desc").limit(5);

  const unsubscribe = () =>
    query.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log("data", data);
      setMessages(data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      db.collection("messages").add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    // Clear input field
    setNewMessage("");
  };

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {messages &&
          messages.map((message) => (
            <ChatBox key={message.id} message={message} />
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: "1px solid #ccc", padding: "8px" }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button type="submit" disabled={!newMessage || newMessage.length > 20}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chat;
