const MessageController = require("../controllers/message.controller");
module.exports = (app) => {
    app.get('/api/chatrooms', MessageController.getAllChatrooms);
    app.get('/api/message', MessageController.getAllMessages);
    app.post('/api/message', MessageController.createMessage);
    //app.post('/api/chatrooms', MessageController.createChatroom);
    app.put('/api/message/:id', MessageController.editMessage);
    //app.put('/api/chatrooms/:id', MessageController.editChatroom);
    app.delete('/api/message/:id', MessageController.deleteMessage);
    //app.delete('/api/chatrooms/:id', MessageController.deleteChatroom);
    app.get('/api/chatrooms/:id', MessageController.getOneChatroom);
};

//
