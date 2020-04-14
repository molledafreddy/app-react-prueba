import React from 'react'

class LongGest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:['best', 'company', 'ever'],
            flag: null
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
                                <h4 className="alert-heading">Values Arrangement</h4>
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
                            <div col-md-6>
                                {
                                    this.state.data.map((list) => {
                                        if ((this.state.flag == null) || (this.state.flag.length < list.length) ) {
                                            this.state.flag = list
                                        } 
                                    })
                                }
                                <div className="alert alert-primary mt-5 ml-5" role="alert">
                                    <h4 className="alert-heading">Resultado!</h4>
                                        <p>{this.state.flag}</p>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default LongGest