import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* header starts here */}

    <div id="title-box" style={{paddingTop: "10px"}}>
      <div id="title" style={{}}>
        <img src="LiberFM.png" style={{width:"50%",margin:"5px 150px"}} alt="logo" />
      </div>
      <div className="display">
        <input placeholder="Search" type="Search" style={{width:"400px", border:"0.1px solid black", borderRadius:"5px", padding: "5px", margin:"0 250px"}}/>
      </div>

      <div id="icons" style={{margin:"0 100px"}}>
        <div>
          <img style={{marginLeft: "15px"}} src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.347/on/demandware.static/Sites-oss-Site/-/default/dwb5e4330b/images/common/icons/icon-account.svg?yocs=j_" alt="sign in" />
          <a href="/login">Login</a>
        </div>
        <div>
          <img style={{marginLeft: "15px"}} src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.347/on/demandware.static/Sites-oss-Site/-/default/dw496b71e8/images/common/icons/icon-bag-filled.svg?yocs=j_" alt="my bag" />
          <a href="#">Cart</a>
        </div>
      </div>
    </div>
    {/* header ends here */}

    {/* categories starts from here */}
    <div id="categories">
      <div className="dropdown">
        <button className="dropbtn">Books</button>
        <div className="dropdown-content">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Fiction</button>
        <div className="dropdown-content">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">NonFiction</button>
        <div className="dropdown-content">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">eBooks</button>
        <div className="dropdown-content">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">AudioBooks</button>
        <div className="dropdown-content">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Teen & Ya</button>
        <div className="dropdown-content1">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Kids</button>
        <div className="dropdown-content1">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Toys & Games</button>
        <div className="dropdown-content1">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Stationary & Gifts</button>
        <div className="dropdown-content1 d13">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Music & Movies</button>
        <div className="dropdown-content1 d13">
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BESTSELLERS</p></a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <a href="products">lIBER TOP 10</a>
                <a href="products">NY Times Bestsellers</a>
                <a href="products">30% Off Bestsellers</a>
                <a href="products">All Bestsellers</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>CUSTOMER FAVORITES</p></a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <a href="products">New Realeases</a>
                <a href="products">Coming Soon</a>
                <a href="products">Signed Books</a>
            <br />
            <a href="products"><p style={{fontWeight:"bold"}}>COLLECTIONS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>NEW ARRIVALS</p></a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            <a href="products">Bibles & Christian</a>
              <a href="products">Biography</a>
              <a href="products">General Fiction</a>
            
           
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>BEST SELLERS</p></a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
            <a href="products">Liber Exclusives</a>
                <a href="products">Black Voices</a>
                <a href="products">Book Awards</a>
            
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>TOP SUBJECTSS</p></a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
            <a href="products">Audiobooks Store</a>
                <a href="products">Paperback Store</a>
                <a href="products">Book Annex</a>
          </div>
          <div className="d11">
            <a href="products"><p style={{fontWeight:"bold"}}>SALES & OFFERS</p></a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
            <a href="products">Liber Monthly Picks</a>
                <a href="products">Liber Book Club</a>
                <a href="products">Liber Discover Picks</a>
          </div>
        </div>
      </div>
    </div>
    {/* categories ends from here */}

    </div>
  );
};

export default Navbar;
