import { StyledMainContainer } from "../components/Container";
import { StyledParagraph, StyledTitle } from "../components/Text";

export default function AboutMe() {
  return (
    <StyledMainContainer>
      <div className="flex flex-col justify-center gap-6">
        <StyledTitle>ABOUT ME</StyledTitle>
        <StyledParagraph>
          I am a Full-Stack Developer, trained in develop and mantain web
          applications, using React as a framework for building responsive and
          interactive web pages and Ruby on Rails for developing functional APIs
          according to the clients requirement.
        </StyledParagraph>
        <StyledParagraph>
          I also have experienced with writign code in Python and developed 2D
          games using C# and Unity.
        </StyledParagraph>
        <StyledParagraph>
          During my time as an organizational psychologist, I learned the
          importance and the need to implement new technologies to deliver
          results faster and efficiently, according to customer needs.
        </StyledParagraph>
      </div>
    </StyledMainContainer>
  );
}
