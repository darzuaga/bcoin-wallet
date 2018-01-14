import React, {Component} from 'react'

const Send = () => {
    return(
        <div className="uk-height-1-1">
            <div className="send_view_container">

                <div className="receiver_outer_container">
                    <div className="receiver_text">
                        Receiver
                    </div>

                    <div className="wallet_address_input_container">
                        <input className="wallet_address_input" placeholder="Wallet Address" />
                    </div>
                </div>

                <div className="amount_outer_container">
                    <div className="amount_text">
                        Amount
                    </div>

                    <div className="amount_input_container">
                        <input className="amount_input" placeholder="0.0000000" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Send
