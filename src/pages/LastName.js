import React from 'react'

class LastName extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                { firstName: 'Juanito', lastName: 'Rokket' },
                { firstName: 'James', lastName: 'Bond' },
                { firstName: 'Harry', lastName: 'Potter' }
            ],
            result: []
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
                            <div className="col-md-6">
                                <h4 className="alert-heading">Values Arrangement</h4>
                                <table class="table table-dark">
                                  <thead>
                                    <tr>
                                      <th scope="col">First Name</th>
                                      <th scope="col">Last Name</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                        this.state.data.map((list) => {
                                            return( 
                                                <tr>
                                                    <td>{list.firstName}</td>
                                                    <td>{list.lastName}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                  </tbody>
                                </table>
                            </div>
                            <div col-md-6>
                                {
                                    this.state.data.map((value) => {
                                        this.state.result.push(value.lastName) 
                                    })
                                }
                                <div className="alert alert-success mt-5 ml-5" role="alert">
                                    <h4 className="alert-heading">Resultado!</h4>
                                    <p>{this.state.result}</p>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default LastName