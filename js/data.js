let obj = [
    {
        number: "1599",
        subject: "시설 이용 관련 개선 요청 사항 질문입니다.",
        writer: "김**",
        date: "2024-10-14",
        cnt: 16,
        stat: false,
    },
    {
        number: "1598",
        subject: "영도사업소 테니스네트 교체요청합니다.",
        writer: "서**",
        date: "2024-10-05",
        cnt: 50,
        stat: true,
    },
    {
        number: "1597",
        subject: "남부사업소 남부환경체육공원 농구장 그물 교체바랍니다! 농구장 바...",
        writer: "최**",
        date: "2024-10-01",
        cnt: 17,
        stat: true,
    },
    {
        number: "1596",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1595",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1594",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1593",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1592",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1591",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
    {
        number: "1590",
        subject: "테니스코트 예약에 대하여...",
        writer: "이**",
        date: "2024-09-23",
        cnt: 78,
        stat: true,
    },
]

let tableBody = document.querySelector("table tbody");

tableBody.innerHTML = `
    ${obj.map(data => {
        
        return `<tr>
            <td class="num">${data.number}</td>
            <td class="subject">
                <a href="#none" onclick="alert('사용권한이 없습니다.')">${data.subject}</a></td>
            <td class="writer">${data.writer}</td>
            <td class="date">${data.date}</td>
            <td class="cnt">${data.cnt}</td>
            <td class="cnt">
                <span class="${data.stat ? 'stat02' : 'stat01'}">${data.stat ? '완료' : '처리중'} </span></td>
            </tr>`
    }).join('')}

`