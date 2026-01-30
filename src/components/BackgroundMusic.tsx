// components/BackgroundMusic.tsx
import { useState, useRef, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import bgMusic from "../assets/boogie-pecan-pie-main-version-41135-02-14.mp3";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log(
          "Autoplay was prevented, waiting for user interaction.",
          err,
        );
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current
          .play()
          .catch((err) => console.log("Playback blocked:", err));
      }
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <>
      <Box>
        <audio ref={audioRef} src={bgMusic} loop autoPlay muted={isMuted} />
        <Tooltip title={isMuted ? "Unmute Music" : "Mute Music"}>
          <Box
            onClick={toggleMute}
            color="inherit"
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: "rgb(28, 209, 0)",
              transition: "all ease 200ms",
              border: "1px solid black",
              boxShadow: "2px 2px 0px black",
              borderRadius: "5px",
              padding: { xs: "6px", md: "4px" },
              "&:hover": {
                cursor: "pointer",
                filter: "brightness(1.1)",
                boxShadow: "3px 3px 0px black",
              },
              "&:active": {
                transform: "translate(1px, 1px)",
                boxShadow: "1px 1px 0px transparent ",
              },
            }}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </Box>
        </Tooltip>
      </Box>
    </>
  );
};

export default BackgroundMusic;
