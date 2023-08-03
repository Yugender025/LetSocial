

const menuItems = document.querySelectorAll('.menu-item');
const msgInbox =document.querySelector('#message-notifications');
const message=document.querySelector('.messages');
const messageInbox=message.querySelectorAll('.message');
const msgSearch = document.querySelector('#message-search');



// ================THEME==========================//
const themeCustom=document.querySelector('#theme');
const themeOpen = document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');
// messages

/*const searchMessages=()=>{
    const val =msgSearch.value.toLowerCase();
    //  console.log(val);
    messageInbox.forEach(chat=>{
        let name=chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
} */



const searchMessages = () => {
    const val = msgSearch.value.toLowerCase();

    messageInbox.forEach(chat => {
        const h5Elements = chat.querySelectorAll('h5');
        let found = false;
        
        h5Elements.forEach(h5 => {
            const name = h5.textContent.toLowerCase();
            if (name.indexOf(val) !== -1) {
                found = true;
            }
        });

        chat.style.display = found ? 'flex' : 'none';
    });
}

// serach chat
msgSearch.addEventListener('keyup', searchMessages);

//remove active class from all items
function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item=>{
   item.addEventListener('click', ()=>{
    changeActiveItem();
    item.classList.add('active');
    if(item.id!='notifications'){
        document.querySelector('.notifications-popup').style.display='none';
    }else{
        document.querySelector('.notifications-popup').style.display='block';
        document.querySelector('#notifications .notification-count').style.display="none";
    }
   })
})


// ====================messages===========================//
msgInbox.addEventListener('click', ()=>{
    message.style.boxShadow='0 0 1rem var(--color-primary)';
    msgInbox.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        message.style.boxShadow='none';
    },2000)
})


//theme custom
const openTheme=()=>{
    themeOpen.style.display='grid';
}


//close modal
const closeTheme=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeOpen.style.display='none';
    }
}
themeOpen.addEventListener('click', closeTheme);
themeCustom.addEventListener('click', openTheme);

//remove active class
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}


fontSizes.forEach(size=>{
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
            if(size.classList.contains('font-size-1')){
                fontSize='10px';
                root.style.setProperty('----sticky-top-left','5.4rem');
                root.style.setProperty('----sticky-top-right','5.4rem');
            }else if(size.classList.contains('font-size-2')){
                fontSize='13px';
                root.style.setProperty('----sticky-top-left','5.4rem');
                root.style.setProperty('----sticky-top-right','-7rem');
            }else if(size.classList.contains('font-size-3')){
                fontSize='16px';
                root.style.setProperty('----sticky-top-left','-2rem');
                root.style.setProperty('----sticky-top-right','-17rem');
            }else if(size.classList.contains('font-size-4')){
                fontSize='19px';
                root.style.setProperty('----sticky-top-left','-5rem');
                root.style.setProperty('----sticky-top-right','-25rem');
            }else if(size.classList.contains('font-size-5')){
                fontSize='22px';
                root.style.setProperty('----sticky-top-left','-10rem');
                root.style.setProperty('----sticky-top-right','-35rem');
            }
         document.querySelector('html').style.fontSize=fontSize;
       
    })
    
    
})
const chageActivecolor=()=>{
    colorPalette.forEach(colorPalette=>{
        colorPalette.classList.remove('active');
    })
}
//change color
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        chageActivecolor();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//background color
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg=()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightnessColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightnessColorLightness);
}
Bg1.addEventListener('click',()=>{
    
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});
Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
});
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
});
