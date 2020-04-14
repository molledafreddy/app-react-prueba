import React from 'react'

class UniqueNumber extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[50, 2, 5,8,10],
            data2:[50, 5, 8,2,10]
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
                                      <th scope="col">Data One</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                        this.state.data.map((list) => {
                                            return( 
                                                <tr>
                                                    <td>{list}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                  </tbody>
                                </table>
                            </div>
                            <div className="col-md-3">
                                <h4 className="alert-heading">Values Data Two</h4>
                                <table class="table table-dark">
                                  <thead>
                                    <tr>
                                      <th scope="col">Data Two</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                        this.state.data2.map((list) => {
                                            return( 
                                                <tr>
                                                    <td>{list}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                  </tbody>
                                </table>
                            </div>
                            <div col-md-6>
                                {
                                    this.state.data2.map((value) => {
                                        const found = this.state.data.find(element => element == value);
                                        if (found === undefined) {
                                            this.state.data.push(value)
                                        }
                                    })
                                }
                                <h4 className="alert-heading">Result Data</h4>
                                <table class="table table-dark">
                                  <thead>
                                    <tr>
                                      <th scope="col">Data</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                        this.state.data.map((list) => {
                                            return( 
                                                <tr>
                                                    <td>{list}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UniqueNumber