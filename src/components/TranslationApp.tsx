import translateText from '../server/api.ts'
import languages from '../utils/languages.ts'

import { useState } from 'react'

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
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  )
}

export default TranslationApp