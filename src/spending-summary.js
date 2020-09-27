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
        this.setState((state, props) => ({
            data: [
                {
                    month: 9,
                    year: 2020,
                    spending: 8888.88
                },
                {
                    month: 8,
                    year: 2020,
                    spending: 4000.00
                },

            ]
        }));
        console.log("hello");

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