const blocks=document.querySelectorAll('.block')

blocks.forEach(block => {
    block.addEventListener('mouseover',function(){this.classList.add('hovered')})
    block.addEventListener('mouseout',function(){this.classList.remove('hovered')})
});
