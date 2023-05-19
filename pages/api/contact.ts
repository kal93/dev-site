export default function handler(req, res) {
    console.log(req.body);
    if(req.method === 'POST') {
        // SAVE TO DB
        res.json({messsage: 'Ok'});
    }
}