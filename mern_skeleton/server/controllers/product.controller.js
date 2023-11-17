import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    console.log("create req.body =", req.body);
    const product = new Product(req.body)
    try {
        await product.save()
        return res.status(200).json({
            message: "Successfully created new product!"
        })
    } catch (err) {
        console.log('000 error', err)
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    console.log('list')
    try {
        let products = await Product.find().select('name description price quantitiy category')
        res.json(products)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const productByID = async (req, res, next, id) => {
    console.log('productByID')
    try {
        let product = await Product.findById(id)
        if (!product)
            return res.status('400').json({
                error: "Product not found",
            })
        req.profile = product
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve product",
        })
    }
}


const read = (req, res) => {
    console.log('read')
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const update = async (req, res) => {
    console.log('update')
    try {
        let product = req.profile
        product = extend(product, req.body)
        product.updated = Date.now()
        await product.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(product)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const remove = async (req, res) => {
    console.log('remove')
    try {
        let product = req.profile
        let deletedProduct = await product.deleteOne()
        deletedProduct.hashed_password = undefined
        deletedProduct.salt = undefined
        res.json(deletedProduct)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { create, productByID, read, list, remove, update }