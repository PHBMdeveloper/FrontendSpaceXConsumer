import React, { Component } from 'react'
import Header from '../template/Header'
import Main from '../template/Main'

class Lancamentospassados extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL_ULS)
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data.results })
        //console.log(this.state.todos)
      })
      .catch(console.log)
  }

  render() {
    return (
      <React.Fragment>
        <Header {...Lancamentospassados} />
        <Main icon="rocket" title="Lançamentos Passados" className="container">
          <div className="col-xs-12">
            {this.state.todos.map((todo) => (
              <div key={todo.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">id: {todo.id}</h5>
                  <h6 className="card-subtitle mb-2">
                    {<span>flight_number: <span className="text-muted">{todo.flight_number}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>mission_name: <span className="text-muted">{todo.mission_name}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>launch_year: <span className="text-muted">{todo.launch_year}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>launch_date_unix: <span className="text-muted">{todo.launch_date_unix}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>launch_date_utc: <span className="text-muted">{todo.launch_date_utc}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>launch_date_local: <span className="text-muted">{todo.launch_date_local}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>is_tentative: <span className="text-muted">{todo.is_tentative}</span> </span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>tentative_max_precision: <span className="text-muted">{todo.tentative_max_precision}</span></span>}
                  </h6>
                  <h6 className="card-subtitle mb-2 padding=0 " >
                    {<span>tbd: <span className="text-muted">{todo.tbd}</span></span>}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    {<span>details: <span className="text-muted">{todo.details}</span></span>}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </Main>
      </React.Fragment>
    );
  }
}
export default Lancamentospassados;