var pts=0
document.getElementById('pts').innerHTML=(pts)



document.getElementById('b').onclick = function () {
    pts = pts +=1
    document.getElementById('pts').innerHTML=(pts)
    localStorage.setItem('pts', pts)
    document.getElementById('b').style.width=('180px')
    document.getElementById('b').style.margin=('10px')
    setTimeout(function(){
        document.getElementById('b').style.width=('200px')
        document.getElementById('b').style.margin=('0px')
    }, 200);
}


