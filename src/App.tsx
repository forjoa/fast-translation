import { useState } from 'react'
import translateText from './api'

type Language = {
  code: string
  name: string
}

const languages: Array<Language> = [
  { code: 'hi', name: 'Indian' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
]

const TranslationApp = () => {
  const [textToTranslate, setTextToTranslate] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const handleTranslation = async () => {
    try {
      const translated = await translateText(textToTranslate, targetLanguage)
      setTranslatedText(translated)
    } catch (err) {
      setTranslatedText('Translation error ocurred')
    }
  }

  return (
    <div className='container'>
      <textarea
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
        placeholder='Enter text to translate...'
        className='textarea'
      />
      <div className='language-select'>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className='select'
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleTranslation} className='button'>
        Translate
      </button>

      {translatedText && (
        <div className='result-container'>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <>
      <TranslationApp />
    </>
  )
}

export default App
