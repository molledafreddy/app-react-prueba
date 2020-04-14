import React from 'react'

class Multiplication extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number_one:10,
            number_two:3,
            number_three:5
        }
    }
    render(){
        return (
            <div className="container mt-5">
                <div className="card ">
                    <div className="card-header">
                        Result Longest
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="alert-heading">Values Data One</h4>
                                <table class="table table-dark">
                                  <thead>
                                    <tr>
                                      <th scope="col">Number One</th>
                                      <th scope="col">Number Two</th>
                                      <th scope="col">Number Three</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                        <td>{this.state.number_one}</td>
                                        <td>{this.state.number_two}</td>
                                        <td>{this.state.number_three}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div col-md-6>
                               <div className="alert alert-primary mt-5 ml-2" role="alert">
                                    <h4 className="alert-heading">Result</h4>
                                        <p>{ rokket(this.state.number_one, this.state.number_two, this.state.number_three) }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function rokket(number_one, number_two, number_three){
    return (number_one) * (number_two) * (number_three)
}

export default Multiplication