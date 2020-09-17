const products = [
	{
		id: 1,
		img: 'https://www.iloveugly.com/media/catalog/product/cache/0/thumbnail/x1250/17f82f742ffe127f42dca9de82fb58b1/0/1/011_199.jpg',
		name: 'Zespy Pant Mid Rise Oatmeal',
		price: 30
	},
	{
		id: 2,
		img: 'https://www.iloveugly.com/media/catalog/product/cache/0/thumbnail/x1250/17f82f742ffe127f42dca9de82fb58b1/1/0/102_29.jpg',
		name: 'Corduroy Porter Cap Black',
		price: 40
	},
];


// 1
class Product extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="product">
				<div className="product__header">
					<img className="product__img" src={ this.props.img } alt="product"/>
				</div>
				<h2 className="product__name"><a href="#">{ this.props.name }</a></h2>
				<span>${ this.props.price }</span>

				<br/>
				<br/>
				
				<a href="#" className="btn btn-default" onClick={ this.props.addToCart }>Add to cart</a>
				
			</div>
		)
	}
}

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1
		}
	}

	onRemove = (event, index) => {
		event.preventDefault();
		this.props.remove(index);
	}


	handleQuantity = (event, index) => {
		this.props.quantity(index, event.target.getAttribute('name'));
		this.setState({
			value: this.props.cart[index].quantity
		})
	}
    
	render() {
		let total = 0;
		for(let i = 0; i < this.props.cart.length; i++) {
			if (i === this.props.cart.length) break;
			const item = this.props.cart[i];
			total += item.product.price * item.quantity;
		}
		
		return(
			<div>
                <table className="table table-hover table-middle">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th></th>
                            <th>Quantity</th>
                            <th><span className="pull-right">Price</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((item, index) => {
                            return(
                                <tr key={ item.product.id }>
                                    <td><a href="#" className="btn btn-danger" onClick={ event => this.onRemove(event, index) } title={`Remove ${ item.product.name}`}><i className="fa fa-trash"></i></a></td>
                                    <td><img style={{width: 80}} src={ item.product.img } alt={ item.product.name} /></td>
                                    <td>{ item.product.name }</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-default" name="minus" onClick={ event => this.handleQuantity(event, index) }>-</button>
                                        <span className="cart__quantity">{ item.quantity }</span>
                                        <button type="button" className="btn btn-sm btn-default" name="plus" onClick={ event => this.handleQuantity(event, index) }>+</button>
                                    </td>
                                    <td><h3 className="pull-right">kkk{ item.product.price }</h3></td>
                                </tr>

                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h2>Total: { total }</h2></td>
                        </tr>
                    </tfoot>
                </table>
                
               
            </div>
		)
	}
}


class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: []
		}
	}

	addToCart = (event, product) => {
        event.preventDefault();
		const { cart } = this.state;
		let index = -1;
		for (let i = 0; i < cart.length; i++) {
			const idProductInCart = cart[i].product.id;
			if (idProductInCart === product.id) {
				index = i;
				break;
			}
		}
		if (index === -1) {
			cart.push({
				product: product,
				quantity: 1
			});
		} else {
			cart[index].quantity = cart[index].quantity + 1;
		}
		this.setState(this.state);
	}

	onRemove = index => {
		const { cart } = this.state;
		cart.splice(index, 1);
		this.setState(this.state);
	}

	handleQuantity = (index, name) => {
		const { cart } = this.state;
		if (name === 'plus') {
			if (cart[index].quantity > 0) {
				cart[index].quantity = cart[index].quantity + 1;
			}
		}
		if (name === 'minus') {
			if (cart[index].quantity > 1) {
				cart[index].quantity = cart[index].quantity - 1;
			}
		}
		this.setState(this.state);
	}

	quantityChange = (value, index) => {
		const { cart } = this.state;
		cart[index].quantity = Number(value);
		this.setState(this.state);
	}

	render() {
		const { products } = this.props;
		return(
			<section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">

                            <div className="row">
                                {
                                    products.map((product, index) => {
                                        return(
                                            <div key={ product.id } className="col-xs-6">
                                                <Product 
                                                    img={ product.img } 
                                                    name={ product.name } 
                                                    price={ product.price } 
                                                    addToCart={ event => this.addToCart(event, product) } 
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="col-xs-6">
                            sssss
                            { this.state.cart.length > 0 ? <Cart remove={ this.onRemove } cart={ this.state.cart } quantity={ this.handleQuantity } quantityChange={ this.quantityChange } /> : '' }
                        </div>
                    </div>
                </div>
            </section>
		)
	}
}




ReactDOM.render(<Products products={ products } />, document.getElementById('root'));