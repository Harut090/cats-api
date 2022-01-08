import "./App.css";
import { getImages, getCategories } from "./api";
import { useState, useEffect } from "react";
function App() {
  const [activeCategory, setActiveCategory] = useState({});
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCategories().then((data) => {
      console.log("categories", data);
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (activeCategory.hasOwnProperty("id")) {
      getImages(activeCategory.id, page).then((data) => {
        console.log("new images", data, images);
        if(page === 1){
          setImages(data)
        }else{
          setImages([...images, ...data]);
        }
      });
    }
  }, [page, activeCategory.id]);



  function onCategoryChange(el) {
    setActiveCategory(el);
    setPage(1);
  }

  return (
    <div className="all">
      <div className="content">
        <div className="allPage">
          {images.length > 0
            ? images.map((el, index) => {
                return (
                  <div key={index + 1} className="allPageChildes">
                    <img
                      key={index}
                      src={el.url}
                      className="allPageChildImages"
                    />
                  </div>
                );
              })
            : "Noting show"}
        </div>
        <div className="contentButton">
          <button
            className="showMoreButton"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            show more 10 cats
          </button>
        </div>
      </div>

      <ul className="categorys">
        {categories.map((el, index) => {
          return (
            <li
              key={index}
              className="categorysCilds"
              onClick={() => {
                onCategoryChange(el);
              }}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
