var users = [];

module.exports = {
    getUsers: function(){
        return users;
    }
    ,
    addUser: function(user, success, error){
        var indexOf = users.indexOf(user);
        if(indexOf == -1){
            users.push(user);
            success(user);
        } else {
            error(user);
        }
    }
    ,
    deleteUser: function(user, success, error){
        var indexOf = users.indexOf(user);
        if(indexOf > -1){
            users.splice(indexOf, 1);
            success(user);
        } else {
            error(user);
        }
    }
};
