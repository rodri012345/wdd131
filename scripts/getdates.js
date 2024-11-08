const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modification: ${lastModified}`;