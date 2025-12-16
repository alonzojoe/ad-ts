import api from "../api";



export const getData = async <APIResponse>(endpoint: string): Promise<APIResponse> => {
    try {
        const res = await api(endpoint);

        return res.data as APIResponse
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message)
        }
        throw error;
    }

}