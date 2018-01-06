import React, {Component} from 'react'

const Activity = () => {
    return(
        <div className="home_container uk-height-1-1">
            <div className="uk-grid-collapse  uk-height-1-1" uk-grid=''>

                <div className="uk-width-1-5 wallet_left_nav">

                    <div className="bcoin_wallet_container ">
                        <img src="http://bcoin.io/assets/images/logo-dark-large.png" className="bcoin_logo"/>
                        <p className="bcoin_text">wallet</p>
                    </div>

                    <div className="sidenav_links uk-position-center">
                        <ul class="uk-nav">
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: clock"></span> Activity</a></li>
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: credit-card"></span> Wallet</a></li>
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: cog"></span> Settings</a></li>
                        </ul>
                    </div>

                    <div className="pay_request_buttons uk-position-bottom uk-width-1-5">
                        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                            PAY
                        </button>

                        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                            REQUEST
                        </button>
                    </div>

                </div>

                <div className="uk-width-4-5 wallet_right_nav">

                    <form className="header_search_form">
                        <span class="search_icon" uk-icon="icon: check; ratio: 1.5"></span>
                        <input class="uk-input" type="text" placeholder="Search request by memo"/>
                    </form>

                    <div className="activity_table_container">
                        <table class="uk-table uk-table-divider activity_table">
                            <thead>
                                <tr className="activity_table_header">
                                    <th>PAYMENT REQUEST</th>
                                    <th>MEMO</th>
                                    <th>AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                                <tr>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                    <td>Table Data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Activity
