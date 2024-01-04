import axios from "axios"

const translateText = async (textToTranslate: string, targetLanguage: string): Promise<string> => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY ?? process.env.VITE_API_KEY
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
            {
                q: textToTranslate,
                target: targetLanguage
            }
        )

        return response.data.data.translations[0].translatedText 
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default translateText