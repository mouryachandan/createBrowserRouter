
import { render, screen, waitFor } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";


global.fetch = jest.fn();

const mockGitHubData = {
  avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
  name: "Chandan Mourya",
  bio: "Full Stack Developer",
  followers: 100,
  following: 50,
  public_repos: 10,
  html_url: "https://github.com/mouryachandan",
};

describe("About Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test("displays loading state initially", () => {
    (fetch as jest.Mock).mockImplementation(() =>
      new Promise(() => {}) 
    );

    render(<About />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("fetches and displays GitHub user data", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockGitHubData),
    });

    render(<About />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => screen.getByText("Chandan Mourya"));

    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Followers: 100 | Following: 50")).toBeInTheDocument();
    expect(screen.getByText("Public Repositories: 10")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockGitHubData.avatar_url);
    expect(screen.getByRole("link")).toHaveAttribute("href", mockGitHubData.html_url);
  });

  test("handles API errors gracefully", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false, // Simulate failed API response
    });

    render(<About />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => screen.getByText("Failed to load GitHub data"));

    expect(screen.getByText("Failed to load GitHub data")).toBeInTheDocument();
  });
});
