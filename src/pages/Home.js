import { StyledMainContainer } from "../components/Container";
import { StyledTitle } from "../components/Text";

export default function Home() {
  return (
    <StyledMainContainer>
      <div className="flex flex-col items-center justify-center text-xl gap-6">
        <img
          className="w-25 h-25 rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFfLURNTLQLCw/profile-displayphoto-shrink_800_800/0/1611281569071?e=1654732800&v=beta&t=P1oQDO4ApPZfMrcHG6IhQaJcIssKQ9i4dBtVaxRvbcI"
          alt="profile"
        />
        <StyledTitle>ALVARO JULIAN TORRES MALLA</StyledTitle>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="flex items-center justify-center gap-5 p-4">
        <a className="w-16" href="https://github.com/AlvaroJTorres">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </a>
        <a
          className="w-16 bg-white p-3 rounded-full"
          href="https://www.linkedin.com/in/alvaro-julian-torres-malla/"
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
