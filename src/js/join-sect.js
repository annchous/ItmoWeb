function onFormSubmit() {
    let name = document.getElementById("name").value;
    let tg_username = document.getElementById("tg_username").value;
    let pr_link = document.getElementById("pr_link").value;

    alert(`Молодец, ${name}! Ожидай фидбек по заданию :3`);

    let now = new Date();
    let submit_info = { name, tg_username, pr_link };
    localStorage.setItem(now.toLocaleString(), JSON.stringify(submit_info));
}

window.onload = function () {
    const submits = { ...localStorage };

    for (let submit in submits) {
        let submit_info = JSON.parse(localStorage[submit]);
        document.getElementsByClassName("prev-submits")[0].innerHTML += generateSubmit(submit, submit_info);
    }
}

function generateSubmit(date, submit_info) {
    let result =  `<p>`;
    result += `<b>Дата: </b>${date}\t`;
    result += `<b>Имя: </b>${submit_info.name == "" ? "не указано" : submit_info.name}\t`;
    result += `<b>Телеграм: </b>${submit_info.tg_username == "" ? "не указано" : submit_info.tg_username}\t`;
    result += `<b>Пулл-реквест: </b>${submit_info.pr_link == "" ? "не указано" : submit_info.pr_link}\t`;
    result += `</p>`;

    return result;
}