import { StyledMainContainer } from "../components/Container";
import { StyledTitle } from "../components/Text";
import ProfileImage from "../images/profile.png";

export default function Home() {
  return (
    <StyledMainContainer>
      <div className="flex flex-col items-center justify-center text-xl gap-6">
        <img
          className="w-25 h-25 rounded-full"
          src={`${ProfileImage}`}
          alt="profile"
        />
        <StyledTitle>ALVARO JULIAN TORRES MALLA</StyledTitle>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="flex items-center justify-center gap-5 p-4">
        <a
          className="w-16"
          href="https://github.com/AlvaroJTorres"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </a>
        <a
          className="w-16 bg-white p-3 rounded-full"
          href="https://www.linkedin.com/in/alvaro-julian-torres-malla/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="linkedin"
          />
        </a>
      </div>
    </StyledMainContainer>
  );
}
