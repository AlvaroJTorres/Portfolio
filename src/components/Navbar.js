import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import styled from "styled-components";
import tw from "twin.macro";

const StyledLink = styled(Link)`
  ${tw`flex items-center gap-2 p-1 hover:bg-white/25`}
`;

export default function Navbar() {
  return (
    <div className="hidden md:flex flex-col gap-4 px-3">
      <StyledLink to="/">
        <AiOutlineHome />
        Home
      </StyledLink>
      <StyledLink to="/aboutme">
        <BsPersonPlus />
        About Me
      </StyledLink>
      <StyledLink to="/portfolio">
        <AiOutlineFolderOpen />
        My Portfolio
      </StyledLink>
      <StyledLink to="/contactme">
        <AiOutlineMail />
        Contact Me
      </StyledLink>
    </div>
  );
}
