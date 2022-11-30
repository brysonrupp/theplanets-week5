import { galaxysService } from "../services/GalaxysServices";
import BaseController from "../utils/BaseController";




export class GalaxysController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router
            .get('', this.getAll)

            .post('', this.create)

    }

    async getAll(req, res, next) {
        try {
            const galaxys = await galaxysService.getAll()
            return res.send(galaxys)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const newGalaxy = await galaxysService.create(req.body)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }






}