import React from "react";

export default class AddSpending extends React.Component {

    constructor() {
        super();
        this.state = {
            datestr: "2018-01-01"
        }
    }


    render() {
        return (
            <div className={"add-spending"}>
                <div className={"spending-date"}>
                    <label htmlFor="spendingDate">Spending date:</label>
                    <input type="date" id="spendingDate" name="spendingDate"
                           value={this.state.datestr}
                           onChange={
                               (e) => {
                                   let val = e.target.value;
                                   this.setState((state, props) => ({
                                       datestr: val
                                   }));
                               }
                           }
                    />
                </div>
                <div>

                </div>
            </div>
        );

    }

}
