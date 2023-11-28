const core = require("@actions/core");
const github = require("@actions/github");

try {
  const githubToken = core.getInput("GITHUB_TOKEN");
  const labelToApprove = core.getInput("LABEL");

  const octokit = github.getOctokit(githubToken);

  const {
    pull_request: { number: prNumber, labels: prLabels },
  } = github.context.payload;

  if (prLabels.find((label) => label.name === labelToApprove)) {
    await octokit.rest.pulls.createReview({
      ...github.context.repo,
      pull_number: prNumber,
      event: "APPROVE",
    });
  }
} catch (error) {
  core.setFailed(error.message);
}
