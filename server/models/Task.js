<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
    
    const Task = sequelize.define("Task", {
        task:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    });

    return Task;
=======
module.exports = (sequelize, DataTypes) => {
    
    const Task = sequelize.define("Task", {
        task:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    });

    return Task;
>>>>>>> master
}