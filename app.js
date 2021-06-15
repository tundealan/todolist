// User profile on click dropdown
const dropClick = document.querySelector('.user-profile span #sortClick');
const profile = document.querySelector('.click-drop');

dropClick.addEventListener('click', function(e){
    if(profile.style.display == 'none'){
        profile.style.display = 'block';
    } else {
        profile.style.display = 'none';
    }
})

// To close the task panel with the id close and open with class bar
const taskPanel = document.querySelector('.left-panel');
const mainPanel = document.querySelector('.main-panel');
const close = document.querySelector('.user-profile span #close');
const open = document.querySelector('.bar');

close.addEventListener('click', function(e){
    if(taskPanel.style.display == 'none'){
        taskPanel.style.display = 'block';
        open.style.display = 'none'
    } else{
        taskPanel.style.display = 'none';
        open.style.display = 'block'
    }
})

open.addEventListener('click', function(e){
    if(taskPanel.style.display == 'none'){
        taskPanel.style.display = 'block';
        open.style.display = 'none'
    } else{
        taskPanel.style.display = 'none';
        open.style.display = 'block'
    }
})
    







// main-panel-properties dropdown function for the blue background icon
const clickDrop = document.querySelector('.dropdown-wrapper span i');
const dropdown = document.querySelector('.dropdown');


    clickDrop.addEventListener('click', function(e){
        if(dropdown.style.display == 'none'){
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    })

//panel-1 a
const mainPanelProps = document.querySelectorAll('.panel-1 a');
const drops = document.querySelector('.panel-drops');



Array.from(mainPanelProps).forEach(function(press){
    press.addEventListener('click', function(e){
        if(drops.style.display == 'none'){
            drops[0].style.display = 'block'
        } else{
            drops[0].style.display = 'none'
        }
        

    })
})


