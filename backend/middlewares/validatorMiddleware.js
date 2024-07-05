const validatorMiddleware = (schema) => async (req, res, next) => {
  try {
    const parsedData = await schema.parseAsync(req.body);

    req.body = parsedData;
    next();
  } catch (error) {
    res.status(400).json({
      errMessage: error.errors[0].message,
    });
  }
};

module.exports = validatorMiddleware;
