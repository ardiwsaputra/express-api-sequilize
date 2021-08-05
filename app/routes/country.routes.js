const { authJwt } = require("../middleware");

const countryController = require("../controllers/country.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/countries", countryController.index);
  app.post("/api/countries", [authJwt.verifyToken], countryController.store);
  app.patch(
    "/api/countries/:id",
    [authJwt.verifyToken],
    countryController.update
  );
  app.put(
    "/api/countries/:id",
    [authJwt.verifyToken],
    countryController.update
  );
};
