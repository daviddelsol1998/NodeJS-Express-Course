// variable to hold Products
const products = [];

exports.getAddProduct = (req, res, next) => {
    // send a response here.
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/') // redirect is very convinient to send to another page
}

exports.getProducts = (req, res, next) => {
    // send a response here.
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
}