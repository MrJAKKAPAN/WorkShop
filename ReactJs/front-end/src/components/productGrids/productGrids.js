import React, { Component } from "react";
import { connect } from "react-redux";
import "./productGrids.css";

class productGrids extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
          style={{ textAlign: "center" }}
        >
          <div className="col">
            <div className="card">
              <img
                src="https://storage.googleapis.com/file-server-prod/uploadfile%2Fadmin%2Fupload%2F2018-02-13%2Fd1064ca7-5662-4772-9373-44a93423c4b7?GoogleAccessId=fs-58-642%40chomchob-image-server.iam.gserviceaccount.com&Expires=1604987947&Signature=Jz16CGP0Gm6TOK7lBcsRs7fSPpYTWcMuy07%2F0ZQpqaFGJ%2F3q8WApNUFxo7HQeMHpd3iBTWQQdE7fK81oS31KwP7S7SGqNk91Te59jiN1XdDk%2BMvJIaUyo2nrPDfO47E8GEOii350ybGhUCWkKiniIXLFSWauDJKMo5SkXgZXqrZwGsgGQN67zCPpeF9qKs3jSwbdzvK47YH1UWMCtAqqvHQ4C0rvCg7vPGDIoEIcH17k9ldlIf1Jmot6XUWSgyQ8VaoGRKxxydJfjyojHaLYZ9Fl%2FDz%2Fpxos8FEr998q0WL0NZRgl3X2hX%2F8g%2BFaLR3qX9riLDI6yYYmUK8510mDqQ%3D%3D"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <div style={{ textAlign: "left" }}>
                  <div className="container">
                    <div className="row">
                      <div className="box-image">
                        <img
                          className="image-logo"
                          src="https://storage.googleapis.com/file-server-prod/uploadfile%2Fadmin%2Fupload%2F2018-02-13%2F45a6e245-e3a4-448e-b131-5cf5f61215c6?GoogleAccessId=fs-58-642%40chomchob-image-server.iam.gserviceaccount.com&Expires=1604987944&Signature=YFN4fHkCKtJMxFS%2FVngJVt8g5WqbSzlGlZY%2Fj5U%2FyShmKaN94j4JkHy%2F9frEY9cRACfFtunrJ355prT%2FMSB6lcYISCFTIKMvxvCAHG%2F9e3DYDPdGSymgjXJPhgygIt%2F2%2FwUXhuaLDdSmKAoqoGlxPHWaqt8P2s2IxsPq5L7zB5V3sePaZoBQoKE7J11bGRbKhX3%2BFM4Gc2FGL74T3JoiUJ9Cq7zzdMnPO22dAx2goCdoh%2FBzD7Plul3Yp3rxnfFQar9NDJT14Zou6SKwjxrNf49jbvsC1rp8QG0fdIhr6D1zBhZ%2BtBzW3%2BG3Wliw1skCvdBp%2BaZr5BJtrkNH3nyOpQ%3D%3D"
                          alt="logo"
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          width: "80%",
                          fontSize: "14px",
                        }}
                      >
                        <h5 className="card-title">
                          Cardsadasdasdasdasdadsadadsssss
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="container text-superman">
                    <div className="row">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="col-12 col-sm-12">
                        <p className="card-text price">฿7,900.00</p>
                      </div>
                      <button
                        className="btn btnGrids"
                        onClick={() =>
                          this.props.history.push(
                            "/Detail"
                            // `/stock-edit/${record.id}`
                          )
                        }
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  //cart */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(productGrids);
