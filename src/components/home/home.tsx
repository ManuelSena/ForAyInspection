import * as React from "react";

export const Home: React.StatelessComponent<{}> = () => {

    return (
        <div className="container fahome">
            <div className="container col-md-12">
                <h1>ForAy Inspection</h1>
            </div>

            <div className="col-md-8 container">
                <h2>Veteran Owned</h2>
            </div>

            <div className="col-md-8 container">
                <h2>Southern California</h2>
                <ul>Greater Los Angeles Area</ul>
            </div>

            <div className="col-md-8 container">
                <h2>Certified Welding Inspector</h2>
                <ul>License#: 1911311</ul>
            </div>
            <div className="contact col-md-8 container">
                <h3>Anthony Ramirez</h3>
                <a href="mailto:Dispatch@ForAyInspection.com?subject=Contact">Dispatch@ForAyInspection.com</a>
                <ul><a href="tel:562-456-6001">Phone: 562-456-6001</a></ul>
            </div>
        </div>
      
    );

}