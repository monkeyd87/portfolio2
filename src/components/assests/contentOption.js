



const introOptions = {
    fist:"Artist",
    second: "Developer",
    third: "Teacher"
 
 
 }
 
 const about  ={
     text: "Hi there! My name is Dennis Jackson and I am a self-taught programmer. I taught myself Python during the lockdown and then started learning JavaScript using Codecademy. I recently graduated from UC Davis' boot camp, where I gained a deeper understanding of web development and further honed my programming skills. I am excited to continue learning and growing as a programmer, and to apply my skills to solve challenging problems"
 }
 
 const skill = {
     skills:[
         { type:'JavaScript',level: 100},
         { type:'HTML',level: 100},
         { type:'CSS',level: 90},
         { type:'Python',level: 85},
         { type:'Sql',level: 85},
         { type:'React',level: 85},
         { type:'NoSql',level: 75},
       
       ],
     
       colors:{
         bar: '#ffcb0d',
         title: {
           text: {
             hue: 'blue',
             saturation: {
               minimum: 30,
               maximum: 70
             },
             level: 50
           },
           background: '#010114'
         }
       }
 }
 
 
 const projects = [
     {
         title: 'Only Cooks',
         img: '/images/onlyCooks.png',
         technologies_used: 'HTML, CSS, JavaScript, React, Node, GraphQL, Apollo',
         github_link: 'https://github.com/zuetesei/cook-book',
         deployed_link: 'https://onlycooks.herokuapp.com/',
     },
     {
         title: 'Aesthete',
         img:'/images/aesthete.png',
         technologies_used: 'JavaScript,MongoDB,HTML,CSS',
         github_link:'https://github.com/monkeyd87/aesthete' ,
         deployed_link:'https://murmuring-inlet-34782.herokuapp.com/',
     },
     {
         title: 'School Incident Reporter',
         img: '/images/incident.png',
         technologies_used: 'HTML, CSS, JavaScript, React, Node,',
         github_link: 'https://github.com/monkeyd87/incidentreport',
         deployed_link: 'https://wlcpincidentreport-b83c7d609aa0.herokuapp.com/#/home',
     },
    
     {
         title:"Driddit",
         img:'/images/dreedit.png',
         technologies_used: 'HTML, CSS, JavaScript, React, Node',
         github_link: 'https://github.com/monkeyd87/driddit',
         deployed_link: 'https://monkeyd87.github.io/driddit',
     },
     {
         title: 'yugiodeckbuilder',
         img:'/images/yugioh.png',
         technologies_used:"Javascript, React, Bootstrap,",
         github_link:'https://github.com/monkeyd87/yugiodeckbuilder',
         deployed_link: "https://monkeyd87.github.io/yugiodeckbuilder"
     },
     {
         title: 'Weather App',
         img: '/images/weather.png',
         technologies_used: 'HTML, CSS, JavaScript',
         github_link:'https://github.com/monkeyd87/weatherapp' ,
         deployed_link:'https://monkeyd87.github.io/weatherapp/',
     },
    
 ]
 
 
 
 module.exports = {projects,skill,introOptions,about  }