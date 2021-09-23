import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐕": "Dog",
    "🐒": "Monkey",
    "🐁": "Mouse",
    "🦍": "Gorilla",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐈": "Cat",
    "🦁": "Lion",
    "🐹": "Hamster",
    "🐇": "Rabbit",
    "🐨": "Koala",
    "🐼": "Panda",
    "🐀": "Rat"
  };

  const emojiesKnown = Object.keys(emojiDictionary);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleEmojiInputChange = (event) => {
    let emojiName = emojiDictionary[event.target.value];
    if (emojiName) {
      setSelectedEmoji(emojiName);
    } else {
      setSelectedEmoji("failure to recognise this emoji");
    }
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emojiDictionary[emoji]);
  };
  return (
    <div className="App">
      <h1>Animal Emoji Interpreter</h1>
      <input
        onChange={handleEmojiInputChange}
        className="emoji-input"
        placeholder="Enter Emoji Here"
      ></input>
      <h2>{selectedEmoji}</h2>
      <div className="emoji-container">
        <div className="knownEmoji">
          {emojiesKnown.map((emoji, index) => {
            return (
              <span key={index} onClick={() => handleEmojiClick(emoji)}>
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
