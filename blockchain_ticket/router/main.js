module.exports = function(app, fs)
{
     app.get('/',function(req,res){
        res.render('index.ejs')
     });
     app.get('/2',function(req,res){
        res.render('index2.ejs', {
            title: "MY HOMEPAGE",
            length: 5
        })
    });
}