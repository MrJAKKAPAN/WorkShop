import React, { Component } from "react";
import { connect } from "react-redux";
import "./productLists.css";

class productLists extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="cards">
            <div className="ldiv">
              <img src="https://storage.googleapis.com/file-server-prod/uploadfile%2Fadmin%2Fupload%2F2018-02-13%2Ff8c6966e-f5b9-4452-9b6e-4e26608e3d18?GoogleAccessId=fs-58-642%40chomchob-image-server.iam.gserviceaccount.com&Expires=1605022312&Signature=UC2Kho%2Bg5grVtc7TUoSjen5iPsjDiuuGj81D2TsSW78gLk2yLooRv10ApXCKtgFcrbsICsn45a5JtuRHJXNBj5gZPAYoLudKrWxAklWaSIxj9lCLQlFeu9dV8ME6vyfI8KLfIbSZjIln06GOnhpGiMkPCySgfsHGK3B0k6iQHtX70xKoMfZt45Tubjh1Uf0JYtI9Tg5NVIZaQ6X2Y4qEljaTwODlatNxo6RJQwPPVdwKAcGZNVxhdIwG0c2IOfLFC0nGJNkq6TD%2FJvUd4o0AgOyhupD5tsuI4FOLn2xg9fly6c3mkxIFARxJTPGQul8ZtLRbUrLTnJc8RVwIPGqxqg%3D%3D" />
            </div>
            <div className="cdiv">
              <div className="title">Title</div>
              <div className="des">
                Incididunt occaecat sunt nisi consequat esse id deserunt
                voluptate laboris eu dolor cupidatat. Nostrud dolor esse labore
                nostrud anim aute magna nisi ullamco nisi.
              </div>
            </div>
            <div className="rdiv">
              <div className="money">
                <div className="bl-money">฿7,999</div>
              </div>
              <div className="buynow">
                <button
                  className="btn btn-buynow"
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

        <div className="wrap">
          <div className="cards">
            <div className="ldiv">
              <img src="https://storage.googleapis.com/file-server-prod/uploadfile%2Fadmin%2Fupload%2F2018-02-13%2Ff8c6966e-f5b9-4452-9b6e-4e26608e3d18?GoogleAccessId=fs-58-642%40chomchob-image-server.iam.gserviceaccount.com&Expires=1605022312&Signature=UC2Kho%2Bg5grVtc7TUoSjen5iPsjDiuuGj81D2TsSW78gLk2yLooRv10ApXCKtgFcrbsICsn45a5JtuRHJXNBj5gZPAYoLudKrWxAklWaSIxj9lCLQlFeu9dV8ME6vyfI8KLfIbSZjIln06GOnhpGiMkPCySgfsHGK3B0k6iQHtX70xKoMfZt45Tubjh1Uf0JYtI9Tg5NVIZaQ6X2Y4qEljaTwODlatNxo6RJQwPPVdwKAcGZNVxhdIwG0c2IOfLFC0nGJNkq6TD%2FJvUd4o0AgOyhupD5tsuI4FOLn2xg9fly6c3mkxIFARxJTPGQul8ZtLRbUrLTnJc8RVwIPGqxqg%3D%3D" />
            </div>
            <div className="cdiv">
              <div className="title">Title</div>
              <div className="des">
                Incididunt occaecat sunt nisi consequat esse id deserunt
                voluptate laboris eu dolor cupidatat. Nostrud dolor esse labore
                nostrud anim aute magna nisi ullamco nisi.
              </div>
            </div>
            <div className="rdiv">
              <div className="money">
                <div className="bl-money">฿7,999</div>
              </div>
              <div className="buynow">
                <button className="btn btn-buynow">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div> // container
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(productLists);
