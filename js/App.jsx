import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Summary from './Summary'
import Send from './Send'

const FourOhFour = () => <h1>404</h1>;

const App = () => {
    return(
        <div className="app uk-height-1-1">

                <div class="left_main_container">
                    <div className="uk-height-1-1">

                        <div class="left_nav uk-height-1-1">
                            b
                        </div>

                        <div class="center_nav uk-height-1-1">

                            <ul className="center_activity_log_container">
                                <li className="center_activity_li_outer_container">
                                    <div className="center_activity_li_inner_container">

                                        <div className="center_activity_li_name_text">
                                            test
                                        </div>

                                        <div className="center_activity_li_transaction_container">
                                            <div className="center_activity_li_transaction_text">
                                                0.0000000
                                            </div>
                                            <div className="center_activity_li_transaction_currency_name">
                                                ADA
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="center_activity_li_outer_container">
                                    <div className="center_activity_li_inner_container">

                                        <div className="center_activity_li_name_text">
                                            test
                                        </div>

                                        <div className="center_activity_li_transaction_container">
                                            <div className="center_activity_li_transaction_text">
                                                0.0000000
                                            </div>
                                            <div className="center_activity_li_transaction_currency_name">
                                                ADA
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            </ul>

                            <div className="uk-position-bottom add_wallet_container">
                                <div className="add_icon">
                                    +
                                </div>

                                <div className="add_wallet_text">
                                    Add Wallet
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="main_container">

                    <div className="main_container_header">
                        <div className="main_container_header_content_container">
                            <div className="main_container_header_text_container">
                                test
                            </div>

                            <div className="main_container_header_transaction_outer_container">
                                <div>
                                    <p className="main_container_header_transaction_amount">
                                        0.0000000
                                        <span className="main_container_header_currency_text">ADA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main_container_navigation_container">
                        <Link to="/" className="navigation_link_container">
                            <div className="navigation_link_text">
                                Summary
                            </div>
                        </Link>

                        <Link to="/send" className="navigation_link_container">
                            <div className="navigation_link_text">
                                Send
                            </div>
                        </Link>

                    </div>

                    <Switch>
                        <Route exact path='/' component={Summary} />
                        <Route path='/send' component={Send} />
                        <Route component={FourOhFour} />
                    </Switch>
                </div>

        </div>
    )
}

export default App;
