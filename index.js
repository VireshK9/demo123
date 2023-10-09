var buttonLength = document.querySelectorAll(".btn").length;

for (var i= 0; buttonLength; i++){
    document.querySelectorAll(".btn")[i].addEventListener("keypress",function(){
        var content = this.innerHTML;

        switch (content) {
            case "A":
                var a = new Audio('drum.mp3')
                a.play()
                break;
        
            default:
                break;
        }
    })
}