function getSectMembers(url) {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);


        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

window.onload = function () {
    getSectMembers('https://api.github.com/orgs/kysect/members')
        .then(response => JSON.parse(response))
        .then(data => setTimeout(() => { 
            document.getElementsByClassName('loading-gif')[0].remove();
            document.getElementsByTagName('article')[0].innerHTML += getMembersList(data);
        }, 3000))
        .catch(error => console.error(error));
}

function getMembersList(list) {
    result = '<ul>';
    for (let index in list) {
        result += '<li>';
        result += list[index].login;
        result += '</li>';
    }
    result += '</ul>';

    return result;
}