# Contributing to AdFriend
Thank you for your interest in contributing to AdFriend! We welcome contributions to improve the project and make it more useful for replacing ads on webpages with more positive content. Please follow the guidelines below to ensure a smooth process for everyone involved.

# Contributing Guide

This guide outlines our branching strategy, commit strategy, and push/pull strategy to ensure smooth and efficient collaboration.

## Branching Strategy

We use a **feature-branch** workflow to keep our `main` branch stable and ready for production.

### **Branches:**
- **`main`**: The stable branch that always contains production-ready code.
- **`dev`**: The integration branch for testing features before they are merged into `main`.
- **`feature/<feature-name>`**: Branches for individual features, prefixed with `feature/`.
- **`bugfix/<bug-name>`**: Branches for fixing bugs, prefixed with `bugfix/`.
- **`hotfix/<hotfix-name>`**: Branches for urgent fixes in production, prefixed with `hotfix/`.

### **Branching Process:**
1. **Create a Feature Branch**: 
   - Branch off from `dev` using a descriptive name.
   - Example: `feature/database-models-schema`, `bugfix/fix-database-error`.

2. **Work on Your Feature**:
   - Implement your feature or bugfix in the feature branch.
   - Keep your branch focused on a single feature or fix.

3. **Merge to `dev`**:
   - Once the feature is complete and tested, open a Pull Request (PR) to merge into `dev`.

4. **Release to `main`**:
   - After all features are integrated and tested in `dev`, create a PR to merge into `main`.

## Commit Strategy

We follow a **consistent commit message format** to maintain clear and informative commit history.

### **Commit Message Format:**
- **Type of Change**: A short description of the change, followed by the issue number and a more detailed explanation if necessary.
- **Example**:
- feat (#3): Implement Socket.IO for real-time game updates
- fix (#15): Resolve issue with database connection timeout
- docs (#28): Update README with setup instructions

### **Types of Changes:**
- **`feat:`** A new feature.
- **`update:`** Improve existing functionality
- **`fix:`** A bug fix.
- **`docs:`** Documentation updates.
- **`style:`** Code style changes (formatting, etc.).
- **`refactor:`** Code refactoring without changing functionality.
- **`test:`** Adding or updating tests.
- **`chore:`** Maintenance tasks (updating dependencies, etc.).

### **Commit Best Practices:**
- **Atomic Commits**: Make small, self-contained commits that do one thing.
- **Write Clear Messages**: Clearly explain the intent of the commit.
- **Use Present Tense**: Write commit messages in the present tense (e.g., "Add feature" instead of "Added feature").

## Push/Pull Strategy

To keep our repository in sync and avoid conflicts, we follow a disciplined push/pull strategy.

### **Pulling Changes:**
1. **Pull Before You Start**:
 - Before starting new work, pull the latest changes from `dev`.
 - Command: `git pull origin dev`

2. **Resolve Conflicts Early**:
 - If there are conflicts, resolve them as soon as possible to avoid integration issues later.

### **Pushing Changes:**
1. **Commit Frequently**:
 - Commit your work locally as you progress.

2. **Push to Your Feature Branch**:
 - Push your commits to the corresponding feature branch on GitHub.
 - Command: `git push origin feature/<feature-name>`

### **Merging Changes:**
1. **Open a Pull Request (PR)**:
 - Once your feature is complete, open a PR to merge into `dev`.
 - Request at least one team member to review your PR.

2. **Merge After Approval**:
 - Only merge the PR after it has been reviewed and approved.
 - Squash and merge commits if necessary to keep the history clean.

3. **Rebase if Necessary**:
 - If there are conflicts, rebase your branch against `dev` before merging.
 - Command: `git rebase dev`

## Final Notes

- **Communication is Key**: Use our communication platform to discuss any issues, blockers, or significant changes.
- **Stay Updated**: Regularly sync your branches with the latest changes from `dev` to avoid large merge conflicts.
- **Ask for Help**: If you're unsure about anything, don't hesitate to reach out to the team.
