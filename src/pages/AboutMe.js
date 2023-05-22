import { StyledMainContainer } from "../components/Container";
import { StyledParagraph, StyledTitle } from "../components/Text";

export default function AboutMe() {
  return (
    <StyledMainContainer>
      <div className="flex flex-col justify-center gap-6">
        <StyledTitle>ABOUT ME</StyledTitle>
        <StyledParagraph>
          Full-Stack Web Developer with ~1.5 years of experience coding in
          academic and professional environments. Proficient in building complex
          API with Ruby on Rails using PostgreSQL, Trailblazer, Service Objects
          and Doorkeeper.
        </StyledParagraph>
        <StyledParagraph>
          Trained to elaborate, maintain and optimize Web Applications based on
          SPA, using React as framework for the FrontEnd.
        </StyledParagraph>
        <StyledParagraph>
          I've also worked with NodeJS to elaborate APIs and have experience
          building applications in Python and 2D Games with Unity and C#
        </StyledParagraph>
        <StyledParagraph>
          In my previous experience as an organizational psychologist I was able
          to develop my communication skills, my abilities to both work and lead
          teams and improve techniques to organize tasks in order to achieve
          project goals. Also, I learned the importance and the need to
          implement new technologies to deliver results faster and efficiently,
          according to customer needs.
        </StyledParagraph>
      </div>
    </StyledMainContainer>
  );
}
