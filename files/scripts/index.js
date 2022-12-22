const BarButton = document.getElementById("BarButton");
const NavBarPanel = document.getElementById("NavBarPanel");
const UlContent = document.getElementById("UlContent");
const listItems = document.querySelectorAll(".headercontainer__list");
const ContactItem = document.getElementById("ContactItem");
const SubMenuContainer = document.getElementById("SubMenuContainer");
const SubMenuItems = document.querySelectorAll(".headercontainer__sublist");


const AppearElement = (maincontainer , ulcontent , listcontent , arg1 , arg2 , arg3) => {
    maincontainer.className = arg1;
    ulcontent.className = arg2;
    listcontent.forEach((styleItem) => {
        styleItem.className = arg3 ;
    });

}

const DissapearElement = (maincontainer , ulcontent , listcontent , arg1 , arg2 , arg3) => {
    maincontainer.className = arg1 ;
    ulcontent.classList = arg2;
    listcontent.forEach((styleItem) => {
        styleItem.className = arg3;
    });
    BarButton.style.zIndex = "2";
}


BarButton.addEventListener('click', () => {
    const result = NavBarPanel.classList.toggle("navbarpanel");
    BarButton.style.zIndex = "2";
    (result) ? AppearElement(NavBarPanel , UlContent , listItems , "navbarpanel" , "ulcontent" , "listitems")
             : DissapearElement(NavBarPanel , UlContent , listItems ,"headercontainer__navcontainer" , "headercontainer__ul", "headercontainer__list");
    
});

ContactItem.addEventListener("click" , ()=> {
    const result = SubMenuContainer.classList.toggle("submenucontainer");
    (result) ? AppearElement(ContactItem , SubMenuContainer , SubMenuItems , "contactitem" ,  "submenucontainer" , "submenulist" )
             : DissapearElement(ContactItem , SubMenuContainer , SubMenuItems , "headercontainer__list" , "headercontainer__subul" , "headercontainer__sublist");
});