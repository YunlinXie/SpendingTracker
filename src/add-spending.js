import React from "react";

export default class AddSpending extends React.Component {

    constructor() {
        super();
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const mdToStr = (md) => (md < 10 ? "0" : "") + md;
        const datestr = "" + date.getFullYear() + "-" + mdToStr(month) + "-" + mdToStr(day);
        console.log(datestr);


        this.state = {
            // date: "2018-01-01",
            date: datestr,
            amount: "",
            // amount: "0.00",
        }
    }


    render() {
        return (
            <div className={"add-spending"}>
                <div className={"spending-date"}>
                    <label htmlFor="spendingDate">Spending date:</label>
                    <input type="date" id="spendingDate" name="spendingDate"
                           value={this.state.date}
                           onChange={
                               (e) => {
                                   let val = e.target.value;
                                   this.setState((state, props) => ({
                                       date: val
                                   }));
                               }
                           }
                    />
                </div>
                <div className={"spending-amount"}>
                    <label htmlFor="spendingAmount">Spending amount:</label>

                    <input type="number" id="spendingAmount" name="spendingAmount"
                           step={0.01}
                           placeholder={"Input a spending value"}
                           value={this.state.amount}

                           onChange={
                               (e) => {
                                   console.log(this.state.amount);

                                   let val = e.target.value;
                                   this.setState((state, props) => ({
                                       amount: val
                                   }));
                               }
                           }
                    />
                </div>
                <div className={"submit"}>
                    <button onClick={() => {
                        /*
                            1.validate input
                            2. submit spending by calling api
                         */
                        const amount = this.state.amount;
                        console.log('amount', amount);
                        if (amount.length < 1) {
                            alert("Invalid amount!");
                            return;
                        }
                        const addSpending_APIURL = "https://fdmf08xr47.execute-api.us-west-2.amazonaws.com/default/addSpending";
                        fetch(addSpending_APIURL, {
                            method: 'POST',
                            body: JSON.stringify({
                                amount: Number(this.state.amount),
                                date: this.state.date
                            })
                        }).then((response) => {
                            console.log("response", response);
                            return response.json();
                        }).then((data) => {
                            alert("Add spending successful!");
                        });
                    }}>
                        Submit spending
                    </button>

                </div>
            </div>
        );

    }

}
