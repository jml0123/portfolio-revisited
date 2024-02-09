import Script from 'next/script';
import React from 'react';
import { EmbedData, EmbedType } from './Media.types';
import styles from '../../styles/scss/Media.module.scss';

const Embed: React.FC<{embedData: EmbedData}> = ({embedData}) => {
  const renderEmbed = () => {
    switch (embedData.type) {
      case EmbedType.BANDCAMP:
        return (
          <div className="bandcamp-embed">
            <iframe
              style={{ border: '0', width: '100%', height: '621px' }}
              src={embedData.embedCode}
              seamless
              title="Bandcamp Embed"
            >
              <a href={embedData.externalLink} target="_blank" rel="noopener noreferrer">
                View on Bandcamp
              </a>
            </iframe>
          </div>
        );
      case EmbedType.SOUNDCLOUD:
        return (
          <div className="soundcloud-embed">
            <Script src="https://w.soundcloud.com/player/api.js" strategy="beforeInteractive" />
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={parseSoundcloudEmbedCode(embedData.embedCode)!}
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles['media-content-wrapper--embed']}>
      <div className={styles['media-content-wrapper--data']}>
        <h1 className={styles['embed-name']}>{embedData.name}</h1>
        <span className={styles['embed-release-date']}>{embedData.releaseDate}</span>
      </div>
      {renderEmbed()}
    </div>
  );
};

export default Embed;

function parseSoundcloudEmbedCode(embedCode: string): string | null {
  // Extracting the entire 'src' attribute value from the iframe
  const srcMatch = embedCode.match(/src="([^"]+)"/);

  if (srcMatch && srcMatch[1]) {
    // Extracted src attribute value
    return srcMatch[1];
  }

  // Return null if parsing fails
  return null;
}

// Example usage
const embedCode = '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1726206933&color=%23bcb4a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/plygid" title="plygid (SANTOL33)" target="_blank" style="color: #cccccc; text-decoration: none;">plygid (SANTOL33)</a> · <a href="https://soundcloud.com/plygid/sets/ssh-remixes-1" title="SSH: Remixes" target="_blank" style="color: #cccccc; text-decoration: none;">SSH: Remixes</a></div>';

const embedUrl = parseSoundcloudEmbedCode(embedCode);

console.log(embedUrl);