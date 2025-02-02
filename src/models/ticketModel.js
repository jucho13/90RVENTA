const  mongoose = require ('mongoose');

const ticketsCollection = 'tickets';

const numberRequired = {
    type: Number,
    required: true,
}
const numberRequiredIndex = {
    type: Number,
    required: true,
}

const ticketsSchema = new mongoose.Schema({
    code: String,
    amount: numberRequired,
    purchaser: String,
    products: {
        type: [
            {
                product: {
                    type: String,
                    ref: 'products'
                },
                quantity: numberRequiredIndex
            }
        ],
        default: []
    },
    notAvailableProducts: {
        type: [
            {
                notAvailableProduct: {
                    type: String,
                    ref: 'products'
                },
                quantity: numberRequiredIndex
            }
        ],
        default: []
    }
}, {
    timestamps: true
});

module.exports = ticketModel = mongoose.model(ticketsCollection, ticketsSchema);