import Header from "./components/Header"
import ResultView from "./components/ResultView"
export default function Home() {
  return (
    <div>
      <Header/>
      <ResultView searchResults={[]}/>
    </div>
  )
}
