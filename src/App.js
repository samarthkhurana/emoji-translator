import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction",
  "🏠": "House",
  "🏤": "Post Office",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏫": "School",
  "🏭": "Factory",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "⛪": "Church",
  "⛩️": "Shinto Shrine",
  "🚆": "Train",
  "🚇": "Metro",
  "⛽ ": "Fuel Pump",
  "🚧": "Construction",
  "⚓": "Anchor",
  "⛵": "Sailboat",
  "🪂": "Parachute",
  "🌠": "Shooting Star",
  "🌌": "Milky Way",
  "🌃": "Night with Stars",
  "🌅": "Sunrise"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this emoji in our database!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="app-panel">
        <h1>
          <u>Travel & Places </u>
        </h1>
        <h3>
          Emojis for varied scenes, locations, buildings and modes of transport.
        </h3>
        <p>
          Click on the emojis or search below in the search bar to know the
          meaning of your emojii.
        </p>
        <input onChange={emojiEventHandler} />
        <h2>This is a " {meaning} "</h2>
        <h3>Our Dictionary</h3>

        <ul className="emojiList">
          {emojisWeKnow.map((emoji) => {
            return (
              <li
                className="emoji"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
