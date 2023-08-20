const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export async function getWordFromApi (word:string){
  const response = await fetch(`${BASE_URL}${word}`)
  if(!response.ok){
    return null
  }
  const data = await response.json()
  return data
}