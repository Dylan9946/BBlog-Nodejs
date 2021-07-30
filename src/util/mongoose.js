//  trong handelbars , chuyển đổi object contrctor sang constructor bt 
// 
module.exports ={ 
    multiMogooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },

    mongooToObject : function(mongoose){
        return mongoose ? mongoose.toObject(): mongoose ;
    }

};