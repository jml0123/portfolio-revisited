import { SpotifyWidgetData } from './SpotifyWidget.types';
import styles from '../../styles/scss/SpotifyWidget.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';


const SpotifyNowPlayingWidget: React.FC<{ data: SpotifyWidgetData }> = ({ data }) => {
  const [wavyTrackData, setWavyTrackData] = useState<JSX.Element[]>([]);
  const [trackImage, setTrackImage] = useState<string|null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const setFadeIn = () => {
    setIsFadingIn(true);

    const timeoutId = setTimeout(() => {
      setIsFadingIn(false);
    }, 1000); // After 1000ms after animation start, resets fade-in state

    return () => clearTimeout(timeoutId);
  };

  const setFadeOut = () => {
    setIsFadingOut(true);

    const timeoutId = setTimeout(() => {
      setIsFadingOut(false);

      // Trigger updateText after the fade-out animation completes
      updateTrackDataAndDisplay();

      // Trigger fadeIn after the updateText
      setFadeIn();
    }, 2000); // You can adjust the delay for fade-out
    return () => clearTimeout(timeoutId);
  };

  const updateText = (text: string) => {
    let delay = 66;
    const spans: JSX.Element[] = [];

    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        spans.push(
          <span key={index} className={styles['wavy']}>
            {letter}
          </span>
        );

        setWavyTrackData([...spans]);
      }, index * 33 + delay);
    });
  };

  const updateTrackDataAndDisplay = () => {
    let trackData = '';

    if (data.artist) {
      trackData += ` ${data.artist}`;
    }

    if (data.track) {
      trackData += ` : ${data.track}`;
    }

    if (data.album) {
      trackData += ` : ${data.album}`;
    }

    if (data.releaseDate) {
      const year = data.releaseDate.substring(0, 4);
      trackData += ` : ${year}`;
    }

    setTrackImage(data.imageUrl);
    updateText(` ${trackData} `);
  };

  useEffect(() => {
    if (data.url && currentTrackId !== data.url) {
      setCurrentTrackId(data.url);

      if (currentTrackId !== null) {
        setFadeOut();
        return;
      } else setFadeIn();
    }
    if (currentTrackId === data.url) return;
    updateTrackDataAndDisplay();
  }, [data]);

  return (
    data.playing && trackImage ? (
      <div className={`${styles['spotify-now-playing-widget']} ${isFadingIn ? styles['fade-in'] : ''} ${isFadingOut ? styles['fade-out'] : ''}`}>
        <a href={data.url} target="_blank">
          <Tilt
          gyroscope={true}
          transitionSpeed={222}
          transitionEasing='cubic-bezier(0.16, 1, 0.3, 1);'
          >
            <Image
              src={trackImage}
              alt="now-playing-album-art"
              width={75}
              height={75}
              className={styles['album-art']}
            />
          </Tilt>
          <div className={styles['badge']}>
            <span id="now-playing" className={styles['now-playing']}>♫ Now Playing ♫</span>
            <p className={styles['badge-details']} style={{ animationDuration: `${7.33 + (data.artist.length + data.track.length) * 0.113}s` }}>
              <span id="track-info" className={styles['track-info']}>
                {wavyTrackData}
              </span>
            </p>
          </div>
        </a>
      </div>
    ) : <></>
  );
};

export default SpotifyNowPlayingWidget