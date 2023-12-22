import React,{useMemo} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { products } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWhisList } from "./features/cart/cartSlice";
import { setSearchTerm } from "./features/search/searchSlice";
import { IoIosHeart } from "react-icons/io";

const About = () => {
  const dispatch = useDispatch();
  

  const { searchTerm, searchResults } = useSelector((state) => state.search);

  /*

  const handleSearch = () => {
    const Results = products.filter((item) =>
      item.category.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    if (products.filter((item) => item.category === searchTerm)) {
      return dispatch(setSearchResults(Results));
    }
    
  };

  */



  const filter = useMemo(()=>{
    return products.filter((item)=>{
      return item.category.toLowerCase().includes(searchTerm.toLowerCase())
    })
  },[searchTerm])

  console.log("hello mama", searchTerm, searchResults);
  return (
    <main>

      <div className="search-7">
        <div className="input-7">
          <input
            type="search"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => {
              console.log("i am here", e.target.value);
              dispatch(setSearchTerm(e.target.value));
              e.target.value = "";
            }}
          />
          <button >search</button>
        </div>
          <h2>Items Available {filter.length}</h2>
      </div>


     {/* // products */}

      {filter.length > 0 ? (
        <div className="cards-7">
          <div className="flex-7">
            {filter.map((item) => {
              const {
                id,
                img,
                brand,
                type,
                category,
                price,
                oversized,
                cotton,
              } = item;
              return (
                <div className="card-7" key={id}>
                  <div className="image-7">
                    <img src={img} alt={category} />
                    <button>{oversized ? "oversized" : "Slim fit"}</button>
                  </div>
                  <div className="text-7">
                    <h2>
                      {brand}{" "}
                      <button onClick={() => dispatch(addItemToWhisList(item))}>
                        <AiOutlineHeart />
                      </button>
                    </h2>
                    <p>{type}</p>
                    <h3>₹{price} </h3>
                    <div className="btn-7">
                      <button>{cotton ? "cotton" : "S-Fabric"}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="notmatch-7">

          <h1>NO ITEMS MATCH WITH THE SEARCH</h1>
        </div>
      )}
    </main>
  );
};
export default About;
About;
