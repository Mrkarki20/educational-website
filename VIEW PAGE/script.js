function openLink(url) {
    window.open(url, '_blank');
}
function openHTML(page) {
    window.location.href = page;
}
function toggleNav() {
    document.querySelector('nav').classList.toggle('show');
}
// Automatically scroll to the About section when the page loads
window.onload = function() {
    var aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};