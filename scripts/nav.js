(function () {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const root = document.body.dataset.root || ".";
  const href = (path) => (root === "." ? path : `${root}/${path}`);

  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a class="home-button" href="${href("index.html")}">Home</a>
        <nav class="main-nav" aria-label="Main navigation">
          <ul class="menu">
            <li class="menu-item">
              <a class="menu-label" href="${href("resources/index.html")}">Resources</a>
              <ul class="dropdown" aria-label="Resources submenu">
                <li><a href="${href("resources/mining-kit/index.html")}">Resource Subpage 1</a></li>
                <li><a href="${href("resources/food-supplies/index.html")}">Resource Subpage 2</a></li>
              </ul>
            </li>
            <li class="menu-item">
              <a class="menu-label" href="${href("homes/index.html")}">Homes</a>
              <ul class="dropdown" aria-label="Homes submenu">
                <li><a href="${href("homes/starter-house/index.html")}">Home Subpage 1</a></li>
                <li><a href="${href("homes/cliffside-base/index.html")}">Home Subpage 2</a></li>
              </ul>
            </li>
            <li class="menu-item">
              <a class="menu-label" href="${href("farms/index.html")}">Farms</a>
              <ul class="dropdown" aria-label="Farms submenu">
                <li><a href="${href("farms/wheat-farm/index.html")}">Farm Subpage 1</a></li>
                <li><a href="${href("farms/mob-farm/index.html")}">Farm Subpage 2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
})();
