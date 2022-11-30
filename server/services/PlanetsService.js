import { dbContext } from "../db/DbContext.js"

class PlanetsService {

    async getAll() {
        const planets = await dbContext.Planets.find().populate('galaxy')
        return planets
    }

    async create(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        await planet.populate('galaxy')
        return planet
    }


}






export const planetsService = new PlanetsService()