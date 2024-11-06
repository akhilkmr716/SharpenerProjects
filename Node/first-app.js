async function print(){
    try{
        function p1(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("c");
                },3000);
            });
        }
        function p2(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("d");
                },0);
            });
        }
        console.log("a");
        console.log("b");
        const res1 = await p1();
        console.log(res1);
        const res2 = await p2();
        console.log(res2);
        console.log("e");
    }
    catch(error){
        console.log(error);
    }
}
print();