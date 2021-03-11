import 'bootstrap/dist/css/bootstrap.min.css';
import './rest.css';
import MainLogo from './img/logo-banner.png';
import MainThumb from './img/main-img-thmb.jpg';
import MeatThumb from './img/meat-thumb.jpg';
import WineThumb from  './img/wine-home-thumb.jpg';
import WineThumb2 from './img/wine-home-thumb2.jpg';
import Logo from './img/logo-link.png';
import Logo2 from './img/logo-link2.jpg';
import fb from './img/fb.png';
import spot from './img/spotify.png';
import initMenu from './menuTab.js';
import initAbout from './aboutUs.js';
//Main Content and Header
let mainContent = document.querySelector('#content');
mainContent.classList.add('container-md','mx-auto');
//SHITTY FUNCTIONS , REMAKE WHEN FEEL LIKE IT / ITS FUCKING BRUTE FORCE (ALWAYS AUTOMATE TEDIOUS CODE , USE APPEND() AND LOOPS NEXT TIME  FUCK FACE REEEEEEEEEE)
function initHeader(){
    const websiteHeader = document.createElement('div');
    websiteHeader.classList.add('container-md','row','mx-auto');

    const logoWrapper = document.createElement('div');
    logoWrapper.classList.add('col-md-6','mx-auto','p-5')
    websiteHeader.appendChild(logoWrapper);


    const headerImg = new Image();
    headerImg.src = MainLogo;
    headerImg.classList.add('img-fluid','border-0')

    logoWrapper.appendChild(headerImg);
    return websiteHeader;
}

function initNav(){
    let listCont = document.createElement('div');
    listCont.classList.add('container-fluid');

    let navBar = document.createElement('nav');
    navBar.classList.add('nav','bg-light','navbar-light','navbar-expand-lg','justify-content-center','gap-5','p-2','container-fluid');

    let homeTab = document.createElement('a');
    homeTab.classList.add('nav-link','custom-link');
    homeTab.setAttribute('href','#')
    homeTab.setAttribute('id','home')
    homeTab.textContent= 'Home';
    homeTab.addEventListener('click',switchItUp)

    let aboutTab = document.createElement('a');
    aboutTab.classList.add('nav-link','custom-link');
    aboutTab.setAttribute('href','#')
    aboutTab.setAttribute('id','about');
    aboutTab.textContent = 'About Us';
    aboutTab.addEventListener('click',switchItUp)

    let menuTab = document.createElement('a');
    menuTab.classList.add('nav-link','custom-link');
    menuTab.setAttribute('href','#');
    menuTab.setAttribute('id','menu');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click',switchItUp);

   
  //  contactTab.addEventListener('click',);

    listCont.appendChild(navBar);
    navBar.append(homeTab,aboutTab,menuTab);
    return listCont;
}
function switchItUp(event){
    let currEvent = event.target.id;
        switch(currEvent){
            case 'home':
               mainContent.replaceChild(initHome(),mainContent.childNodes[2]);
               break;
            case 'menu':
                mainContent.replaceChild(initMenu(),mainContent.childNodes[2]);
                break;
            case 'about':
                mainContent.replaceChild(initAbout(),mainContent.childNodes[2]);
                break;
        }
}

function initHome(){
    const cardCont = document.createElement('div')
    cardCont.classList.add('border-0','mt-5');

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('row');
   


    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('col-md-5','col-sm-12');
    
    const displayImg = new Image();
    displayImg.src = MainThumb;
    displayImg.classList.add('img-fluid');
 

    const wordWrapper = document.createElement('div');
    wordWrapper.classList.add('col-md-7','col-sm-12');
    //<div class= card-body>
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    
    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title');
    cardTitle.textContent= 'L’Oursin is currently three things:'
    const cardText = document.createElement('p')
    cardText.classList.add('card-text','lead');
    cardText.textContent = `1) A market with natural wine, prepared foods, ready to cook meat and fish, produce from small farms, French cheeses, tinned seafood, oils and vinegars, to-go cocktails, French spirits, chocolates and more.`;
    const cardTextTwo = document.createElement('p');
    cardTextTwo.classList.add('card-text','lead');
    cardTextTwo.textContent = '2) Seattle’s smallest fondue restaurant. You can book one of two tables for our Après Ski experience here; seatings are available at 12, 2, 4 and 6pm.';
    const cardTextThree = document.createElement('p');
    cardTextThree.classList.add('card-text','lead');
    cardTextThree.textContent = `3) A takeaway burger/fried chicken sandwich counter called Old Scratch. Order pickup or delivery here or order in person inside our market.`
    const cardText4 = document.createElement('p');
    cardText4.classList.add('card-text','lead');
    cardText4.textContent = "We’re open from 12-8pm every day, and masks are required for entry. We’re looking forward to being a restaurant and bar again when it’s safe to do so.";

    const imageDiv = document.createElement('div');
    const firstTh = new Image();
    const secTh = new Image;
    const thirdTh = new Image();
    const fourTh = new Image();
    const fiveTh = new Image();
    firstTh.src = MeatThumb;
    secTh.src = WineThumb;
    thirdTh.src = WineThumb2;
    fourTh.src = Logo;
    fiveTh.src = Logo2;
    firstTh.classList.add('img-fluid');
    secTh.classList.add('img-fluid');
    thirdTh.classList.add('img-fluid');
    fourTh.classList.add('img-fluid');
    fiveTh.classList.add('img-fluid');
    imageDiv.classList.add('row','mt-5');
    const imgArrayOne = [firstTh,secTh,thirdTh];
    const imgArrayTwo = [fourTh,fiveTh];
    imgArrayOne.forEach(element => {
        let firstRow = document.createElement('div')
        firstRow.classList.add('col-md-3','mx-auto');
        firstRow.appendChild(element);
        imageDiv.appendChild(firstRow);
    });
    imgArrayTwo.forEach(element => {
        let secRow = document.createElement('div');
        secRow.classList.add('col-md-6','mx-auto','pt-4');
        secRow.appendChild(element);
        imageDiv.appendChild(secRow);
    });


    cardBody.append(cardTitle,cardText,cardTextTwo,cardTextThree,cardText4);
    imgWrapper.appendChild(displayImg);
    wordWrapper.appendChild(cardBody);
    cardDiv.append(imgWrapper,wordWrapper);
    cardCont.append(cardDiv,imageDiv);
    
    return cardCont;
}

function initFoot(){
    const footElem = document.createElement('div');
    footElem.classList.add('container','mt-5','p-5');
    const footDiv = document.createElement('div')
    footDiv.classList.add('row');
    const displayTextDiv = document.createElement('div')
    displayTextDiv.classList.add('col-md-12','mx-auto');
    const p = document.createElement('p')
    p.classList.add('lead')
    p.textContent=" Follow us @loursinseattle on Instagram for updates on in-house specials, new arrivals and more."
    displayTextDiv.appendChild(p);
    
    const footImg = [fb,spot];
    const leftFoot = document.createElement('div');
    leftFoot.classList.add('col-md-6');
    const address = document.createElement('address');
    address.innerHTML = "1315 E Jefferson St., Seattle, WA 98122 <br> Tél. 206.485.7173 <br> info@loursinseattle.com";
    leftFoot.appendChild(address);

    const rightFoot = document.createElement('div');
    rightFoot.classList.add('col-md-6')

    const ol = document.createElement('ul');
   ol.classList.add('list-group','list-group-horizontal')

    footImg.forEach(element =>{
        let li = document.createElement('li');
        li.classList.add('list-group-item','border-0','justify-content-end')
        let link = document.createElement('a')
        link.setAttribute('href','#')
        let image = new Image();
        image.src = element;
        image.classList.add('border-0')
        link.appendChild(image);
        li.appendChild(link);
        ol.appendChild(li);
    });
    rightFoot.appendChild(ol);
    


    footDiv.append(displayTextDiv,leftFoot,rightFoot);
    footElem.appendChild(footDiv);
    return footElem;
}




mainContent.append(initHeader(),initNav());
mainContent.appendChild(initHome());
mainContent.appendChild(initFoot());


