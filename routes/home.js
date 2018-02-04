import express from 'express';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    msg: "home routes"
  })
});

export default router;