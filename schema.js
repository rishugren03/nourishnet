const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
        // country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});

module.exports.buyNowSchema = Joi.object({
    buyNow: Joi.object({
        product: Joi.string(),
        buyerName: Joi.string().required(),
        buyerEmail: Joi.string().required(),
        quantity: Joi.number().required(),
        totalPrice: Joi.number().required(),
        shippingAddress: Joi.string().required(),
        orderDate: Joi.date(),
    }).required()
});
