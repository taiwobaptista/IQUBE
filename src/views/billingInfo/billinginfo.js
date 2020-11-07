import React from 'react';
import { useSelector } from "react-redux";
import Header from '../../components/header/header';
import './billingInfo.css'

function BillingInfo() {
    const sentiments = useSelector(state => state.sentiments);
    return (
        <>
            <div>
                <div className="main-body2">
                
                    <div className="content2">
                        <h1>Complete your purchase</h1>
                        <Header/>
                        <div className="container-fluid cont-area">
                            <div className="row billing">
                                <div className="col-sm">
                                    <form>
                                        <div className="form-group form-part2">
                                            <label htmlFor="exampleFormControlInput1">Name on Card</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Opara Linus Ahmed" />
                                        </div>


                                        <div className="form-group form-part2">
                                            <label htmlFor="exampleFormControlSelect1">Card Type</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Visa</option>
                                                <option>Mastercard</option>
                                                <option>Verve</option>
                                            </select>
                                        </div>


                                        <div className="form-group form-partt2">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="exampleFormControlInput1">Card details</label>
                                                    <input type="number" className="form-control  numb" id="exampleFormControlInput1" placeholder="44960 44960 44960 44960" required />
                                                </div>

                                                <div className="col-sm-4">
                                                    <label htmlFor="exampleFormControlInput1" className="numb22">Expiry date</label>
                                                    <input type="text" className="form-control numb2" id="exampleFormControlInput1" placeholder=" 04/12" required />
                                                </div>

                                                <div className="col-sm-3">
                                                    <label htmlFor="exampleFormControlInput1 " className="numb3">CVV</label>
                                                    <input type="number" className="form-control numb3" id="exampleFormControlInput1" placeholder=" 923" required />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="button-region2">
                                                    <div className="button-area2">
                                                        <button type="submit" className="btn mybtn2">Next</button>
                                                        <div className="col-sm-5 cancel2"><a href="">Cancel Payment</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingInfo;