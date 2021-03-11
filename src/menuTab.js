import pizza from './img/pizza-menu.jpg';
import pancake from './img/pancake-menu.jpg';
import burger1 from './img/menu-burg1.jpg';
import burger2 from './img/menu-burg2.jpg';
import wine from './img/wine-thumbnail.jpg';


function initMenu(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('card','m-3','border-0','p-3');
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('row');
    const images = [pizza,pancake,burger1,burger2,wine];
    const menuDesc = {
        foodTitles:['Pissaladière','Crêpe','Smash Burger','Chicken Burger','Vagrant Wine'],
        foodDesc:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt nec libero ac placerat. Quisque auctor nulla id ipsum lobortis, at faucibus justo euismod.',
        'Indulge yourself in sweets eating our best made crepe. Praesent consectetur mi purus, quis scelerisque dolor malesuada sed.In ornare porttitor tristique.Made by authentic italian broskis',
        'Our smash burger/fried chicken sandwich pop up is going to keep popping until we can get back to regular indoor dining.Vestibulum tortor justo, condimentum eu magna ac, pretium ultricies dolor. Quisque aliquam sed justo vitae laoreet. Integer imperdiet cursus ornare. Duis elementum vel tellus posuere convallis',
        'Donec nisi magna, placerat et molestie at, facilisis mattis ante.Our smash burger/fried chicken sandwich pop up is going to keep popping until we can get back to regular indoor dining',
        'A six bottle box of liquid happiness is $150/month, with six month and annual subscriptions available (at a discount!)'
        ],
    
    };
    images.forEach((element,index) =>{
        let imageDiv = document.createElement('div');
        let textDiv = document.createElement('div');
        imageDiv.classList.add('col-md-5','mx-auto','col-sm-12');
        textDiv.classList.add('d-flex','flex-column','col-md-6','mx-auto','col-sm-12');
        let foodImage = new Image();
        foodImage.src = element;
        foodImage.classList.add('img-thumbnail','border-0');
        let foodTitle = document.createElement('h4');
        foodTitle.classList.add('mx-auto','display-5','text-center','mt-5','cust-title')
        foodTitle.textContent = `${menuDesc.foodTitles[index]}`;
        let foodText = document.createElement('p');
        foodText.classList.add('lead','text-center','mt-3')
        foodText.textContent = `${menuDesc.foodDesc[index]}`;
        imageDiv.appendChild(foodImage);
        let orderBtn = document.createElement('button');
        orderBtn.textContent = "Add Order to Cart"
        orderBtn.classList.add('btn','btn-outline-dark','d-md-block');
        textDiv.append(foodTitle,foodText,orderBtn);   
        menuWrapper.append(imageDiv,textDiv);
    });   
    menuDiv.appendChild(menuWrapper);
    return menuDiv;
}
export default initMenu