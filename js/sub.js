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
            console.log(subList[i])
            subList[i].classList.add('active');
        })
        subList[i].addEventListener('mouseleave', ()=>{
            for(let j = 0; j < subList.length; j++){
                subList[j].classList.remove('active');
            }
            subList[subNum].classList.add('active');
        })
        

    }


    // let tableBody = document.querySelector("table tbody");

    // tableBody.innerHTML = `
    //     ${obj.map(data => {
            
    //         return `<tr>
    //             <td class="num">${data.number}</td>
    //             <td class="subject">
    //                 <a href="#none" onclick="alert('사용권한이 없습니다.')">${data.subject}</a></td>
    //             <td class="writer">${data.writer}</td>
    //             <td class="date">${data.date}</td>
    //             <td class="cnt">${data.cnt}</td>
    //             <td class="cnt">
    //                 <span class="${data.stat ? 'stat02' : 'stat01'}">${data.stat ? '완료' : '처리중'} </span></td>
    //             </tr>`
    //     }).join('')}

    // `
    
});


