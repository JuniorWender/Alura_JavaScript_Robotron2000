function mostraTintas(element) {
    var display = document.getElementsByClassName(element).style.display;

    if(display == "none")
        document.getElementsByClassName(element).style.display = 'block';
    else
        document.getElementsByClassName(element).style.display = 'none';
}
