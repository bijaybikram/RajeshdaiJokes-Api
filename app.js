let jokesArray = [];
let currentJokeIndex = 0; // To keep track of the current joke

const loadJoke = async () => {
  try {
    const rajeshDaiFetch = await fetch(
      "https://66df3b29de4426916ee3faa5.mockapi.io/api/jokes/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await rajeshDaiFetch.json();

    // store all the jokes in one array

    jokesArray = data.map((jokeItem) => jokeItem.joke);
    console.log(jokesArray);

    // display the first joke initially
    displayJoke();
  } catch (error) {}
};

const displayJoke = () => {
  if (currentJokeIndex < jokesArray.length) {
    document.getElementById("loadingJoke").innerHTML =
      jokesArray[currentJokeIndex];
    currentJokeIndex++;
  } else {
    currentJokeIndex = 0;
  }
};

loadJoke();

document.getElementById("loadJokeBtn").addEventListener("click", loadJoke);
