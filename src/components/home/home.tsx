﻿import * as React from "react";

export const Home: React.StatelessComponent<{}> = () => {

    return (
        <div className="fahome">
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Limited Liability Company</div>
                    <div className="masthead-heading text-uppercase">ForAy Inspections</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#contact">Contact</a>
                </div>
            </header>

            <section style={{ color: "#fff" }} className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 welding">
                            <h4 className="my-3">Certified Welding Inspector</h4>
                            <p className="text-muted">License#: 1911311</p>
                        </div>
                        <div className="vertical-row"></div>
                        <div className="col-md-4 cali">
                            <h4 className="my-3 ">Southern Califonia Regional</h4>
                            <p className="text-muted">Greater Los Angeles Area</p>
                        </div>
                        <div className="vertical-row"></div>
                        <div className="col-md-4 vetpwnd">
                            <h4 className="my-3">Vet Owned</h4>
                            <p className="text-muted">The owner has contributed his own life for and on the very soil you require inspecting. Allow to let him give your peice of mind reign. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">AyMazing Team</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/124754cdb18130f1bbdcd40d2e18208a--mr-bean-so-funny.png" alt="" />
                                <h4>Anthony "AyOne" Ramirez</h4>
                                <p className="text-muted">Owner</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Anthony has come a long way from playing computer games and working a Jack in the Box Drive Thru. Through out the years hes exposed himself to the most lethal enviornments. Now that he's been back home he can really prove to himself on the soil he fought for. Anthony is heavily trained for combat but his customer service has always exceeded his customers expectations with his aggressive attitude to find solution.</p></div>
                    </div>
                </div>
            </section>


            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message" placeholder="Your Message *" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>


            <footer className="footer row">
                <div className="container">
                    <div className="ep-footerbar">
                        <span className="ep-copyright" style={{ color: "white" }}>Elicit ©2020  |  All Rights Reserved</span>
                        <nav className="footer-nav pull-right">
                            <ul>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>

        </div>

    );

}