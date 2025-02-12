import React, { useEffect, useState } from "react";

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

const About: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mouryachandan");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data: GitHubUser = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div style={{ textAlign: "center", background: "#222",padding: "20px" }}>
      <h1>About Me</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : githubData ? (
        <div>
          <img
            src={githubData.avatar_url}
            alt="GitHub Avatar"
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <h2>{githubData.name}</h2>
          <p>{githubData.bio}</p>
          <p>Followers: {githubData.followers} | Following: {githubData.following}</p>
          <p>Public Repositories: {githubData.public_repos}</p>
          <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">
            Visit My GitHub
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default About;
