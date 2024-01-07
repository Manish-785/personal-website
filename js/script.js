const hobbies = document.querySelectorAll('.hobby');
for(let i=0;i<hobbies.length;++i){
    hobbies[i].addEventListener('mouseover',function(){
        this.classList.add('hovered');})
    hobbies[i].addEventListener('mouseout',function(){this.classList.remove('hovered');})
}
