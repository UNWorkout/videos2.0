import VideoModel from '../models/index.js';

export async function getVideoById(req, res){
    const { params: { id } } = req;

    let video;
    try{
        video = await VideoModel.findById(id);

        if (!video){
            return res.status(404).json({
                'msg': `Video with id ${id} does not exist!`,
            })
        }

        return res.status(200).json({
            'msg':`Video with id ${id}`,
            'data': video,
        })
    }catch (e){
        return res.status(500).json({
            'msg': `Can not query video data!`,
        })
    }
}

export async function getBatchOfVideosByIdArray(req, res){
    const { query: { id } } = req;

    console.log(id);

    try{
        const videos = await VideoModel.find({ _id: { $in: id } })

        return res.status(200).json({
            'msg':`Batch of videos`,
            'data': videos,
        })
    }catch (e){
        return res.status(500).json({
            'msg': `Can not query batch video data!`,
        })
    }
}
