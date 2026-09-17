document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname.toLowerCase();
    
    // Determine which main nav item should be active based on URL keywords
    let activePage = "";
    
    if (path.includes("art")) {
        activePage = "art";
    } else if (path.includes("writing")) {
        activePage = "writing";
    } else if (path.includes("music") || path.includes("t-carve") || path.includes("omegts") || path.includes("meds") || path.includes("snd") || path.includes("spt") || path.includes("img")) {
        activePage = "music";
    } else if (path.includes("phono")) {
        activePage = "phonography";
    } else {
        activePage = "index"; // default for about/index
    }

    // Build the nav HTML with the correct active class applied
    const navHTML = `
        <nav class="horizontal-nav">
            <a href="index.html" ${activePage === "index" ? 'class="active"' : ''}>about</a> |
            <a href="art.html" ${activePage === "art" ? 'class="active"' : ''}>art</a> | 
            <a href="writing.html" ${activePage === "writing" ? 'class="active"' : ''}>writing</a> |
            <a href="music.html" ${activePage === "music" ? 'class="active"' : ''}>music</a> |
            <a href="phonography.html" ${activePage === "phonography" ? 'class="active"' : ''}>phonography</a>
        </nav>
    `;

    // Insert into the placeholder
    const container = document.getElementById("nav-container");
    if (container) {
        container.innerHTML = navHTML;
    }
});