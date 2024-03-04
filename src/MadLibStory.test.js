import React from "react";
import { render, screen } from "@testing-library/react";
import MadLibStory from "./MadLibStory";

describe("MadLibStory", () => {
  test("renders story paragraph when words.story is present", () => {
    const words = {
      story: "The quick brown fox jumped over the lazy dog.",
    };

    render(<MadLibStory words={words} />);

    const storyParagraph = screen.getByText(words.story);
    expect(storyParagraph).toBeInTheDocument();
  });

  test("does not render story paragraph when words.story is empty", () => {
    const words = {
      story: "",
    };

    render(<MadLibStory words={words} />);

    const storyParagraph = screen.queryByText(words.story);
    expect(storyParagraph).not.toBeInTheDocument();
  });
});
