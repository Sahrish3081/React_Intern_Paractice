export default function ProductCard(props) {
      console.log(props)
    return (
        <div className="card">

            <img
                src={props.product.img}
                alt="Laptop Image"
            />
            <h5>{props.product.title}</h5>
  
            <div className="content">

                <p className="Price">
                {props.product.PK_Price}
                </p>

                <p>
                    {props.product.delivery_date}
                </p>

            </div>

        </div>

    );
}