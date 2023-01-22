import React, { useState } from "react";
import "./Home.css";
import product_list from "../../assets/ApiData/list_products.json";
import list_faq from "../../assets/ApiData/list_faq.json";
import family_img from "../../assets/images/family.svg";
import model_img from "../../assets/images/models.svg";
import brand_img from "../../assets/images/brands.svg";
import faq_img from "../../assets/images/faq.svg";
import mens_c from "../../assets/images/mens-c.jpg";
import mens_s from "../../assets/images/mens-s.jpg";
import mens_v from "../../assets/images/mens-v.jpg";
import womens_c from "../../assets/images/women-c.jpg";
import womens_s from "../../assets/images/women-s.jpg";
import womens_v from "../../assets/images/women-v.jpg";
import kids_img from "../../assets/images/kids.jpg";

function Home() {
  const product = [...product_list].sort(() => Math.random() - 0.5);
  console.log(product);
  const arrow = (
    <svg
      className="arrow"
      fill="#121111"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z"></path>
    </svg>
  );
  const [data, updateddata] = useState(product);
  const [inp, updateinp] = useState("");
  const [faq_i, upfaq_i] = useState(true);
  const handleFilter = (event) => {
    const word = event.target.value;
    updateinp(word);
    const newfilter = product.filter((e, i) => {
      return e.product_name.toLowerCase().includes(word);
    });
    if (word === "") {
      updateddata(product_list);
    } else {
      updateddata(newfilter);
    }
  };
  const imageFunction = (typ, mod) => {
    if (typ === "Boys") {
      return mens_c;
    } else if (typ === "Gents") {
      return mens_v;
    } else if (typ === "Ladies") {
      return womens_s;
    } else if (typ === "Gents Giant") {
      return mens_s;
    } else if (typ === "Girls") {
      return womens_c;
    } else if (typ === "Ladies Giant") {
      return womens_v;
    } else if (typ === "Kids") {
      return kids_img;
    }
  };

  const typeFilter = (val) => {
    if (
      val === "Boys" ||
      val === "Ladies" ||
      val === "Gents" ||
      val === "Gents Giant" ||
      val === "Ladies Giant" ||
      val === "Kids" ||
      val === "Girls"
    ) {
      const boys = product.filter((e, i) => {
        return e.product_category_name.includes(val);
      });
      updateddata(boys);
    } else if (val === "V-Strap" || val === "Sandal" || val === "Covering") {
      const boys = product.filter((e, i) => {
        return e.product_model_name.includes(val);
      });
      updateddata(boys);
    } else if (val === "Zodiz") {
      const boys = product.filter((e, i) => {
        return e.product_brand_name.includes(val);
      });
      updateddata(boys);
    }
  };
  return (
    <div>
      <div className="heading">
        <span
          onClick={() => {
            upfaq_i(true);
          }}
        >
          Cartapp
        </span>
        <div className="search_bar">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Product Name:(eg:BC1303)"
            value={inp}
          ></input>
          <div className="search_icon">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="search_icon_img"
            >
              <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="search_type">
        <div className="search_type_inner">
          <img src={family_img} height="100px"></img>
          <div className="stype_name">
            <span>category</span>
            {arrow}
          </div>
          <div className="commonfilter">
            <button onClick={() => typeFilter("Boys")} className="filterbtn">
              Boys
            </button>
            <button onClick={() => typeFilter("Gents")} className="filterbtn">
              Gents
            </button>
            <button onClick={() => typeFilter("Ladies")} className="filterbtn">
              Ladies
            </button>
            <button onClick={() => typeFilter("Girls")} className="filterbtn">
              Girls
            </button>
            <button onClick={() => typeFilter("Kids")} className="filterbtn">
              Kids
            </button>
            <button
              onClick={() => typeFilter("Gents Giant")}
              className="filterbtn"
            >
              Gents Giant
            </button>
            <button
              onClick={() => typeFilter("Ladies Giant")}
              className="filterbtn"
            >
              Ladies Giant
            </button>
          </div>
        </div>
        <div className="search_type_inner ">
          <img src={brand_img} height="100px"></img>
          <div className="stype_name">
            <span>brand</span>
            {arrow}
          </div>
          <div className="commonfilter">
            <button onClick={() => typeFilter("V-Strap")} className="filterbtn">
              V-Strap
            </button>
            <button onClick={() => typeFilter("Sandal")} className="filterbtn">
              Sandal
            </button>
            <button
              onClick={() => typeFilter("Covering")}
              className="filterbtn"
            >
              Covering
            </button>
          </div>
        </div>
        <div className="search_type_inner">
          <img src={model_img} height="100px"></img>
          <div className="stype_name">
            <span>Model</span>
            {arrow}
          </div>
          <div className="commonfilter zodiz">
            <button onClick={() => typeFilter("Zodiz")} className="filterbtn">
              Zodiz
            </button>
          </div>
        </div>

        <div
          className="search_type_inner"
          onClick={() => {
            upfaq_i(!faq_i);
          }}
        >
          <img src={faq_img} height="100px"></img>
          <div className="stype_name">
            <span>FAQ</span>
            {arrow}
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      {faq_i ? (
        <div className="whole">
          {data.map((e, i) => (
            <div className="whole_items" key={i}>
              <div className="individual_image">
                <img
                  src={imageFunction(
                    e.product_category_name,
                    e.product_model_name
                  )}
                  className="individual_img"
                ></img>
              </div>
              <ul className="individual_content">
                <li className="individual_items" style={{ fontSize: "2rem" }}>
                  {e.product_name}|
                </li>
                <li className="individual_items">{e.product_brand_name}|</li>
                <li className="individual_items">{e.product_category_name}|</li>
                <li
                  className="individual_items"
                  style={{
                    background: e.product_color_code,
                    color: "white",
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                >
                  {e.product_color}
                </li>
                <li className="individual_items">{e.product_model_name}|</li>
                <li className="individual_items">{e.product_subtitle}|</li>
              </ul>
              <div className="price_button">
                <strike>{e.product_mrp}</strike>
                <span>{e.product_price}rs</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="faq_i">
          {list_faq.map((e, i) => (
            <div className="faq_com">
              <div className="faq_inn">{e.name}</div>
              <div className="faq_inn">
                <span>Question:</span>
                {e.question}
              </div>
              <div className="faq_inn">
                <span>Answer:</span>
                {e.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
