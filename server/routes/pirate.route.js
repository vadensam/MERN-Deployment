const controller = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get("/api/pirates", controller.allPirates);
    app.get("/api/pirates/:id", controller.onePirate);

    app.post("/api/pirates", controller.createPirate);

    app.patch("/api/pirates/:id", controller.updatePirate);

    app.delete("/api/pirates/:id", controller.deletePirate);
}