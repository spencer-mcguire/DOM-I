const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Header //

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// logo.src = 'img/logo.png';

let nav = document.querySelectorAll('a')
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

let navBar = document.querySelector('nav')
let item1 = document.createElement('a')
item1.setAttribute('href', '#')
item1.textContent = 'Blog'
navBar.appendChild(item1)

let item2 = document.createElement('a')
item2.setAttribute('href', '#')
item2.textContent = 'Store'
navBar.prepend(item2)


const navColor= document.getElementsByTagName('a');

Array.from(navColor).forEach(element => {

  element.style.color = 'green';

})

// CTA //

let title = document.querySelector('.cta-text h1');
title.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');
// console.log(title)

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent["cta"]['img-src'])
// headerImg.src = 'img/header-img.png';

// Main Content //

let mainContentTitle = document.querySelectorAll('h4');
mainContentTitle[0].textContent = siteContent['main-content']['features-h4'];
mainContentTitle[1].textContent = siteContent['main-content']['about-h4'];
mainContentTitle[2].textContent = siteContent['main-content']['services-h4'];
mainContentTitle[3].textContent = siteContent['main-content']['product-h4'];
mainContentTitle[4].textContent = siteContent['main-content']['vision-h4'];

const mainContentPara = document.querySelectorAll('p')
mainContentPara[0].textContent = siteContent['main-content']['features-content'];
mainContentPara[1].textContent = siteContent['main-content']['about-content'];
mainContentPara[2].textContent = siteContent['main-content']['services-content'];
mainContentPara[3].textContent = siteContent['main-content']['product-content'];
mainContentPara[4].textContent = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
// middleImg.src = 'img/mid-page-accent.jpg'

// Contact //

const contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

let contactAddress = document.querySelector('.contact p:nth-of-type(1)')
contactAddress.innerHTML = siteContent['contact']['address']

const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = siteContent['contact']['phone']

const contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = siteContent['contact']['email']

//fix line break
contactAddress.innerHTML = "123 Way 456 Street <br /> Somewhere, USA";
// Footer //

const footer = document.querySelector('footer p')
footer.textContent = siteContent ['footer']['copyright']