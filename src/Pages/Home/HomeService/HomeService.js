import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';
import {Link} from "react-router-dom";

const HomeService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-savannah-62685.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])

    return (
        <div className="my-4">
            <h1 className="text-center">Mazda Car-Hypes </h1>
            <div className="row container-fluid container mx-auto">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
            <Link to="/services"><div className="mx-auto text-center"><button className="my-5 btn btn-primary text-white">See all Products</button></div></Link>
        </div>
    );
};

export default HomeService;