import { useEffect, useState } from "react";
import axios from "axios";

function Garages() {

    const [garages, setGarages] = useState([]);

    useEffect(() => {
        document.title = "Garages – Il tuo sito";
        loadGarages();
    }, []);

    // GET ALL GARAGES
    const loadGarages = async () => {
        const res = await axios.get("http://localhost:8081/garages");
        setGarages(res.data);
    };

    // CREATE GARAGE
    const handleCreateGarage = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const garage = {
            ownerName: form.get("ownerName"),
            address: form.get("address")
        };

        await axios.post("http://localhost:8081/garages", garage);

        e.target.reset();
        loadGarages();
    };

    // ADD VEHICLE TO GARAGE
    const handleAddVehicle = async (e, garageId) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const payload = {
            externalId: form.get("externalId"),
            vehicleType: form.get("vehicleType")
        };

        await axios.post(`http://localhost:8081/garages/${garageId}/vehicles`, payload);

        e.target.reset();
        loadGarages();
    };

    return (
        <main className="container py-4">

            <h1>Garages</h1>

            {/* CREATE GARAGE FORM */}
            <form className="row g-2 mb-4" onSubmit={handleCreateGarage}>

                <div className="col">
                    <input className="form-control" name="ownerName" placeholder="Owner name" required />
                </div>

                <div className="col">
                    <input className="form-control" name="address" placeholder="Address" required />
                </div>

                <div className="col-auto">
                    <button className="btn btn-primary">Create garage</button>
                </div>

            </form>

            {/* GARAGE LIST */}
            {garages.map(g => (
                <div key={g.id} className="card mb-4">
                    <div className="card-body">

                        <h5 className="card-title">
                            Garage #{g.id} — {g.ownerName}
                        </h5>
                        <p className="card-text">{g.address}</p>

                        <h6>Vehicles:</h6>

                        {/* VEHICLE LIST */}
                        {g.vehicles.length === 0 && (
                            <p className="text-muted">No vehicles yet.</p>
                        )}

                        {g.vehicles.length > 0 && (
                            <ul>
                                {g.vehicles.map(v => (
                                    <li key={v.id}>
                                        {v.vehicleType} — {v.externalId}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* MINI-FORM ADD VEHICLE */}
                        <form className="row g-2 mt-3" onSubmit={(e) => handleAddVehicle(e, g.id)}>

                            <div className="col">
                                <input className="form-control" name="externalId" placeholder="External ID" required />
                            </div>

                            <div className="col">
                                <select className="form-select" name="vehicleType" required>
                                    <option value="">Select type</option>
                                    <option value="CAR">Car</option>
                                    <option value="BIKE">Bike</option>
                                    <option value="TRUCK">Truck</option>
                                </select>
                            </div>

                            <div className="col-auto">
                                <button className="btn btn-success">Add vehicle</button>
                            </div>

                        </form>

                    </div>
                </div>
            ))}

        </main>
    );
}

export default Garages;
