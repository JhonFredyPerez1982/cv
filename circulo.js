    function dibujarCirculo(x, y, radio, color) {

        canvas1.strokeStyle = color;
        canvas1.beginPath();
        canvas1.arc(x, y, radio, 2, 2*3.14);
        canvas1.stroke();        
    }
    