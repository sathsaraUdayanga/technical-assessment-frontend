import React, { Component } from "react";
import { calculatePrice } from "../services/priceCalculatorService";

class PriceCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penguinEarCartons: 0,
      penguinEarSingleUnits: 0,
      horseshoeCartons: 0,
      horseshoeSingleUnits: 0,
      total: 0
    };

    this.handleChangePenguinEarCartons = this.handleChangePenguinEarCartons.bind(
      this
    );

    this.handleChangePenguinEarUnit = this.handleChangePenguinEarUnit.bind(
      this
    );

    this.handleChangeHorseshoeCartons = this.handleChangeHorseshoeCartons.bind(
      this
    );

    this.handleChangeHorseshoeUnit = this.handleChangeHorseshoeUnit.bind(this);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChangePenguinEarCartons(event) {
    this.setState({ penguinEarCartons: parseInt(event.target.value) });
  }

  handleChangePenguinEarUnit(event) {
    this.setState({ penguinEarSingleUnits: parseInt(event.target.value) });
  }

  handleChangeHorseshoeCartons(event) {
    this.setState({ horseshoeCartons: parseInt(event.target.value) });
  }

  handleChangeHorseshoeUnit(event) {
    this.setState({ horseshoeSingleUnits: parseInt(event.target.value) });
  }

  handleOnClick() {
    calculatePrice(this.state).then(response => {
      this.setState({ total: response.totalPrice });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light">Price Calculator</h1>
          <div className="col-lg-6">
            <div className="card">
              <h5 className="card-header">Penguin Ears</h5>
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label className="col-form-label">Number of cartons</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      id="pe-4"
                      className="form-control"
                      value={this.state.penguinEarCartons}
                      onChange={this.handleChangePenguinEarCartons}
                    ></input>
                  </div>
                  <div className="col-auto">
                    <label className="col-form-label">
                      Number of single units
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      id="pe-3"
                      className="form-control"
                      value={this.state.penguinEarSingleUnits}
                      onChange={this.handleChangePenguinEarUnit}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <h5 className="card-header">Horseshoe</h5>
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label className="col-form-label">Number of cartons</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      id="pe-1"
                      className="form-control"
                      value={this.state.horseshoeCartons}
                      onChange={this.handleChangeHorseshoeCartons}
                    ></input>
                  </div>
                  <div className="col-auto">
                    <label className="col-form-label">
                      Number of single units
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      id="pe-2"
                      className="form-control"
                      value={this.state.horseshoeSingleUnits}
                      onChange={this.handleChangeHorseshoeUnit}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div style={{ "margin-bottom": "15px !important" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleOnClick}
              >
                Generate Total Price
              </button>
            </div>

            <div class="alert alert-primary" role="alert">
              <h5>Subtotal</h5>
              <p>{this.state.total}</p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default PriceCalculator;
