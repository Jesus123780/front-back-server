const Sequelize = require('sequelize')
const { enCode } = require('../../utils/util')
const connect = require('../../db')
const sequelize = connect()

// 

const Typefeature = sequelize.define('typefeature', {
    thpId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    thpName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    thpIcon: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        defaultValue: 1
    },
    thpState: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        defaultValue: 1
    },
    thpDatCre: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    thpDatMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Typefeature