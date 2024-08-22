import React from "react";
import webflowLogo from "../../assets/webflow-logo.png";
import relumeLogo from "../../assets/relume-logo.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Container } from "../Container";
import RemySharp from "../../assets/RemySharp.jpg";
import AgnesWalker from "../../assets/AgnesWalker.jpg";
import TravisHoward from "../../assets/TravisHoward.jpg";
import TrevorHenderson from "../../assets/TrevorHenderson.jpg";
import CindyBaker from "../../assets/CindyBaker.jpg";
import HannaNelson from "../../assets/HannaNelson.jpg";
import RosyDean from "../../assets/RosyDean.jpg";
import chrome from "../../assets/chrome.png";
import { Button } from "../Button";
import adminIcon from "../../assets/adminIcon.png";

export const SocialProof = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-5">
        <p className="font-sans leading-7 text-dark-purple w-full text-center font-bold text-5xl ">
          {/* <p className="font-sans leading-7 text-dark-purple w-full text-center font-bold text-3xl"> */}
          Join thousands of job seekers
        </p>
        {/* <div className="flex flex-wrap gap-12 px-4 justify-center">
          {" "}
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
        </div> */}

        <div className="flex flex-wrap gap-12 px-4 justify-center mt-16">
          <AvatarGroup
            max={8}
            sx={{
              "& .MuiAvatar-root": { width: 80, height: 80, fontSize: 24 },
            }} // Adjust avatar size here
            renderSurplus={(surplus) => (
              <span style={{ fontSize: "24px" }}>
                +{surplus.toString()[0]}k
              </span>
            )} // Adjust surplus text size here
            total={4251}
          >
            <Avatar alt="Remy Sharp" src={RemySharp} />
            <Avatar alt="Travis Howard" src={TravisHoward} />
            <Avatar alt="Agnes Walker" src={AgnesWalker} />
            <Avatar alt="Trevor Henderson" src={TrevorHenderson} />
            {/* Add more avatars as needed */}
            <Avatar alt="Cindy Baker" src={CindyBaker} />
            <Avatar alt="Hannah Nelson" src={HannaNelson} />
            <Avatar alt="Rosy Dean" src={RosyDean} />
            <Avatar alt="Rosy Dean" src={RosyDean} />
          </AvatarGroup>
        </div>
        <div className="flex gap-24 mt-16">
          <Button>
            <div className="flex items-center gap-2">
              <img src={adminIcon} alt="Admin Icon" className="w-5 h-5" />
              <span>Start a free trial</span>
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
};
