import React, { useState, useEffect } from "react";
import SwishIcon from "../assets/Swish.png";
import fbIcon from "../assets/fb.png";
import spotifyIcon from "../assets/spotify.png";
import youtubeIcon from "../assets/youtube.png";
import confetti from "canvas-confetti";
import "/src/App.css";
import Quran from "../components/Quran"; // Import the LandingPage component
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function LandingPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [address, setAddress] = useState("Åstorp, Sweden");
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(false);
  const [checkedPrayers, setCheckedPrayers] = useState({});

  const formatTime = time => {
    return time.toLocaleString("Sv", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    fetchPrayerTimes();
    const interval = setInterval(() => {
      setCurrentTime(new Date());

      const now = new Date();
      if (
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0
      ) {
        const resetChecked = {};
        Object.keys(checkedPrayers).forEach(key => {
          resetChecked[key] = false;
        });
        setCheckedPrayers(resetChecked);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddressChange = event => {
    setAddress(event.target.value);
  };

  const fetchPrayerTimes = async () => {
    setLoading(true);
    try {
      const response = await fetchPrayerData();
      const data = await response.json();

      if (data && data.data && data.data.length > 0) {
        const todayPrayerData = data.data[0];
        const timings = todayPrayerData.timings;

        setPrayerTimes({
          Fajr: timings.Fajr,
          Sunrise: timings.Sunrise,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        });

        const initialChecked = {};
        Object.keys(timings).forEach(key => {
          initialChecked[key] = false;
        });
        setCheckedPrayers(initialChecked);
      } else {
        setPrayerTimes({});
        setCheckedPrayers({});
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
    setLoading(false);
  };

  const fetchPrayerData = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const prayerTimesURL = ` https://api.aladhan.com/v1/calendarByAddress/${year}/${month}?address=${encodeURIComponent(
      address
    )}&method=3`;

    return fetch(prayerTimesURL);
  };

  const handlePrayerCheck = prayer => {
    const updatedChecked = {
      ...checkedPrayers,
      [prayer]: !checkedPrayers[prayer],
    };
    setCheckedPrayers(updatedChecked);

    if (updatedChecked[prayer]) {
      // Trigger confetti effect
      const confettiSettings = {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      };
      confetti(confettiSettings);
    }
  };
  return (
    <div className="App">
      <h1>Bönetider Åstorp</h1>
      <div className="digital-clock-container">
        <div className="digital-clock">
          <h2>{formatTime(currentTime)}</h2>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {Object.keys(prayerTimes).length > 0 && (
        <div>
          <h2>Dagens bönetider för {address}</h2>
          <ul className="prayer-times-list">
            {Object.entries(prayerTimes).map(([key, value]) => (
              <li
                key={key}
                className={checkedPrayers[key] ? "checked" : ""}
                onClick={() => handlePrayerCheck(key)}
              >
                {(key === "Fajr" ||
                  key === "Sunrise" ||
                  key === "Dhuhr" ||
                  key === "Asr" ||
                  key === "Maghrib" ||
                  key === "Isha") && (
                  <>
                    <input type="checkbox" checked={checkedPrayers[key]} />
                    <strong>{key}:</strong> {value}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <img className="swish" src={SwishIcon} alt="Swish Icon" />{" "}
      <p>
        Donera med Swish till Mosken- <br /> 123 441 15 83{" "}
      </p>
      <br />
      <br />
      <div className="icons">
        <div className="icon-link">
          <a href="https://www.facebook.com/profile.php?id=100069969767226&locale=sv_SE">
            <img className="fb" src={fbIcon} alt="Facebook" />
          </a>
          <p className="follow-text">Follow us</p>
        </div>
        <div className="icon-link">
          <Link to="/quran">
            <img className="spotify" src={spotifyIcon} alt="Spotify" />
          </Link>{" "}
          <p className="listen-text">Lyssna på Quran</p>
        </div>
        <div className="icon-link">
          <a href="https://www.youtube.com/@QuranForTheHearts">
            <img className="spotify" src={youtubeIcon} alt="YouTube" />
          </a>
          <p className="listen-text">Följ oss</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
