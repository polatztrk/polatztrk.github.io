// Your GitHub username
const username = 'polatztrk';

// Number of repositories to display
const numberOfRepos = 5;

// URL to fetch GitHub repositories
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${numberOfRepos}`;

// Function to fetch and display repositories
async function fetchAndDisplayRepos() {
    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();
        const reposContainer = document.getElementById('repos');

        if (repos.length === 0) {
            reposContainer.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        const reposList = document.createElement('div');
        reposList.classList.add('repos-list');

        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');

            const repoTitle = document.createElement('h4');
            repoTitle.textContent = repo.name;

            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description;

            const repoLink = document.createElement('a');
            repoLink.textContent = 'View on GitHub';
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';

            repoCard.appendChild(repoTitle);
            repoCard.appendChild(repoDescription);
            repoCard.appendChild(repoLink);

            reposList.appendChild(repoCard);
        });

        reposContainer.appendChild(reposList);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Call the function to fetch and display repositories
fetchAndDisplayRepos();
