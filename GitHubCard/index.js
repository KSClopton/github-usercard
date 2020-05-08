/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


// axios.get('https://api.github.com/users/KSCLopton')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

function makeGitCard(attrs){


  // creating elements
  const cardDiv = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameHead = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const profAddress = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  // creating structure
  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfo)
  cardInfo.appendChild(nameHead)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(profAddress)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  // adding classList and text content
  // cardDiv.classList.add('card')
  // cardInfo.classList.add('card-info')
  // nameHead.classList.add('name')
  // userName.classList.add('username')
  userFollowers.textContent = `Followers: ${attrs.followers}`
  userFollowing.textContent = `Following: ${attrs.following}`
  userBio.textContent = `Bio: ${attrs.bio}`
  profAddress.href = attrs.html_url
  cardImg.src = attrs.avatar_url
  nameHead.textContent = attrs.name
  userName.textContent = attrs.login
  userLocation.textContent = attrs.location
  profAddress.textContent = attrs.html_url

  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  nameHead.classList.add('name')
  userName.classList.add('username')
  
  return cardDiv
  }
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function getGitHub(username){
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      const cards = document.querySelector('.cards')
      const markup = response.data
        const user = makeGitCard(markup)
      cards.appendChild(user)
})
    .then()
}



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
getGitHub('KSClopton');

const followersArray = ['JDMTias','meep-morp', 'garybot','barbaralois','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
function findFriends (friendsArr){
  for(let i = 0; i < friendsArr.length; i++){
    getGitHub(friendsArr[i])
  }
}
findFriends(followersArray);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
