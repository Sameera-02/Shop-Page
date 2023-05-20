import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";


//product data
let data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0082/6363/0953/products/WhatsAppImage2022-04-06at4.10.48PM_580x.jpg?v=1649242477",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$40.00 - $80.00",
    cart: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWVRqHxiqwR2F40SBh-QkSbFycinRfu6rWj5_GtTAHA&usqp=CAU&ec=48665701",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://static.toiimg.com/thumb/msid-78331327,width-1280,resizemode-4/78331327.jpg",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsaXYkGDtUjlwAuM7K3e0xxsj3t2kRr06jVtGcMduzQ&usqp=CAU&ec=48665701",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1jCg3CBjSxSKXYWeoPJlcXmLxs2k__e5LzQxIK4BwA&usqp=CAU&ec=48665701",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://ae01.alicdn.com/kf/HTB1Zrl1HVXXXXXcXpXXq6xXFXXX6/Free-shipping-European-English-style-Fashion-bone-china-coffee-cup-set-fancy-ceramic-coffee-survices-top.jpg_640x640.jpg",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$120.00 - $280.00",
    cart: false,
  },
  {
    image:
      "https://allforfashiondesign.com/wp-content/uploads/2013/06/te-10.jpg",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://sc04.alicdn.com/kf/Hbea9c3bbd3544291be8e6fd6132dd5d2w.jpg",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // function for count  (addcart and remove cart action)
  addcart = (event) => {
    if (event) {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
      this.scrollTop();
    } else {
      this.setState(() => ({
        count: this.state.count - 1,
      }));
      this.scrollTop();
    }
  };

  // function to scrollup after add/remove cart
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  
  render() {
    return (
      <>
        <Navbar count={this.state.count} />
        <Header />
        <div className="card-content d-flex flex-wrap justify-content-center">
          {data.map((item, index) => {
            // to iterate Products
            return (
              <Card
                key={index}
                image={item.image}
                sale={item.sale}
                title={item.title}
                star={item.star}
                discount={item.discount}
                price={item.price}
                cart={item.cart}
                addcart={this.addcart}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;