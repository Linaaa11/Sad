function redirectToPage(url) {
    window.location.href = url;
}
document.getElementById('nazad').onclick = function() {
    redirectToPage('index.html');
};

