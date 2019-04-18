define(function() {
    let arr = [

        "窗前明月光",
        "疑是地上霜",
        "举头望明月",
        "低头思故乡"
    ]

    function render(i) {
        return new Promise((resolve, reject) => {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = arr[i];
            setTimeout(resolve, 1000)
        })
    }



    async function fun() {
        for (var i = 0; i < arr.length; i++) {
            await render(i)
        }
    }
    fun();
})