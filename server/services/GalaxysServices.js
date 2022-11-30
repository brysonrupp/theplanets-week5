import { dbContext } from "../db/DbContext.js"


class GalaxysService {
    async getAll() {
        const galaxys = await dbContext.Galaxys.find()
        return galaxys
    }

    async create(galaxyData) {
        const newGalaxy = await dbContext.Galaxys.create(galaxyData)
        return newGalaxy
    }




}


export const galaxysService = new GalaxysService()