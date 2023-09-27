module.exports = (sequelize, DataTypes) => {
    
    const Task = sequelize.define("Task", {
        id: {
            type:DataTypes.Number,
            allowNull: false,
        },
        task:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    });

    return Task;
}