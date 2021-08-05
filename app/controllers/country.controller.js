const models = require("../models");
const Country = models.Country;

exports.index = (req, res) => {
  Country.findAll().then((response) => {
    res.send(response);
  });
};

exports.store = (req, res) => {
  Country.create(req.body).then((response) => {
    const countryName = response.countryName;
    res.status(200).send({
      countryName,
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Country.update(req.body, {
    where: { id: id },
  }).then(() => {
    const countryName = req.body.countryName;
    res.status(200).send({
      id,
      countryName,
    });
  });
};
