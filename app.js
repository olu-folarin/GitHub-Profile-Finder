// initialize github
const github = new Github;

// init the UI class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchuser');

searchUser.addEventListener('keyup', (e) => {
  // get the input value
  const userText = e.target.value;

  // to make sure it's not blank
  if(userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // alert('User Not Found');
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // clear the input filed
    ui.clearProfile();
  }

  // e.preventDefault();
});
