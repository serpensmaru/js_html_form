
let x = document.querySelector(".interests_main ul").children

for (let item of x) {
    let btn = item.children[0].querySelector("input")
    btn.addEventListener("change", () => {
        if (btn.checked) {
            let btnPseudoAll = item.querySelectorAll("input")
            for (let inputAll of btnPseudoAll) {
                inputAll.checked = true
            }
        } else {
            let btnPseudoAll = item.querySelectorAll("input")
            for (let inputAll of btnPseudoAll) {
                inputAll.checked = false
            }
        }
    })
}


let listBtn = document.querySelectorAll(".interest__check")
for (let btn of listBtn) {
    btn.addEventListener("change", (e) => {
        if (btn.checked) {
            let child = btn.closest("ul").closest(".interest")
            if (child) {
                child.children[0].querySelector("input").checked = true
            }
        }
    })
}