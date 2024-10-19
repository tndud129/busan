let obj = [
    {
        number: "1599",
        subject: "시설 이용 관련 개선 요청 사항 질문입니다.",
        writer: "김**",
        date: "2024-10-14",
        cnt: 16,
        stat: true,
    },
    {
        number: "1598",
        subject: "영도사업소 테니스네트 교체요청합니다.",
        writer: "서**",
        date: "2024-10-05",
        cnt: 50,
        stat: false,
    }
]

let tableBody = document.querySelector("table tbody");

tableBody.innerHTML = `
    ${obj.map(data => {
        
        return `<tr>
            <td>${data.number}</td>
            <td>${data.subject}</td>
            <td>${data.writer}</td>
            <td>${data.date}</td>
            <td>${data.cnt}</td>
            <td class="cnt">
                <span class="${data.stat ? 'stat02' : 'stat01'}">${data.stat ? '완료' : '처리중'} </span></td>
            </tr>`
    }).join('')}

`