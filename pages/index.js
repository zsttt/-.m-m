import  Game from '../pages/components/Game.js'

const Home = () => {
  return (
    <div className = "flex flex-col flex-center justify-center h-screen bg-red-500">
      <div className = "flex flex-col text-center items-center bg-blue-200">
        Hello <Game />
      </div>     
    </div>
  )
}

export default Home;