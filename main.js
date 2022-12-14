function onbuttonclick(){
    var flex = document.getElementById('flex-container')
    if(flex.style.flexDirection == "row"){
        flex.style.flexDirection = "column"
        console.log('column');
    }
    else{
        flex.style.flexDirection = "row"
        console.log('row');

    }
}


    const reshma = document.getElementsByTagName('h3')[0]
    reshma.setAttribute("id", "new")
    const change = document.getElementById('new')
    change.style.color = "red"
   

   

    function onbuttoncreplace(){
        var spann = document.getElementById('span')
        spann.textContent = "Elevation Academy"
      
    }


    var sessii = ""
const settime1 = () => {
    var d = new Date()
    var hr = d.getHours()
    var mi = d.getMinutes()
    var se = d.getSeconds()
   


    
    if (hr >= 12) {
        sessii = 'PM'
    }
    else {
        sessii = 'AM'
    }

    if (hr > 12) {
        hr = hr - 12
    }


    document.getElementById('hour').innerText = hr
    document.getElementById('minute').innerText = mi
    document.getElementById('sec').innerText = se
    document.querySelector('#sessi').innerText = sessii

}
settime1();
setInterval(settime1, 1000)

function onbuttonccontent(){
    const selectvalue = document.getElementById('select').value
    document.getElementById('strong').innerText = selectvalue
    
}