import axiosInstance from "../../configs/axios"

type AiRequest ={
    text: string
}


const submitAiScore = async (payload: AiRequest)=> {
    try {
        const response = await axiosInstance.post("/detect/ai", payload)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getAiScoreById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/detect/ai/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export {submitAiScore, getAiScoreById};


