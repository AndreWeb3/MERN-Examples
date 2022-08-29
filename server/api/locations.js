import { Router } from 'express';
import locationModel from "../db/models.js";
const router = Router();

// GET
router.get('/', async (req, res) => {
    try {
        const locations = await locationModel.find({ });
        res.json(locations);
    } catch (error) {
        res.status(500).send(error);
    }
  });

// POST
router.post('/addLocation', async (req, res) => {
    const location = new locationModel(req.body);
    try {
        await location.save();
        res.send(location);
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT
router.put('/update/:id', async (req, res) => {
    try {
        await locationModel.findByIdAndUpdate(
            req.params.id,
            { 
                city: req.body.city,
                state: req.body.state,
                locpath: req.body.locpath
            },
            { new: true }
        );
        res.send('ok');
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE
router.delete('/delete/:id', async (req, res) => {
    try {
        //const location = new locationModel(request.body);
        await locationModel.deleteOne({_id: req.params.id})
        .then( () => {
            res.status(200).json({
                message: 'Deleted!'
              });
        })

    } catch (error) {
        response.status(500).send(error);
    }
});


export default router;