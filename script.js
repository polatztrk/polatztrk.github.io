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

        const reposList = document.createElement('ul');
        reposList.classList.add('repo-list');

        repos.forEach(repo => {
            const repoItem = document.createElement('li');
            repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}`;
            reposList.appendChild(repoItem);
        });

        reposContainer.appendChild(reposList);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Call the function to fetch and display repositories
fetchAndDisplayRepos();
