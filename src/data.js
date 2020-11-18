import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Dream This Way",
      cover:
        "data:image/jpeg;base64,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",
      artist: "Andrew Reshetar",
      audio: "https://www.soundclick.com/playerV5/panels/audioStream.cfm?songID=14144622",
      color: ["#2d0230", "#aa4438"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Million Nights",
      cover:
        "https://www.setaswall.com/wp-content/uploads/2019/03/Man-Starry-Sky-Hill-Wallpaper-1024x1024-768x768.jpg",
      artist: "Andrew Reshetar",
      audio: "https://www.soundclick.com/playerV5/panels/audioStream.cfm?songID=14144595",
      color: ["#07536b", "#07536b"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    }
  ];
}

export default chillHop;