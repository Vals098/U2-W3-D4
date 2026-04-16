const API_KEY = "WgEAmxpIXv4ZVN2DhzZaBO26HgL6rAvy7UIgo1rTMRsLlKDT59vucRja"

// FIRST FETCH: HAMSTERS
const getImages = function () {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      console.log("RESPONSE", response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("incorrect server response", response.status)
      }
    })
    .then((hamsters) => {
      console.log("HAMSTERS IMG", hamsters)
      // get cards
      const cards = document.querySelectorAll(".card")

      hamsters.photos.forEach((photo, i) => {
        const card = cards[i]

        const img = card.querySelector("img")
        // decide the dimension of the image by .large .medium .small . portrait .landscape ...
        img.src = photo.src.medium
      })
    })
    .catch((error) => {
      console.log(`fetch error: ${error}`)
    })
}

document.getElementById("loadImages").addEventListener("click", getImages)

// SECOND FETCH: TIGERS
const getSecondaryImages = function () {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      console.log("RESPONSE", response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("incorrect server response", response.status)
      }
    })
    .then((tigers) => {
      console.log("TIGERS IMG", tigers)
      // get cards
      const cards = document.querySelectorAll(".card")

      tigers.photos.forEach((photo, i) => {
        const card = cards[i]

        const img = card.querySelector("img")
        // decide the dimension of the image by .large .medium .small . portrait .landscape ...
        img.src = photo.src.medium
      })
    })
    .catch((error) => {
      console.log(`fetch error: ${error}`)
    })
}

document
  .getElementById("loadSecondaryImages")
  .addEventListener("click", getSecondaryImages)

// HIDE BUTTON
const hideButtons = document.querySelectorAll(".hide-btn")

hideButtons.forEach((button) => {
  // change text
  button.textContent = "Hide"
  // add event listener
  button.addEventListener("click", (e) => {
    // get the closest container that has that class
    const closestCard = e.target.closest(".col-md-4")
    // add the class d-none
    closestCard.classList.add("d-none")
  })
})
