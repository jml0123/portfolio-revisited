import writeUp from "../../../components/WriteUp/WriteUp"
import WriteUpHeader from "../../../components/WriteUp/WriteUpHeader";
import styles from '../../../styles/scss/WriteUp.module.scss'; 
import sharedStyles from '../../../styles/scss/Shared.module.scss';


// TODO: Add share sheet component
function AudioHijack() {
  return(
    <div>
      <WriteUpHeader
        title="Prototyping a mixed reality music player"
        category="Mixed Reality (AR/VR)"
        description="'Audio Hijack' is an experiment built with Unity, envisioning what the future of wearables and music listening can look like in mixed reality"
        backgroundColor="#F094DF"
      ></WriteUpHeader>

        <p><span>Music is a rich expression, digitally consolidated into a waveform, album art, and text data. What if we can build on top of that experience to bring out more of it's intended qualities?</span></p>
          <div className={styles['write-up-img']}>
          <img src='/img/dev-notes/audio-hijack/audio-hijack-inspo.png'></img>
          <span className={styles['write-up-img--caption']}>Style Inspiration</span> 
        </div>

        <p>
            When we started the prototyping phase of XR Bootcamp in fall of last year, I was deep into crate digging for a few upcoming sets
             (including an amazing b2b @ <a href="https://ra.co/events/1749821?returnUrl=%2Fdj%2Fspeckledegg" target="_blank">elsewhere Zone One</a> last year with otugi,
            a phenomenal music producer and cinematographer).
            Commuting around the city was fitting time to have a healthy stream of audio, which also gave some life to idle moments sitting on the bus or walking down a few blocks. At the time, I was also seeing articles about the upcoming Vision Pro release, and something about Ray Ban AR glasses, 
            and I thought -- "what would the listening experience look like in a world of wearables and mixed reality?". 
            <br/><br/>
            Music listening is a focused activity, but not like movies or games that requires direct attention. 
            With the listening experience having both of those passive and active qualities, what would an interface for an XR music experience look like?
        </p>

        <div className={styles['write-up--iframe']}>
          <iframe width="100%" height="433" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F33lJqMlOmudCLFQ2r9gQXU%2FAudioPassthrough%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DLH4SC1UJdkdriqxe-1"></iframe>
          <span className={styles['write-up-img--caption']}>XR Music Player UI concept</span> 
        </div>
  
          I thought a music player in augmented reality would enrich the intended experience of the work, but still let the listener focus on their direct surroundings; a heads-up-display (HUD) in a first-person experience. The imagined concept blended the understated, dreamy and cooly-optimistic tones of Gen-X soft club with a forward-looking, suggestively "cybernetic" feel -- your reality was slowly being taken over by the art. 
          Audio hijack.  
          <br/><br/>
          On top of work, I had around a few hours to a day to make the prototype concept. Using Unity and a Quest 2, I wanted my basic prototype to:

            <ul>
              <li>
                Work with the Passthrough API
              </li>
              <li>
                Show song and artist data
              </li>
              <li>
                View a 3D visual or artwork related to the song, similar to Spotify Canvas
              </li>
            </ul>
   
          I didn't get to fully flesh out the player prototype, and only built the core "experience" of listening to music in XR. 
          Some of my stretch goals included audio-reactivity (your perceived environment changing with the sound) integration with Spotify API for actual data, and hand tracking with the Oculus SDK for added interactivity (e.g. pinch-out to view more info on the artist). And if this were to be a real thing, an actual music player UX with previous and skip.

          Below is the result of the experiment:


          <div className={styles['write-up--iframe']}>
            <div className={sharedStyles['aspect-16-9']}>
            <iframe className={sharedStyles['responsive-iframe']} 
            src="https://file.notion.so/f/f/3e00298e-a22f-478b-999a-30b7f8cdb74e/fe804235-7325-41fd-98b4-7e200b29eeee/PassThroughv0Demo.mp4?id=cd7bc1e6-a71e-4cf7-a136-04cdb57f7202&table=block&spaceId=3e00298e-a22f-478b-999a-30b7f8cdb74e&expirationTimestamp=1713816000000&signature=jsG-ygRDXgLCju1nY5nK78Hw-L2FwRTSe1Mo7NiLGss&downloadName=PassThroughv0Demo.mp4">
           </iframe>
           </div>
          <span className={styles['write-up-img--caption']}>v.0 Audio Hijack</span> 
        </div>

          
        <div className={styles['write-up--footer']}>
            View more:
          <a href="https://github.com/jml0123/audio_hijack_xr" target="_blank">Repo</a> 
        </div>
          

    </div>
  )
};

export default writeUp(AudioHijack)


/*

      <div className={styles['write-up-coverimg']} style={{ backgroundImage: `url('/img/artwork/bk_night.webp')`}}>
        </div>
*/