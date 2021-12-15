function validate(){
    var input = document.getElementById("acess-code-input");
    var code = input.value;
    var success = document.getElementById('success');
    var error = document.getElementById('error');

    if (code === localStorage.getItem('ea91af8f9f7b35bf466115ee732177d7d3abd6df')){
        success.style.display = "block";
        error.style.display = "none";
        setTimeout(function(){
            success.style.display = "none";
            window.location.assign("https://drive.google.com/open?id=187xPHh6LqML9EV9D_3xsO0IRF99G5Rt4");
        }, 3000)
    }
}             