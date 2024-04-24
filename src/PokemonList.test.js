import { render, screen, waitFor } from "@testing-library/react";
import PokemonList from "./PokemonList";

describe("PokemonList component", () => {
  it("should render pokemon names when api responds", async () => {
    render(<PokemonList />);
    await waitFor(() => {
      screen.getByText("weedle");
    });
  });
});
