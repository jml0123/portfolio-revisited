import { GridItemData } from "../../components/Grid/Grid.types";


export const projectsGridData: GridItemData[] = [
    {
        title: "Indie Pin",
        description: "Indie Pin is a way to promote independent artists around your area. Combines mapbox-gl, Spotify API and GeoJSON data to create an interactive heatmap of up and coming artists around the globe. Explore the world to discover new music. Login with Spotify to pin new artists to the map.",
        tech: ["mapbox-gl", "React.js", "Node.js", "Express.js", "PostgreSQL", "Spotify API", "oAuth2"],
        imageUrl: "img/indiepin_tutorial.gif",
        liveUrl: "https://indie-pin-client.jml0123.vercel.app/",
        repoUrl: "https://github.com/jml0123/indie-pin-client",
    },
    {
        title: "GIF Lyrics Generator",
        description: "Natural Language Processing + GIFS + Song Lyrics = fun little web app",
        tech: ["SCSS", "JavaScript", "Compromise", "GIPHY"],
        imageUrl: "img/GIF_Lyrics2.png",
        liveUrl: "https://miguel-lorenzo.dev/gif-lyrics-generator",
        repoUrl: "https://github.com/jml0123/gif-lyrics-generator",
    },
      {
        title: "Start a 🔥",
        description: "A platform to make social causes more personal through SMS notifications and resource sharing. This is a way for thought leaders to reach activists beyond traditional social media. Utilizes CRON jobs and Twilio API to queue and send text messages.",
        tech: ["Twilio", "Node.js", "React.js", "Express.js", "PostgreSQL", "JWT Auth", "bcrypt"],
        imageUrl: "img/MessageScheduled.png",
        liveUrl: "https://saf-textapp-client.jml0123.vercel.app/",
        repoUrl: "https://github.com/jml0123/saf-api",
      },
      {
        title: "Ambient Music Quiz",
        description: "Single Page quiz app built as a part of the Thinkful Software Development Bootcamp.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "img/ambient1-min.png",
        liveUrl: "https://miguel-lorenzo.dev/ambient-music-ultimate-q/",
        repoUrl: "https://github.com/jml0123/ambient-music-ultimate-q",
      },
      {
        title: "Fractal Generator",
        description: "Playing around with html canvas, paper.js library, css blend-modes and blob objects. Takes user input and converts into a repeating fractal pattern, with plenty of options to modify output.",
        tech: ["HTML", "CSS", "JavaScript", "paper.js"],
        imageUrl: "img/fractal2.png",
        liveUrl: "https://miguel-lorenzo.dev/fractal-generator/",
        repoUrl: "https://github.com/jml0123/fractal-generator",
      },
      {
        title: "juhnmk.com",
        description: "Lo-fi landing page for fictional techno artist made during NYU Courant’s Web Development I class.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "img/juhnmk2-min.png",
        liveUrl: "https://miguel-lorenzo.dev/juhnmk.com/",
        repoUrl: "https://github.com/jml0123/juhnmk.com",
      },
      {
        title: "intergalactic.love",
        description: "One of my first projects, a minimalist art portfolio for D.C. based multimedia artist, Armin Kabiri",
        tech: ["HTML", "CSS", "JavaScript", "jQuery"],
        imageUrl: "img/intergalactic4-min.png",
        liveUrl: "https://miguel-lorenzo.dev/intergalactic.love/",
        repoUrl: "https://github.com/jml0123/intergalactic.love",
      },
      {
        title: "Heat.wav",
        description: "Heat.wav is a location based music discovery platform currently undergoing beta testing on TestFlight. Beyond product development, my technical contributions include developing the Heat.wav Flutter app, the internal dashboard, and automated message functionalities using Twilio API.",
        tech: ["Flutter", "React", "Node.js"],
        imageUrl: "img/heatwav5-min.png",
        liveUrl: "https://heatwav.co",
      },
      {
        title: "Recombinators.com",
        description: "Landing page for Boutique Strategy Consulting firm, Recombinators built using WebFlow including a customized instance of Google Maps using Maps Javascript API",
        tech: ["WebFlow", "JavaScript", "Maps API"],
        imageUrl: "img/recombinators1-min.png",
        liveUrl: "https://recombinators.com",
      },
];

