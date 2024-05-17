var quotes =[
    {author: '-- Oscar Wilde', 
     quote: '“Be yourself; everyone else is already taken.”'
    },
    {author: '-- Marcus Tullius Cicero', 
     quote: '“A room without books is like a body without a soul.”'
    },
    {author: '-- Mae West', 
     quote: '“You only live once, but if you do it right, once is enough.”.'
    },
    {author: '-- Robert Frost', 
     quote: '“In three words I can sum up everything I`ve learned about life:it goes on.”'
    },
    {author: '-- Elbert Hubbard', 
     quote: '“A friend is someone who knows all about you and still loves you.”'
    },
    {author: '-- Mahatma Gandhi', 
     quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'
    },
    {author: '-- Jim Rohn', 
     quote: '“Beware of what you become in pursuit of what you want.”'
    },
    {author: '-- William Kely McClung', 
     quote: '“Yeah, nerdship could be inherited as surely as any knighthood”'
    },
    {author: '-- Babe Ruth', 
     quote: '“Never let the fear of striking out keep you from playing the game.”'
    },
    {author: '-- Robin Hobb, Golden Fool', 
     quote: '“So love and hope blinds us all.”'
    },

];



function getquotes(){
    var num= Math.floor(Math.random()*10)
    
   document.getElementById("quotes").innerHTML=quotes[num].quote
   document.getElementById("authors").innerHTML=quotes[num].author
}