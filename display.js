class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // display profile im ui
  showProfile(user) {
    this.profile.innerHTML = `
    <div class='card card-body mb-3>
      <div class='row'>
        <div class='col-md-3'>
          <img class='img-fluid mb-2' src='${user.avatar_url}'>
          <a href='${user.html_url}' target = '_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
        </div>
        <div class='col-md-9'>
          <span class='badge badge-primary mr-1'>Public Repos: ${user.public_repos}</span>
          <span class='badge badge-secondary mr-1'>Public Gist(s): ${user.public_gists}</span>
          <span class='badge badge-success mr-1'>Followers: ${user.followers}</span>
          <span class='badge badge-info'>Following: ${user.following}</span>
          <br><br>
          <ul class='list-group'>
            <li class='list-group-item>Company: ${user.organizations_url}</li>
            <li class='list-group-item>Website/Blog: ${user.blog}</li>
            <li class='list-group-item>Location: ${user.location}</li>
            <li class='list-group-item>Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class='page-heading mb-3'>Latest Repos</h3>
    <div id='repos'></div>
    `;
  }

// sjow repos
showRepos(repos) {
  let output = '';

  repos.forEach(repo => {
    output += `
      <div class='card card-body mb-2'>
        <div class='row'>
          <div class='col-md-6'>
            <a href='repo.html_url' target="+blank'>${repo.name}</a>
          </div>
          <div class='col-md-6'>
            <span class='badge badge-primary mr-1'>Stars: ${repo.stargazers_count}</span>
            <span class='badge badge-secondary mr-1'>Watcher(s): ${repo.watchers_count}</span>
            <span class='badge badge-success mr-1'>Fork(s): ${repo.forks_count}</span>
          </div>
        </div>
      </div>
    `
  });
  // output the repositories
  document.getElementById('repos').innerHTML = output;
}

  // show alert message
  showAlert(message, className) {
    // clear remaining alert messages
    this.clearAlert(); 

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    // clear the error message after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
    currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
