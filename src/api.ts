import axios from "axios"

const translateText = async (textToTranslate: string, targetLanguage: string): Promise<string> => {
    try {
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_API_KEY}`,
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