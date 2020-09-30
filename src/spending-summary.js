import React from "react";

export default class SpendingSummary extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
    }


    componentDidMount() {
        /*
            call api to get spending summary data
            here we use fake data directly
        **/
        // asynchronous callback.
        const spendingSummaryAPI_URL = "https://oeqrjaqvrj.execute-api.us-west-2.amazonaws.com/default/getSpendingSummary";
        fetch(spendingSummaryAPI_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState((state, props) => ({
                    data
                }));
            });
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Spending</th>
                </tr>

                </thead>
                <tbody>
                {
                    this.state.data.map(MonthlySpending)
                }
                </tbody>
            </table>

        );
    }
}

/*
 {
                    month: 9,
                    year: 2020,
                    spending: 3888.88
                }
 */
export function MonthlySpending(props) {
    return (
        <tr>
            <td>{props.month}</td>
            <td>{props.year}</td>
            <td>{props.spending}</td>
        </tr>

    );
}