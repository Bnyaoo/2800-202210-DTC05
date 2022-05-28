const Product = require('../models/product');

exports.getProductForm = (req, res, next) => {
    res.render('add-product', {
        name: 'Student Smith',
        path: '/admin/add-product',
        pageTitle: 'Add Product'
    });
}

/* Responsible for writing job post details to the database*/
exports.postProduct = (req, res, next) => {
    const prod = new Product({
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price,
        description: req.body.description,
        location: req.body.location,
        company: req.body.company
    });
    prod.save()
        .then(result => {
            res.redirect('/employerHome');
        }).catch(err => console.log(err));

}

exports.editProductPage = (req, res, next) => {
    Product.findById(req.params.prodId)
    .then(product => {
        res.render('edit-product', {
            product: product,
            path: '/',
            pageTitle: 'Edit Product',
            name: 'Tina'
        });
    }).catch(err => console.log(err));

}

/* Responsible for updating job post details to the database*/
exports.editProductPost = (req, res, next) => {
    Product.updateOne({
        _id: req.body.id
    }, {
        $set: {
            title: req.body.title,
            imageURL: req.body.imageURL,
            price: req.body.price,
            description: req.body.description
        }
    })
    .then(result => {
        res.redirect('/products/' + req.body.id);
    })
    .catch(err => console.log(err));
}

/* Responsible for removing a job from the database*/
exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.body.id) //findAndModify
    .then(result => {
        res.redirect('/');
    })
    .catch(err => console.log(err));

}