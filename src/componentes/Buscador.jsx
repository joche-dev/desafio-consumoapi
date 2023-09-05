import React from 'react';

export default function Buscador() {
  return (
    <div className="row m-0 py-2">
      <div className="col-sm-9 mb-2">
        <div className="input-group ">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            placeholder="Buscar juegos..."
            // onChange={inputHandler}
          />
        </div>
      </div>
      <div className="col-sm-3 mb-2">
        <div className="input-group">
          <select className="form-select" id="sort">
            <option value="">Ordernar por:</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
}
