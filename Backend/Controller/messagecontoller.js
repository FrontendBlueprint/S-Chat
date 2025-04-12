
export const sendmessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id } = req.params;
        const senderId = req.userId;

        
    } catch (error) {
        console.log("eorror in sendmessage contoller", error);
        res.status(500).json({error:"internal server"})
    }
}