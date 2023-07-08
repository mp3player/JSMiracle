class Complex {
    constructor(r = 0. , i = 0.){
        this.r = r;
        this.i = i;
    }
    sub(num){
        return new Complex(this.r - num.r , this.i - num.i);
    }
    add(num){
        return new Complex(this.r + num.r , this.i + num.i);
    }
    mul(num){
        return new Complex(this.r * num.r - this.i * num.i , this.r * num.i + this.i * num.r);
    }
    length(){
        return Math.hypot(this.r , this.i);
    }
    scale(factor){
        return new Complex(this.r * factor , this.i * factor);
    }
    toArray(){
        return [this.r , this.i];
    }
    static Euler( angle ){
        return new Complex( Math.cos( angle ) , Math.sin( angle ) ) ;
    }
}

function DFT(signal){
    let N = signal.length;
    let freq = [];
    for(let k = 0 ; k < N ; ++ k){
        let x = new Complex(0.0);
        for(let n = 0 ; n < N ; ++ n){
            x = x.add(signal[n].mul(Complex.Euler(-2. * Math.PI * k * n / N)));
        }
        freq.push(x);
    }
    return freq;
}

function IDFT(freq){
    let N = freq.length;
    let signal = [];
    for(let k = 0 ; k < N ; ++ k){
        let x = new Complex(0.0);
        for(let n = 0 ; n < N ; ++ n){
            x = x.add(freq[n].mul(Complex.Euler(2. * Math.PI * k * n / N)));
        }
        signal.push(x);
    }
    for(let i = 0 ; i < signal.length ; ++i){
        signal[i] = signal[i].scale( 1 / N);
    }
    return signal;
}
