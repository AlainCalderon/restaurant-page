import logo from './img/logo-banner.png'
function initAbout(){
    let aboutDiv = document.createElement('div');
    aboutDiv.classList.add('row','border-0','mx-auto');
    let aboutText = document.createElement('div');
    aboutText.classList.add('col-md-12','p-3');
    let title = document.createElement('h3');
    title.textContent = "About Us"
    title.classList.add('display-4')
    let para = document.createElement('p');
    para.classList.add('lead')
    para.textContent=`L’Oursin opened in 2016 as a French-influenced PNW restaurant and bar. People seemed to like it. Upon forced statewide closures of restaurants, we quickly made a change and have been operating as a market and wine shop ever since. You’ll still find a lot of house-made dinner menu favorites to take home (charcuterie, smoked fish, sauces, cheese, etc) in addition to fresh fish, meat, and vegetables from small farms, an extensive dry goods shelf, and of course lots of wine. We like it so much it’s going to stick around after we’re able to reopen the dining room.

    We have switched up our to-go food offerings for the summer - rather than offering French favorites, we’re slinging fast-casual Southern comfort food as Old Scratch. Burgers, fried chicken sandwiches and more are available to order from our patio every day.
    
    While we plan on reopening as a restaurant as soon as it feels safe to do so, we are currently not offering dine-in service. Both the market, takeaway and delivery are available every day from 12-8pm. Per state mandate, common sense, and general human decency and courtesy, masks are required to enter the market.`;
    aboutText.append(title,para);

    let mapDiv  = document.createElement('div')
    mapDiv.classList.add('col-md-7')
    let imageBottom = new Image();
    imageBottom.src = logo;
    imageBottom.classList.add('img-fluid');
    mapDiv.appendChild(imageBottom);
    let textDiv = document.createElement('div')
    textDiv.classList.add('col-md-5','text-center');
    let info = document.createElement('h5');
    info.textContent = `Open 12-8pm every day.
    1315 E Jefferson St
    Seattle, WA 98122`
    let infoBody = document.createElement('p');
    infoBody.classList.add('custom-text')
    infoBody.textContent = `Find us near the intersection of East Jefferson and 14th Streets, opposite Seattle University’s Championship Field.

    We do not currently offer dine-in service. Our market and to-go food are available all day, with delivery here. Masks are required to enter the market.`
    textDiv.append(info,infoBody);

    aboutDiv.append(aboutText,mapDiv,textDiv);
    return aboutDiv;

}
export default initAbout;