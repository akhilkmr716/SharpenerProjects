const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
        <form action="/" method="POST">
            <input type="text" name="username" placeholder="username"><br><br>
            <button type="submit">Login</button>
        </form>`);
});

router.post('/', (req, res, next) => {
    const referer = req.get('Referer');

    if(referer && referer.includes('/login')){
        fs.readFile('./message.txt', (err, data) => {
            const str = data.toString();
            if(str === ""){
                const str = "No chats exist";
                return res.send(`
                    <p id="para">${str}</p>
                    <form id="my-form">
                        <input type="text" name="message" id:"message"><br><br>
                        <button type="submit">Send</button>
                    </form>
                    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
                    <script>
                        document.addEventListener('DOMContentLoaded', function(){
                             localStorage.setItem('username', '${req.body.username}');
                             const form = document.getElementById('my-form');
                             form.addEventListener('submit', (e) => {
                                e.preventDefault();
                                const data = {
                                    username: localStorage.getItem('username'),
                                    message: e.target.message.value
                                };
                                axios.post('/',data)
                                .then((res) => {
                                    const p = document.getElementById("para");
                                    p.innerHTML =  res.data;
                                })
                                .catch(err=>console.log(err)); 
                             });
                        });
                    </script>`);
            }
            return res.send(`
                <p id="para">${str.split('\n').join('<br>')}</p>
                <form id="my-form">
                    <input type="text" name="message"><br><br>
                    <button type="submit">Send</button>
                </form>
                <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
                <script>
                    document.addEventListener('DOMContentLoaded', function(){
                        localStorage.setItem('username', '${req.body.username}');
                            const form = document.getElementById('my-form');
                            form.addEventListener('submit', (e) => {
                            e.preventDefault();
                            const data = {
                                username: localStorage.getItem('username'),
                                message: e.target.message.value
                            };
                            axios.post("/",data)
                            .then((res) => {
                               const p = document.getElementById("para");
                               p.innerHTML =  res.data;
                            })
                            .catch(err=>console.log(err)); 
                        });
                    });
                </script>`);
        });
    } else {
        fs.appendFileSync('message.txt', `${req.body.username + ": " + req.body.message + "\n"}`);
        const str = fs.readFileSync('message.txt').toString();
        return res.send(str.split('\n').join('<br>'));
    }
});

module.exports = router;