function validate(){
    var input = document.getElementById("acess-code-input");
    var code = input.value;
    var success = document.getElementById('success');
    var error = document.getElementById('error');

    if (code == "Jc83uW17"){
            success.style.display = "block";
            error.style.display = "none";
            setTimeout(function(){
                success.style.display = "none";
                window.location.assign("https://drive.google.com/open?id=187xPHh6LqML9EV9D_3xsO0IRF99G5Rt4");
            }, 3000);
        } else if (code == "Hf43Ji06"){
            success.style.display = "block";
            error.style.display = "none";
            setTimeout(function(){
                success.style.display = "none";
                window.location.assign("https://drive.google.com/open?id=1vScMEwCK3BgPGs8drJuaU4mwWCpmt4Xa");
            }, 3000);
        } else if (code == "He23rM24"){
            success.style.display = "block";
            error.style.display = "none";
            setTimeout(function(){
                success.style.display = "none";
                window.location.assign("https://drive.google.com/open?id=1OBXF9fN3oRB2BhTGQ-VYWVdAVTdXJJRo");
            }, 3000);
        } else{
            error.style.display = "block";
            input.style.border = '2px solid red';
            setTimeout(function(){
                error.style.display = "none";
                input.style.border = '2px solid transparent';
            }, 3000);
        }
    }
                    