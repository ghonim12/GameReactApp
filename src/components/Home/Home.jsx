import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ClipLoader } from "react-spinners";

export default function Home({ category }) {
  let [game, setGame] = useState([]);

  let [isLoading, setIsLoading] = useState(false);

  async function getGame() {
    try {
      setIsLoading(true);
      const res = await axios.get(`/api/games?category=${category}`);
      console.log(res.data, "data");
      setGame(Array.isArray(res.data) ? res.data : []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGame();
  }, [category]);

  const [idGame, setIdGame] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  async function getGameDetails(id) {
    if (!id) return;
    try {
      const res = await axios.get(`/api/game?id=${id}`);
      setIdGame(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGameDetails(selectedId);
  }, [selectedId]);

  return (
    <>
      <h1  className="text-white text-center text-5xl my-5 ">
        Click On Links&#9757;
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black/50">
          <ClipLoader color="#ff6a00" size={60} speedMultiplier={0.8} />
        </div>
      ) : (
        <>
          <div className="relative">
            <div className="w-[90%] mx-auto py-10 md:py-20 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
                {Array.isArray(game) &&
                  game?.map((game) => (
                    <Card
                      gameItem={game}
                      key={game.id}
                      onClick={() => setSelectedId(game.id)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}

      {selectedId && idGame && (
        <div
          className="fixed inset-0 z-50 bg-primary flex items-center justify-center overflow-auto"
          onClick={() => {
            setSelectedId(null);
            setIdGame(null);
          }}
        >
          <div
            className="bg-primary text-white h-[800px] rounded-lg pb-20 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-white"
              onClick={() => {
                setSelectedId(null);
                setIdGame(null);
              }}
            >
              &times;
            </button>

            <h1 className="text-3xl font-bold mb-6 text-center">
              Details Game
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <img
                  src={idGame.thumbnail}
                  alt="game"
                  className="rounded-lg w-full shadow-md"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  <span className="text-[#0DCAF0]">Title:</span> {idGame.title}
                </h2>

                <p className="space-x-2">
                  <span className="font-extrabold">Category:</span>
                  <span className="bg-[#0DCAF0] text-black rounded-lg py-1 px-2">
                    {idGame.genre}
                  </span>
                </p>

                <p className="space-x-2">
                  <span className="font-extrabold">Platform:</span>
                  <span className="bg-[#0DCAF0] text-black rounded-lg py-1 px-2">
                    {idGame.platform}
                  </span>
                </p>

                <p className="space-x-2">
                  <span className="font-extrabold">Status:</span>
                  <span className="bg-[#0DCAF0] text-black rounded-lg py-1 px-2">
                    {idGame.status}
                  </span>
                </p>

                <p className="space-x-2">
                  <span className="font-extrabold">Description:</span>
                  <span className="text-gray-300">
                    {idGame.description}
                    {/* .slice(0, 300) */}
                  </span>
                </p>

               <div className="pb-10">
                 <a
                  href={idGame.game_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition"
                >
                  Show Game
                </a>
               </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
