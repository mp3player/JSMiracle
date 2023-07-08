class Draw{
    // clear the canvas
    static mask(){
        let pen = Draw.pen;
        pen.save();
        pen.fillStyle = 'black';
        pen.fillRect(-WIDTH / 2,-HEIGHT / 2,WIDTH,HEIGHT);
        pen.restore();
    }
    //draw line according to the points
    static drawLine(lines , color = COLOR , lw = LW){
        let pen = Draw.pen;
        pen.save();
        pen.strokeStyle = color;
        pen.lineWidth = lw;
        pen.beginPath();
        pen.moveTo(...lines[0]);
        for(let i = 1 ; i < lines.length ; ++ i){
            pen.lineTo(...lines[i]);
        }
        pen.stroke();
        pen.restore();
        
    }
    // draw circle 
    static drawCircle(x,y , r , color = COLOR , lw = LW){
        let pen = Draw.pen;
        pen.save();
        pen.strokeStyle = color;
        pen.lineWidth = lw;
        pen.beginPath();
        pen.arc(x,y , r, 0 , Math.PI * 2);
        pen.closePath();
        pen.stroke();
        pen.restore();
    }
}
