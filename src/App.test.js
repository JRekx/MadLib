describe("App", () => {
  test("renders MadLibForm and MadLibStory components", () => {
    render(<App />);
    expect(screen.getByTestId("madlib-form")).toBeInTheDocument();
    expect(screen.getByTestId("madlib-story")).toBeInTheDocument();
  });

  test("updates wordData state when handleWordChange is called", () => {
    const { rerender } = render(<App />);
    const initialState = {
      noun: "",
      verb: "",
      color: "",
      adjective: "",
      animal: "",
      story: "",
    };
    expect(screen.getByTestId("word-data")).toHaveTextContent(
      JSON.stringify(initialState)
    );

    rerender(<App />);
    fireEvent.change(screen.getByLabelText("noun"), {
      target: { value: "fox" },
    });
    expect(screen.getByTestId("word-data")).toHaveTextContent(
      JSON.stringify({ ...initialState, noun: "fox" })
    );
  });

  test("clears story when clearStory is called", () => {
    const { rerender } = render(<App />);
    rerender(<App />);

    fireEvent.change(screen.getByLabelText("noun"), {
      target: { value: "fox" },
    });
    fireEvent.click(screen.getByText("Generate Story"));

    expect(screen.getByTestId("madlib-story")).toHaveTextContent(/fox/);

    fireEvent.click(screen.getByText("Clear Story"));

    expect(screen.queryByTestId("madlib-story")).not.toHaveTextContent(/fox/);
  });

  test("changes template when changeTemplate is called", () => {
    const { rerender } = render(<App />);

    const firstTemplate = templates[0];
    const secondTemplate = templates[1];

    rerender(<App />);

    expect(screen.getByTestId("madlib-story")).toHaveTextContent(firstTemplate);

    fireEvent.click(screen.getByText("Change Template"));

    expect(screen.getByTestId("madlib-story")).toHaveTextContent(
      secondTemplate
    );
  });
});
