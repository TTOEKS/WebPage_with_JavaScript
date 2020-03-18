const fresh_doc = document.getElementById("id_refresh");


function refresh() {
    fresh_doc.onclick = function() {
        if (confirm("정말 초기화 하시겠습니까?")) {
            localStorage.clear();
            location.reload();
        }

    }
}

function init() {
    refresh();
}

init();