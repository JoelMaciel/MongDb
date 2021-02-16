const express = require('express')
const router = express.Router();
var methodOverride = require('method-override');

router.use(methodOverride('_method'))

const linkController = require('../controllers/linkController')

router.get('/all', linkController.allLinks);

router.get('/:title', linkController.redirect)

router.post('/', express.urlencoded({extended:true}), linkController.addLink);

router.get ('/', (req, res)=>  res.render('index',{error: false, body: {}}));

router.delete('/:id', linkController.deleteLink)
router.delete('/' , express.json(), linkController.deleteLink);



module.exports = router;