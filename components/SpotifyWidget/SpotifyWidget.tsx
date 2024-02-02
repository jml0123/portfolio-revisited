import { SpotifyWidgetData } from './SpotifyWidget.types';
import styles from '../../styles/scss/SpotifyWidget.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { IoMusicalNotes } from "react-icons/io5";


// TODO: Update widget so it shows album artwork too
const SpotifyNowPlayingWidget: React.FC<{ data: SpotifyWidgetData }> = ({ data }) => {

  const [wavyTrackData, setWavyTrackData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updateText = (text: string) => {
      let delay = 150;
      const spans: JSX.Element[] = [];

      text.split('').forEach((letter, index) => {
        setTimeout(() => {
          spans.push(
            <span key={index} className={styles['wavy']}>
              {letter}
            </span>
          );

          setWavyTrackData([...spans]);
        }, index * 20 + delay);
      });
    };

    updateText(` ${data.artist} : ${data.track} : album_name : 2021 `);
  }, [data]);

  return (
    <div className={styles['spotify-now-playing-widget']}>
      <a href={data.url} target="_blank">
      <Image 
          src="/img/kenji_hina_album_art.jpeg" 
          alt="now-playing-album-art" 
          width={75} 
          height={75} 
          className={styles['album-art']}
        />
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
  );
};

export default SpotifyNowPlayingWidget;