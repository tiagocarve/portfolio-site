document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname.toLowerCase();
    
    let activePage = "";
    
    if (path.includes("installations")) {
        activePage = "installations";
    } else if (path.includes("writing")) {
        activePage = "writing";
    } else if (path.includes("music") || path.includes("t-carve") || path.includes("omegts") || path.includes("meds") || path.includes("snd") || path.includes("spt") || path.includes("img")) {
        activePage = "music";
    } else if (path.includes("phonography")) {
        activePage = "phonography";
    } else if (path.includes("video") || path.includes("tsop") || path.includes("silent") || path.includes("triptych")) {
        activePage = "video";
    } else if (path.includes("gigs")) {
        activePage = "gigs";
    } else {
        activePage = "index";
    }

    const navHTML = `
        <nav class="horizontal-nav">
            <a href="index.html" ${activePage === "index" ? 'class="active"' : ''}>about</a> |
            <a href="installations.html" ${activePage === "installations" ? 'class="active"' : ''}>installations</a> | 
            <a href="writing.html" ${activePage === "writing" ? 'class="active"' : ''}>writing</a> |
            <a href="music.html" ${activePage === "music" ? 'class="active"' : ''}>music</a> |
            <a href="phonography.html" ${activePage === "phonography" ? 'class="active"' : ''}>phonography</a> |
            <a href="video.html" ${activePage === "video" ? 'class="active"' : ''}>video</a> |
            <a href="gigs.html" ${activePage === "gigs" ? 'class="active"' : ''}>gigs</a>
        </nav>
    `;

    const container = document.getElementById("nav-container");
    if (container) {
        container.innerHTML = navHTML;
    }
});