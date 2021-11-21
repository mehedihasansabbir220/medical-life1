import React from 'react';

const Doctors = () => {
    return (
        <div>
            <p className="text-info text-center">Our Doctors</p>
            <h4 className='text-center'>Meet With Our Doctor</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3_h4zNMa5atrC7Hb4z6Dud2ooVt8l-6XameDB3FQGls7kjfOAXtDXnWefB0fY20rWcI&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cardiology</h5>
                            <h5>Dr. Ryley Mueller</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dentist</h5>
                            <h5>Dr. Elisa Hodges</h5>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">General Doctor</h5>
                            <h5>Dr. Carlo Hilton</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;