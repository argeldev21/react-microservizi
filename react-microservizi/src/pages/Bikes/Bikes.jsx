import { useEffect, useState } from "react";
import axios from "axios";

function Bikes() {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        document.title = "Bikes – Il tuo sito";
        loadBikes();
    }, []);

    // GET ALL
    const loadBikes = async () => {
        const res = await axios.get("http://localhost:8081/bikes");
        setBikes(res.data);
    };

    // ADD
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const bike = {
            brand: form.get("brand"),
            model: form.get("model"),
            engineCc: form.get("engineCc"),
            type: form.get("type"),
            year: form.get("year"),
            price: form.get("price")
        };

        await axios.post("http://localhost:8081/bikes", bike);

        e.target.reset();
        loadBikes();
    };

    // DELETE
    const deleteBike = async (id) => {
        await axios.delete(`http://localhost:8081/bikes/${id}`);
        loadBikes();
    };

    return (
        <main className="container py-4">

            <h1>Bikes</h1>

            <form id="bike-form" className="row g-2 mb-4" onSubmit={handleSubmit}>

                <div className="col">
                    <input className="form-control" name="brand" placeholder="Brand" required />
                </div>

                <div className="col">
                    <input className="form-control" name="model" placeholder="Model" required />
                </div>

                <div className="col">
                    <input type="number" className="form-control" name="engineCc" placeholder="cc" required />
                </div>

                <div className="col">
                    <input className="form-control" name="type" placeholder="Type" required />
                </div>

                <div className="col">
                    <input type="number" className="form-control" name="year" placeholder="Year" required />
                </div>

                <div className="col">
                    <input type="number" step="0.01" className="form-control" name="price" placeholder="Price" required />
                </div>

                <div className="col-auto">
                    <button className="btn btn-primary">Add</button>
                </div>

            </form>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th><th>Brand</th><th>Model</th><th>cc</th><th>Type</th><th>Year</th><th>Price</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {bikes.map(b => (
                        <tr key={b.id}>
                            <td>{b.id}</td>
                            <td>{b.brand}</td>
                            <td>{b.model}</td>
                            <td>{b.engineCc}</td>
                            <td>{b.type}</td>
                            <td>{b.year}</td>
                            <td>{b.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteBike(b.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </main>
    );
}

export default Bikes;
