import { useEffect, useState } from "react";
import axios from "axios";

function Cars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        document.title = "Cars – Il tuo sito";
        loadCars();
    }, []);

    // GET ALL
    const loadCars = async () => {
        const res = await axios.get("http://localhost:8081/cars");
        setCars(res.data);
    };

    // ADD
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const car = {
            brand: form.get("brand"),
            model: form.get("model"),
            fuelType: form.get("fuelType"),
            doors: Number(form.get("doors")),
            seats: Number(form.get("seats")),
            year: Number(form.get("year")),
            price: Number(form.get("price"))
        };

        await axios.post("http://localhost:8081/cars", car);

        e.target.reset();
        loadCars();
    };

    // DELETE
    const deleteCar = async (id) => {
        await axios.delete(`http://localhost:8081/cars/${id}`);
        loadCars();
    };

    return (
        <main className="container py-4">

            <h2>Cars</h2>

            <form id="car-form" className="row g-2 mb-4" onSubmit={handleSubmit}>

                <div className="col">
                    <input className="form-control" name="brand" placeholder="Brand" required />
                </div>

                <div className="col">
                    <input className="form-control" name="model" placeholder="Model" required />
                </div>

                <div className="col">
                    <input className="form-control" name="fuelType" placeholder="Fuel type" required />
                </div>

                <div className="col">
                    <input type="number" className="form-control" name="doors" placeholder="Doors" min="2" required />
                </div>

                <div className="col">
                    <input type="number" className="form-control" name="seats" placeholder="Seats" min="2" required />
                </div>

                <div className="col">
                    <input type="number" className="form-control" name="year" placeholder="Year" min="1900" required />
                </div>

                <div className="col">
                    <input type="number" step="0.01" className="form-control" name="price" placeholder="Price" min="0" required />
                </div>

                <div className="col-auto">
                    <button className="btn btn-primary">Add</button>
                </div>

            </form>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Fuel</th>
                        <th>Doors</th>
                        <th>Seats</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.brand}</td>
                            <td>{c.model}</td>
                            <td>{c.fuelType}</td>
                            <td>{c.doors}</td>
                            <td>{c.seats}</td>
                            <td>{c.year}</td>
                            <td>{c.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteCar(c.id)}
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

export default Cars;
