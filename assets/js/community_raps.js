document.addEventListener("DOMContentLoaded", function () {
  const rapsContainer = document.getElementById("raps-container");
  const prevPageBtn = document.getElementById("prev-page");
  const nextPageBtn = document.getElementById("next-page");

  // Sample data (this should be replaced with real data from the backend)
  const raps = [
    "Dreams to Reality",
    "No Limits",
    "Breaking Chains",
    "Fire in My Soul",
    "Hustle Harder",
    "Nightfall",
    "Against the Odds",
    "Born to Win",
    "Legacy",
    "Unstoppable",
    "Rap Titan",
    "Street Stories",
    "Mic Drop",
    "Stay True",
    "Echoes of the Past",
    "Never Give Up",
    "Rhyme Revolution",
    "Grind Mode",
    "Battle Bars",
    "The Come Up",
    "Midnight Cypher",
  ];

  let currentPage = 0;
  const itemsPerPage = 9;

  function displayRaps() {
    rapsContainer.innerHTML = "";
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedRaps = raps.slice(start, end);

    paginatedRaps.forEach((rap) => {
      const rapCard = document.createElement("div");
      rapCard.classList.add("col-md-4");
      rapCard.innerHTML = `
                  <div class="rap-card">
                      <div class="rap-card-body">
                          <h3 class="rap-title">"${rap}"</h3>
                          <div class="rap-buttons">
                              <a href="view_rap.html" class="btn btn-yellow">View</a>
                              <a href="rate_rap.html" class="btn btn-yellow">Rate</a>
                          </div>
                      </div>
                  </div>
              `;
      rapsContainer.appendChild(rapCard);
    });

    // Update button states
    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = end >= raps.length;
  }

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      displayRaps();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    if ((currentPage + 1) * itemsPerPage < raps.length) {
      currentPage++;
      displayRaps();
    }
  });

  // Initial display
  displayRaps();
});
