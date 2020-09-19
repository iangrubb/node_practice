
module.exports.indexRoute = (req, res, next) => {

    res.status(200).json({posts: [{title: "first", content: "testing the first post"}]})
}

module.exports.createRoute = (req, res, next) => {

    const { title, content } = req.body

    const post = { id: Math.round(Math.random() * 100000), title, content }

    res.status(201).json({message: "Successful", body: post})
}