'use strict'

const switcher = document.querySelector('.btn');

switcher .addEventListener('click',function(){
    document.body.classList.toggle ('dark-theme')

var classname = document.body.classname;

if(classname =="light theme")  {
    this.textcontent ="dark";
}

else  {
    this.textcontent = "light";
}

});