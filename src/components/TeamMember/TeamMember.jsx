import teamPic from "../../assets/team-pic.png";
import linkedinIcon from "../../assets/social-media-icon-1.svg";
import twitterIcon from "../../assets/social-media-icon-2.svg";
import webIcon from "../../assets/social-media-icon-3.svg";
export const TeamMember = ({
  fullName,
  jobTitle,
  description,
  linkedInProfile,
  twitterProfile,
  webPage,
  image
}) => {
  return (
    <div className="flex flex-col items-center gap-6 w-teamImage">
      <img src={image} alt="Team" />
      <div className="flex flex-col gap-1 items-center">
        <div className="font-sans text-xl font-semibold text-dark-purple">
          {fullName}
        </div>
        <div className="font-sans text-lg font-normal text-dark-purple">
          {jobTitle}
        </div>
      </div>
      <div className="font-sans text-base font-normal text-dark-purple text-center max-xl:px-32 max-md:px-14 max-sm:px-7">
        {description}
      </div>
      <div className="flex flex-row gap-3.5">
        {linkedInProfile && (
          <a
            href={linkedInProfile}
            target="_blank"
            rel="noreferrer"
            className="w-socialMediaIcon"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        )}
        {twitterProfile && (
          <a
            href={twitterProfile}
            target="_blank"
            rel="noreferrer"
            className="w-socialMediaIcon"
          >
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
        )}
        {webPage && (
          <a
            href={webPage}
            target="_blank"
            rel="noreferrer"
            className="w-socialMediaIcon"
          >
            <img src={webIcon} alt="Web Icon" />
          </a>
        )}
      </div>
    </div>
  );
};
