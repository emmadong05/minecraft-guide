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
              <a class="menu-label" href="${href("getting-started/index.html")}">Getting Started</a>
            </li>
            <li class="menu-item">
              <a class="menu-label" href="${href("house/index.html")}">House Guide</a>
            </li>
            <li class="menu-item">
              <a class="menu-label" href="${href("farm/index.html")}">Farm Guide</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
})();
