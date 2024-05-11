import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./gallery.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [displayStates, setDisplayStates] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4040/api/getData")
      .then((response) => {
        setData(response.data.data);
        setDisplayStates(new Array(response.data.data.length).fill(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleShow = (index) => {
    const newDisplayStates = [...displayStates];
    newDisplayStates[index] = !newDisplayStates[index];

    setDisplayStates(newDisplayStates);
  }

  return (
    <div>
      <Navbar />
      <div className="h-28"></div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="container mx-auto mb-10 h-auto py-8 px-8 w-10/12 border-2 border-black">
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="rounded-lg  h-96 md:h-auto md:w-60 mx-2 md:rounded-lg"
                  src={item.poster.url}
                  alt=""
                />
                <div className="flex flex-col mx-8 justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.animeName}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.details[0].description}
                  </p>
                  <table>
                    <tbody>
                      <tr className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <td>Directed by :</td>
                        <td> {item.details[0].Written_By}</td>
                      </tr>
                      <tr className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <td>Started In :</td>
                        <td> {item.details[0].start}</td>
                      </tr>
                      <tr className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <td>Ended In :</td>
                        <td> {item.details[0].end}</td>
                      </tr>
                      <tr className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <td>Total Episodes :</td>
                        <td> {item.details[0].episodes}</td>
                      </tr>
                      <tr className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <td>Rating :</td>
                        <td> {item.details[0].rating}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </a>
              {/* below is character */}
              <button type="button" className="text-white my-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleShow(index)}>{displayStates[index] ? 'Main Characters' : 'Hide'}</button>
              <div className={displayStates[index] ? "hidden" : "block"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                  {item.characters.map((character, characterIndex) => (
                    <div key={characterIndex}>
                      <div className="max-w-sm my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img
                          className="rounded-t-lg w-96 h-96"
                          src={character.characterImg.url}
                          alt=""
                        />

                        <div className="p-5">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {character.name}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {character.charDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    // above character
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
