function a(){
    let c = 10;
    function y(a){
        return a + c;
    }
    return y;
}
console.log(a()(20));