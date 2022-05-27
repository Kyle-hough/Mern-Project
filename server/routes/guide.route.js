const GuideController = require("../controllers/guide.controller")

module.exports = (app) => {
    app.get("/api/guides/:championID", GuideController.allGuides) // all guides for one champion
    app.post("/api/guides", GuideController.createGuide) // create guide for one champ
    // app.get("/api/champions/:id", ChampionController.oneChampion) 
    // app.put("/api/champions/:id", ChampionController.updateChampion)
    app.delete("/api/guides/:id", GuideController.deleteGuide)
}