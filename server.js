const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require("./data")

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.use(express.static('public'))

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s900-c-k-c0xffffffff-no-rj-mo",
        name: "Rocketseat",
        role: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        description: 'Principais Tecnologias Utilizadas',
        sub_j: 'Javascript',
        sub_r:'ReactJS',
        sub_re:'ReactNative',
        sub_n:'NodeJS',
                            
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" }
        ]
    }
    return res.render("about", { about })
})

server.get("/courses", function(req, res) {
    return res.render("courses", { items: cards })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.send(`${id}`);
  })

server.listen(5000, function() {
    console.log("server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })