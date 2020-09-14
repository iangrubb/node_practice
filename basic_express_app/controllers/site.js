

exports.landing = (req, res, next) => {
    res.render('shop/landing', {
        path: "/",
        pageTitle: "Shop"
    })
}

exports.failToFind = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found', path: false
    })
}


