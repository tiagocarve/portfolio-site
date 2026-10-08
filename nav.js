document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname.toLowerCase();
    
    let activePage = "";
    
    if (path.includes("space")) {
        activePage = "space";
    } else if (path.includes("texts")) {
        activePage = "texts";
    } else if (path.includes("sonics") || path.includes("t-carve") || path.includes("corticose") || path.includes("omegts") || path.includes("meds") || path.includes("snd") || path.includes("spt") || path.includes("img")) {
        activePage = "sonics";
    } else if (path.includes("field") || path.includes("aporee")) {
        activePage = "field";
    } else if (path.includes("lens") || path.includes("tsop") || path.includes("silent") || path.includes("triptych")) {
        activePage = "lens";
    } else if (path.includes("gigs")) {
        activePage = "gigs";
    } else {
        activePage = "index";
    }

    const navHTML = `
    <header>
    <h1 class="site-title"><a href="index.html">João Tiago C Esteves</a></h1>
      <p class="site-tagline">Musician • Writer • Field Recordist • Sound Artist • Developer</p>
      <nav class="horizontal-nav">
          <a href="index.html" ${activePage === "index" ? 'class="active"' : ''}>profile</a> |
          <a href="texts.html" ${activePage === "texts" ? 'class="active"' : ''}>texts</a> |
          <a href="sonics.html" ${activePage === "sonics" ? 'class="active"' : ''}>sonics</a> |
          <a href="field.html" ${activePage === "field" ? 'class="active"' : ''}>field</a> |
          <a href="lens.html" ${activePage === "lens" ? 'class="active"' : ''}>lens</a> |
          <a href="space.html" ${activePage === "space" ? 'class="active"' : ''}>space</a> |
          <a href="gigs.html" ${activePage === "gigs" ? 'class="active"' : ''}>gigs</a>
      </nav>
    </header>
    `;

    const container = document.getElementById("nav-container");
    if (container) {
        container.innerHTML = navHTML;
    }
});