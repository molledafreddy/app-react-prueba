import React from 'react'

class Repetition extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:'company',
            number:2,
            result:''
        }
    }
    render(){
        return (
            <div className="container mt-5">
                <div className="card ">
                    <div className="card-header">
                        Result string repetition 
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="alert-heading">Values Arrangement</h4>
                                <table class="table table-dark">
                                  <thead>
                                    <tr>
                                      <th scope="col">Word</th>
                                      <th scope="col">Number repetition</th>
                                    </tr>
                                  </thead>
                                  <tbody> 
                                    <tr>
                                        <td>{this.state.data}</td>
                                        <td>{this.state.number}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div col-md-6>
                                <div className="alert alert-primary mt-4 ml-2" role="alert">
                                    <h4 className="alert-heading">Resultado!</h4>
                                        <p>{ rokket(this.state.number, this.state.data) }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function rokket(number, data){
    let result = ''
    for(let i = 0; i < number; i++) {
        result += data
    }
    return result
}

export default Repetition