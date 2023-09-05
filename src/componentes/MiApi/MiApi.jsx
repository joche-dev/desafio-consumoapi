import React from 'react';
import { useState, useEffect } from 'react';
import './MiApi.css';

export default function MiApi() {
  const API_KEY = 'a2fee76310mshf6fbdd91216cb8ep1bb156jsn128258abf7c0';
  const API_HOST = 'free-to-play-games-database.p.rapidapi.com';
  const iconWindows = 'fa-brands fa-windows fa-lg';
  const iconBrowser = 'fa-solid fa-window-maximize fa-lg';
  const iconPlus = 'fa-solid fa-square-plus fa-lg';
  const [dataGames, setDataGames] = useState([]);

  const consultarApi = () => {
    const url = `https://${API_HOST}/api/games`;
    const options = {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setDataGames(data))
      .catch((error) => {
        console.log('Hubo un problema con la petición:' + error.message);
      });
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const showGames = dataGames.map((game) => (
    <div key={game.id} className="col">
      <div className="card h-100">
        <img
          src={game.thumbnail}
          className="card-img-top"
          alt={'Foto' + game.title}
        />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">
            {game.short_description.slice(0, 50) + '...'}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            <a href={game.game_url}>
              <i className={iconPlus} title="Más Detalles"></i>
            </a>
          </small>
          <small className="text-body-secondary">
            <span className="badge bg-secondary">{game.genre}</span>
            <i
              className={
                game.platform === 'Web Browser' ? iconBrowser : iconWindows
              }
              title={game.platform}
            ></i>
          </small>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="games row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {showGames}
    </div>
  );
}
