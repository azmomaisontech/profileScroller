// Next Click Event
document.getElementById("next").addEventListener("click", nextProfileDisplay);

// Fake API service
const dataAPI = [
  {
    name: "Moses Aizee",
    age: 27,
    gender: "male",
    lookingfor: "female",
    location: "Lagos, NG",
    occupation: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  },

  {
    name: "Jane Doe",
    age: 23,
    gender: "femle",
    lookingfor: "male",
    location: "Bayelsa, NG",
    occupation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },

  {
    name: "John Doe",
    age: 29,
    gender: "male",
    lookingfor: "female",
    location: "Kaduna, NG",
    occupation: "Unemployed",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];

const profile = nextItem(dataAPI);

nextProfileDisplay();

// display the profile data
function nextProfileDisplay() {
  const datingProfile = profile.next().values;

  if (datingProfile !== undefined) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${datingProfile.name}</li>
  <li class="list-group-item">Age: ${datingProfile.age}</li>
  <li class="list-group-item">Location: ${datingProfile.location}</li>
  <li class="list-group-item">Location: ${datingProfile.occupation}</li>

  <li class="list-group-item">Preference: ${datingProfile.gender} looking for ${datingProfile.lookingfor}</li>
</ul>`;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${datingProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Iterator function
function nextItem(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            values: profiles[nextIndex++],
            done: false
          }
        : { done: true };
    }
  };
}
