function logErrors(err,req, resp, next){
  next(err)
}
function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHanddler(err, req, res, next){
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
module.exports = {
  logErrors,
  errorHandler,
  boomErrorHanddler
}
