import React, { Component } from "react";
import { connect } from "react-redux";

export class productGrids extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
          style={{ textAlign: "center" }}
        >
          <div className="col">
            <div className="card" style={{ width: "15rem" }}>
              <img
                src="https://storage.googleapis.com/file-server-prod/uploadfile/admin/upload/2018-02-13/11f5a3c6-1233-4280-b79a-39f8cd37411d?GoogleAccessId=fs-58-642@chomchob-image-server.iam.gserviceaccount.com&Expires=1604943620&Signature=YAGwmtnVzmCY7Zs+kbwn1pDlNHKy79aGUiUfNHWLubKdH+P4NC41fOkjsKbUEm41sbK0/aMMzNBMhhp4//gIvcfu7SG1GQ03kHOeQZQ0A9DXFKysiyPDazEgE2zj4Hu0hCfW32qKa9jznwvE58J6XMwPAf0v5FohXZssKRGCb+lDV2dBChRxifCT3Wc+AiC+8E9oRRHHe5CPwgYgeDJ97DvKE4jUYCrr/uXfUYhNUAaxbmxLbvTsNdAIvIgkiI4eh5VigGoNCViIEgU1CUcgX88wMKVryX30jxL1MCqGQQtgw1t1uKGsLgyWjw6Hg767sSeNHrXFbvMOdL1c6+qFoA=="
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body" style={{ border: "1px solid red" }}>
                <div style={{ border: "1px solid red" }}>
                  <h5 className="card-title">Card title</h5>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <a href="#" className="btn btnGrids">
                    Detail
                  </a>
                </div>
              </div>
            </div>
            {/*  //cart */}
          </div>
          <div className="col">pp</div>
          <div className="col">ll</div>
          <div className="col">kk</div>
          <div className="col">kk</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(productGrids);
