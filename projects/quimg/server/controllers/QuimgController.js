// /////// How to send a request to "like" a Quimg

// clapArticle: (req, res, next) => {
//     Article.findById(req.body.article_id).then((article)=> {
//         return article.clap().then(()=>{
//             return res.json({msg: "Done"})
//         })
//     }).catch(next)
// },

// /**
//  * comment, author_id, article_id
//  */
// commentArticle: (req, res, next) => {
//     Article.findById(req.body.article_id).then((article)=> {
//         return article.comment({
//             author: req.body.author_id,
//             text: req.body.comment
//         }).then(() => {
//             return res.json({msg: "Done"})
//         })
//     }).catch(next)
// },

// ///// Interesting way of getting an article with certain data. 
// getArticle: (req, res, next) => {
//     Article.findById(req.params.id)
//     // Will i need this for my cards?
//     .populate('author')
//     .populate('comments.author').exec((err, article)=> {
//         if (err)
//             res.send(err)
//         else if (!article)
//             res.send(404)
//         else
//             res.send(article)
//             // What is this next() business?
//             next()            
//     })
