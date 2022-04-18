import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import tw from "twin.macro";
import { StyledMainContainer } from "../components/Container";
import { StyledTitle } from "../components/Text";

const StyledInput = styled.input`
  ${tw`border-2 border-gray-200 rounded-lg px-2 py-1`}
`;

const StyledTextArea = styled.textarea`
  ${tw`border-2 border-gray-200 rounded-lg px-2 py-1`}
`;

const StyledError = styled.div`
  ${tw`text-sm text-red-600`}
`;

export default function ContactMe() {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function sendEmail() {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <StyledMainContainer>
      <StyledTitle className="p-2 self-center">CONTACT ME!</StyledTitle>
      <form
        ref={form}
        onSubmit={handleSubmit((data) => sendEmail(data))}
        className="flex flex-col py-2 px-4 gap-4"
      >
        <div className="flex flex-col gap-2">
          <label>Full Name</label>
          <StyledInput
            {...register("name", { required: "This field is required" })}
          />
          <StyledError>{errors.name?.message}</StyledError>
          <label>Email</label>
          <StyledInput
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: "Valid email format only",
              },
            })}
          />
          <StyledError>{errors.email?.message}</StyledError>
          <label>Subject</label>
          <StyledInput
            {...register("subject", { required: "This field is required" })}
          />
          <StyledError>{errors.subject?.message}</StyledError>
          <label>Message</label>
          <StyledTextArea
            rows="4"
            {...register("message", { required: "This field is required" })}
          />
          <StyledError>{errors.message?.message}</StyledError>
        </div>
        <button className="rounded-lg p-2 hover:bg-white/25" type="submit">
          Send
        </button>
      </form>
    </StyledMainContainer>
  );
}
