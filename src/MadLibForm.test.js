import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MadLibForm from "./MadLibForm";

describe("MadLibForm", () => {
  test("calls onWordChange when inputs change", () => {
    const onWordChange = jest.fn();
    render(<MadLibForm onWordChange={onWordChange} />);

    fireEvent.change(screen.getByLabelText("Noun"), {
      target: { value: "fox" },
    });
    expect(onWordChange).toHaveBeenCalledWith("noun", "fox");

    fireEvent.change(screen.getByLabelText("Verb"), {
      target: { value: "jumped" },
    });
    expect(onWordChange).toHaveBeenCalledWith("verb", "jumped");
  });

  test('calls onWordChange with "generate" when button clicked', () => {
    const onWordChange = jest.fn();
    render(<MadLibForm onWordChange={onWordChange} />);

    fireEvent.click(screen.getByText("Generate MadLibs!"));
    expect(onWordChange).toHaveBeenCalledWith("generate");
  });

  test("renders all input fields", () => {
    render(<MadLibForm />);

    expect(screen.getByLabelText("Noun")).toBeInTheDocument();
    expect(screen.getByLabelText("Verb")).toBeInTheDocument();
    expect(screen.getByLabelText("Color")).toBeInTheDocument();
    expect(screen.getByLabelText("Adjective")).toBeInTheDocument();
    expect(screen.getByLabelText("Animal")).toBeInTheDocument();
  });
});
