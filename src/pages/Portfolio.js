import { useReducer } from "react";
import { StyledMainContainer } from "../components/Container";
import { StyledTitle } from "../components/Text";
import { STORE } from "../data/store";

const initialState = {
  index: 0,
  size: STORE.length - 1,
};

function indexReducer(state, action) {
  const { index, size } = state;

  switch (action.type) {
    case "increase":
      return {
        ...state,
        index: index === size ? index : index + 1,
      };
    case "decrease":
      return {
        ...state,
        index: index === 0 ? 0 : index - 1,
      };
    default:
      throw new Error();
  }
}

export default function Portfolio() {
  const [state, dispatch] = useReducer(indexReducer, initialState);
  const project = STORE[state.index];

  return (
    <StyledMainContainer>
      <StyledTitle>MY PORTFOLIO</StyledTitle>
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl">{project.title}</h3>
          <div className="flex gap-4 justify-center">
            <button onClick={() => dispatch({ type: "decrease" })}>&lt;</button>
            <div className="w-2/3 relative">
              <div className="bg-black w-full h-full absolute grid grid-cols-2 items-center justify-center p-2 lg:p-10 gap-6 opacity-0 hover:opacity-75">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border-2 border-coolGray-600 bg-coolGray-600 rounded-full p-2 text-center"
                  >
                    <p className="text-white">{tag}</p>
                  </div>
                ))}
              </div>
              <img
                className="object-contain"
                src={`${project.image}`}
                alt={project.title}
              />
            </div>
            <button onClick={() => dispatch({ type: "increase" })}>&gt;</button>
          </div>
          <div>{project.description}</div>
          <div className="flex gap-6">
            <a href={`${project.deploy_link}`}>
              <img
                className="w-16"
                src={project.deploy_icon}
                alt="deploy site icon"
              />
            </a>
            <a href={`${project.repo_link}`}>
              <img
                className="w-16"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </StyledMainContainer>
  );
}
