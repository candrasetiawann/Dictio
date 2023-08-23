
interface Definition {
  definition: string
  example?: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

interface Phonetic {
  text?: string
  audio: string
}

interface Result {
  word: string
  phonetic: string
  meanings: Meaning[]
  phonetics: Phonetic[]
}

interface ResultProps {
  searchResults: Result[]
}

const ResultMeaning: React.FC<{ meaning: Meaning }> = ({ meaning }) => {
  return (
    <div>
      <h4 className="text-zinc-800 dark:text-zinc-200 text-xl font-bold">{meaning.partOfSpeech}</h4>
      {meaning.definitions.map((definition, definitionIndex) => (
        <ul className="pl-6 list-disc marker:text-indigo-600 " key={definitionIndex}>
          <li className="text-zinc-800 dark:text-zinc-200">{definition.definition}</li>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-zinc-600 dark:text-zinc-400 italic px-10 py-5 text-sm">"{definition?.example}"</p>
        </ul>
      ))}
    </div>
  )
}

const ResultView: React.FC<ResultProps> = ({ searchResults }) => {
  return (
    <div>
      <div className="pb-10">
        {searchResults?.map((result, index) => (
          <ul key={index}>
            <h1 className="text-zinc-800 dark:text-zinc-200 text-5xl font-bold mt-8" >{result.word.charAt(0).toUpperCase() + result.word.slice(1)}</h1>
            <p className="text-indigo-600 pt-4 pb-8" >{result.phonetic}</p>
            {result.meanings.map((meaning, meaningIndex) => (
              <ResultMeaning key={meaningIndex} meaning={meaning} />
            ))}
            <p />
          </ul>
        ))}
      </div>
    </div>
  )
}



export default ResultView