const generateMessage = (text) =>{
    return {
        text,
        CreatedAt: new Date().getTime()
    }
}

const generateLocationMessage = (url) =>{
    return{
        url,
        CreatedAt: new Date().getTime()
    }
}

module.exports ={
   generateMessage,
   generateLocationMessage
}