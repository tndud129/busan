$(function(){
    $(".sns_share").hide();
    $(".share button").click(function(){
        $(".sns_share").stop().toggle();
    });

    const subList = document.querySelectorAll('.sub_menu .sub_menu_list ul li')

    for(let i = 0; i < subList.length; i++){
        subList[i].addEventListener('mouseenter', ()=>{

            for(let j = 0; j < subList.length; j++){
                subList[j].classList.remove('active');
            }
            subList[i].classList.add('active');
        })
        subList[i].addEventListener('mouseleave', ()=>{
            for(let j = 0; j < subList.length; j++){
                subList[j].classList.remove('active');
            }
            subList[subNum].classList.add('active');
        })
    }





});


