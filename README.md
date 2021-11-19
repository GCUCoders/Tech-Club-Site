# Web-Dev-Site-GCU-Tech-Club

This is the official repository for the GCU Technology Club Website

All project planning will be taking place here on GitHub.
- Our current admins are Max Weber (@GCUCoding) and Elijah Olmos (@elijaholmos)
- If you have any questions, feel free to reach out in the discord or via email

Below are operational rules/guidelines that should be followed at all times when working on this project

# Branches
> We will be using branches to ensure that work is not overwritten. Below are some general rules for utilizing branches
- **Always code within a branch.**
- Branches should be named by feature first(navbar, design documentation, merch page, etc.)
- If multiple people wish to work on the same feature at the same time, create a sub-branch with the branch name then your name(i.e. navbar-max, navbar-elijah)
- If an attempt to merge a pull request has been sitting for a long time without being reviewed, contact an admin.

# Issues

## Adding Issues

> Issues are how we are going to organize our workflow. Below are instructions for adding an issue:
1. Go to the Issues tab
2. Click "New Issue"
3. Add a title and a description for the issue
4. Add an Assignee/Assignees to assign the issue to someone (or don't if you want the issue to remain open for anyone, however this should be a rare case)
5. Add a Label or Labels to help describe the issue and give others a clearer idea of what's going on with the issue
6. Add an existing project to the Issue. If there is no project that adequately goes with the issue, contact an admin and cancel the issue.
7. Add an existing milestone to the Issue. If there is no milestone that adequately goes with the issue, contact an admin but continue to submit the issue
8. Click "Submit new issue" and the issue will be generated!

## Resolving Issues

> After someone creates an issue, it must be resolved. Below are instructions for doing so:

1. Make a commit that should resolve an active issue(remember to code in a separate branch from main as mentioned above)
2. Create a merge request to request to add your code to the main branch(Should be base:main <- compare:your-branch)
3. Click "Create pull request" once, this should change the interface
4. Assign a reviewer to the merge request. The reviewer should always be one or more of the admins: GCUCoding (preferred for Max) and/or elijaholmos (for Elijah)
5. (Optional) Assign yourself or someone else to the request as an Assignee. 
6. (Optional) Add Labels to the pull request. This is optional because the issue should already have labels
6. Add an existing project to the pull request. If there is no project that adequately goes with the pull request, contact an admin and cancel the issue.
7. Add an existing milestone to the pull request. If there is no milestone that adequately goes with the pull request, contact an admin but continue to submit the issue
8. If possible, link the issue you are resolving to the appropriate pull request. If you are not given the option to do this yet, continue with the instructions
9. Click "Create pull request" to confirm the creation of the pull request
10. On the following page, link the pull request to one or more issues by clicking on the gear icon next to "Linked issues"
11. Once this is completed, the issue will be considered "under review". Either contact an admin for review and approval or wait until they do so on their own.

# Pull Requests

## Creating Pull Requests
> Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch. Below are instructions on how to create pull requests:
- When creating your PR (pull request), title it with a quick summary of the changes that you made
- In the description, you should see text already populated. This is from our repo's PR template; please use it
- Anything encpasulated in an HTML comment `<!-- -->` is treated like a comment and not displayed in the rendered description. Use these comments as guidelines for creating the PR description
- If your PR resolves an issue, be sure to mention that in the description. It is not required for a pull request to resolve an issue, but any PR's that are not related to an issue must have a more detailed description of their changes
- To speed up the reviewal process, it is recommended to request a review from either @GCUCoding or @elijaholmos. This is not required
- After you create the PR, you can view the entire commit history and files changed for your branch. Any changes you make after creating the PR will also appear here
- If your PR has not received a review after 4 business days, reach out to a committee lead in the GCU Tech Discord
