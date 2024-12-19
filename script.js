function redirectToPage(url) {
    window.location.href = url;
}
document.getElementById('derv').onclick = function() {
    redirectToPage('in1.html');
};
document.getElementById('derv2').onclick = function() {
    redirectToPage('in2.html');
};
document.getElementById('derv3').onclick = function() {
    redirectToPage('in3.html');
};
document.getElementById('derv4').onclick = function() {
    redirectToPage('in4.html');
};
document.getElementById('derv5').onclick = function() {
    redirectToPage('in5.html');
};
document.getElementById('derv6').onclick = function() {
    redirectToPage('in6.html');
};


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});



