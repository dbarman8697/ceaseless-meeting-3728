import React from "react";
import "./HomePage.css";
import {NavLink} from "react-router-dom"
function HomePage() {
  const data = [
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_care_package_supplies_200x200_20221226.jpg",
      title: "Care Package Supplies",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_personal_care_200x200_20221226.jpg",
      title: "Personal Care",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_bakeware_200x200_20221226.jpg",
      title: "Bakeware",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_totes_bags_200x200_20221226.jpg",
      title: "Totes & Bags",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_wine_champagne_glasses_200x200_20221226.jpg",
      title: "Wine & Champagne Glasses",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_dinnerware_200x200_20221226.jpg",
      title: "Dinnerware",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_candleholders_200x200_20221226.jpg",
      title: "Candleholders",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_candy_gum_200x200_20221226.jpg",
      title: "Candy & Gum",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_calendar_planners_200x200_20221226.jpg",
      title: "Calendars & Planners",
    },
    {
      image:
        "https://www.dollartree.com/file/general/w_tf_storage_organization_200x200_20221226.jpg",
      title: "Storage & Organization",
    },
  ];
  const images =[
{img :"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c0806f0a197c00a48fa594.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c07cf31eaf8f0323b4c2d6.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c07cf1e5940c00a5ebbdc9.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c07cf1e5940c00a5ebbdc9.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c0681cbf2838024cbe3cd2.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c0681d0d4c0b0085334e1b.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c05d4f9c9903023d2134fe.JPEG"},
{img:"https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c044b6368c30007464a6ba.JPEG"}
  ]
  return (
    <>
      <img
        className="banner"
        src="https://www.dollartree.com/file/general/w_hero_vday_floral_1250x400_20221227.jpg"
        alt="banner"
      />
      <br />
      <h1>Shop Thrilling Finds</h1>
      <div className="middle">
        {data.map((el) => (
          <div>
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
      <h1>Discover Money Tree Plus</h1>
      <br />
      <div className="Plus-option">
        <div>
          <img
            src="https://www.dollartree.com/file/general/dt_plus_main_landing_2a_$3_615x260_20221019.jpg"
            alt=""
          />
          <h3>Shop $3 Items</h3>
        </div>
        <div>
          <img
            src="https://www.dollartree.com/file/general/dt_plus_main_landing_2a_$5_615x260_20221019.jpg"
            alt=""
          />
          <h3>Shop $5 Items</h3>
        </div>
      </div>
      <h1>Party Supplies</h1>
      <div className="party-supplies">
        <div>
          <img
            src="https://www.dollartree.com/file/general/w_3a_catering_supplies_400x400_20221226.jpg"
            alt=""
          />
          <h4>Catering Supplies</h4>
        </div>
        <div>
          <img
            src="https://www.dollartree.com/file/general/w_3a_balloons_400x400_20221226.jpg"
            alt=""
          />
          <h4>Party Baloon</h4>
        </div>
        <div>
          <img
            src="https://www.dollartree.com/file/general/w_3a_solid_color_party_supplies_400x400_20221226.jpg"
            alt=""
          />
          <h4>Plastic DinnerWare</h4>
        </div>
      </div>
      <h1>Customer-Favorites</h1>
      <div className="carousal"></div>
      <div className="offers">
        <h1>On the Hunt for Gifts? Plan Your Next Store Trip</h1>
        <div className="offer-card">
          <div>
            <img
              src="https://www.dollartree.com/file/general/w_in_store_black_friday_ad_20221125.png"
              alt=""
            />
            <h4>Check Out Our Ad</h4>
          </div>
          <div>
            <img
              src="https://www.dollartree.com/file/general/w_store_icon_3a_in_store_specials_20210829.png"
              alt=""
            />
            <h4>In-Store Specials</h4>
          </div>
          <div>
            <img
              src="https://www.dollartree.com/file/general/w_store_icon_3a_iotw_20210829.png"
              alt=""
            />
            <h4>Item of The Week</h4>
          </div>
        </div>
      </div>
      <div className="treasure">
        <div>
          <img
            src="https://www.dollartree.com/file/general/w_split_2a_thrill_of_the_hunt_20220227.jpg"
            alt=""
          />
          <h2>It’s the Thrill of the Hunt</h2>
          <div className="sub-div">
          <p>
            You never know what deals you’ll find at Dollar Tree. Shop items
            specially curated for you.
          </p>
          <button>Shop Now</button>
          </div>
        </div>
        <div>
          <img
            src="https://www.dollartree.com/file/general/w_split_2a_smallerquantities_newarrivals_20210815.jpg"
            alt=""
          />
          <h2>New Arrivals</h2>
         <div className="sub-div">
         <p>
          We have new items online and in stores every week, so come shop our newest deals.
          </p>
          <button>Shop Now</button>
         </div>
        </div>
      </div>
      <div className="preview">
            <div className="image-part">
                <img src="https://www.dollartree.com/file/general/w_curated1__floral_20221226.jpg" alt="" />
                <h2>Floral Supplies</h2>
                <p>Create opulent floral arrangements & 
                    centerpieces for your home, tables, and more!</p>
                    <button>Shop Now</button>
            </div>
            <div className="product-preview">
                <div>
                    <img src="https://www.dollartree.com/file/general/w_curated1_vases_containers_20221226.jpg" alt=""/>
                    <h4>Vases&Container</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated1_wreath_forms_20221226.jpg" alt=""/>
                    <h4>Wreath Forms</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated1_embellishments_accents_20221226.jpg" alt=""/>
                    <h4>Ribbons & Mesh</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated1_vases_containers_20221226.jpg" alt=""/>
                    <h4>Flowers, Bushes & Greenery</h4>
                </div>
            </div>
      </div>
      <div className="preview">
            <div className="image-part">
                <img src="https://www.dollartree.com/file/general/w_curated1__floral_20221226.jpg" alt="" />
                <h2>Creative Craft Supplies</h2>
                <p>Create Cupid-worthy crafts this Valentine’s Day!</p>
                    <button>Shop Now</button>
            </div>
            <div className="product-preview">
                <div>
                    <img src="https://www.dollartree.com/file/general/w_curated2_yarn_fabric_20221226.jpg" alt=""/>
                    <h4>Wood Crafts</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated2_travel_tumbler_20221226.jpg" alt=""/>
                    <h4>Crafting Blanks</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated2_pour_paint_collection_20221226.jpg" alt=""/>
                    <h4>Pour Pain Collection</h4>
                </div>
                <div>
                <img src="https://www.dollartree.com/file/general/w_curated2_jewels_beads_20221226.jpg" alt=""/>
                    <h4>Resin</h4>
                </div>
            </div>
      </div>
      <div className="sweet-saving"> 
                <img src="https://www.dollartree.com/file/general/w_l2_promo_faux_floral_615x422_20221226.jpg" alt=""/>

                <img src="https://www.dollartree.com/file/general/w_l2_promo_cookware_bakeware_615x422_20221226.jpg" alt="" />

      </div>
      <h1>Get Inspired on Our Value Seekers Blog</h1>
      <div className="Blog">
          <div>
            <img src="https://www.dollartree.com/file/general/w_blog__vday_beaded_heart_20221226.jpg" alt="" />
            <h4>Valentine’s Day Beaded Heart Wall Décor</h4>
          </div>
          <div>
            <img src="https://www.dollartree.com/file/general/w_blog_diy_rose_arrangement_20221226.jpg" alt="" />
            <h4>DIY Rose Arrangement</h4>
          </div>
          <div>
            <img src="https://www.dollartree.com/file/general/w_blog_diy_vday_block_decor_20221226.jpg" alt="" />
            <h4>DIY Valentine’s Day Block Décor</h4>
          </div>
          <div>
            <img src="https://www.dollartree.com/file/general/w_blog_heart_coaster_set_20221226.jpg" alt="" />
            <h4>Heart Coaster Gift Set</h4>
          </div>
      </div>
     <div className="bottom-part">
      <div className="top">
        <h1>#Money Tree</h1>
        <h2>Share your Finds & Creations!</h2>
      </div>
      <div className="bottom">
        {images.map((el)=>(
          <img src={el.img} alt=""/>
        ))}
      </div>
     </div>
     <hr/>
     <div className="signup">
      <p><NavLink to="/login" style={{textDecoration:"none",color:"black"}}><b>Email Sign Up</b></NavLink></p>
          <p>
Be the first to know about new arrivals online, in-store specials & events, fun ideas & inspiration, and more!
</p>
<NavLink to="/login" style={{textDecoration:"none",color:"black"}}><button>Sign Up</button></NavLink>
     </div>
    </>
  );
}

export default HomePage;