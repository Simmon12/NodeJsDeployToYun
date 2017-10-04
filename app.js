const http = require('http')

const homePage = `
<!Doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Nodejs 部署上线实例</title>
   </head>
   <body>
       <h1>Nodejs 高级课程</h1>
       <h2>项目部署上线实例</h2>
       <nav>
         <ul>
           <li>
             <a target="_blank" href="/a">Nodejs 电影网站</a>
           </li>
         </ul>
       </nav>
   </body>
</html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
})
.listen(3000, () => {
  console.log('Server Running At 3000')
})
