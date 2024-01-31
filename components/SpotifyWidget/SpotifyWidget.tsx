import { SpotifyWidgetData } from './SpotifyWidget.types';
import styles from '../../styles/scss/SpotifyWidget.module.scss';
import { useRef, useEffect, useState } from 'react';


// TODO: Update widget so it shows album artwork too
const SpotifyNowPlayingWidget: React.FC<{ data: SpotifyWidgetData }> = ({ data }) => {

  const [wavySpans, setWavySpans] = useState<JSX.Element[]>([]);

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

          setWavySpans([...spans]);
        }, index * 19 + delay);
      });
    };

    updateText(`${data.artist} - ${data.track}`);
  }, [data]);

  return (
    <div className={styles['spotify-now-playing-widget']}>
      <a href={data.url} target="_blank">
        <div className={styles['badge']}>
          <p className={styles['badge-details']} style={{ animationDuration: `${7.33 + (data.artist.length + data.track.length) * 0.113}s` }}>
            <span role="img" aria-label="music-note">&nbsp;🎵</span>
            <span id="now-playing" className={styles['now-playing']}>Now Playing: </span>
            <span id="track-info" className={styles['track-info']}>
    {wavySpans}
  </span>          </p>
        </div>
      </a>
    </div>
  );
};

export default SpotifyNowPlayingWidget;