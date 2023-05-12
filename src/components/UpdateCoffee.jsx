// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { name, _id, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee ={name,quantity,supplier,taste, category, details, photo}

        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl font-extrabold">Update  coffee</h2>
            <form onSubmit={handleUpdateCoffee} >
                {/* form row name */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                         
                            <input type="text" name="name" defaultValue={name}  placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row supplier */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                         
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                         
                            <input type="text" name="category" defaultValue={category}  placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                           
                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* forn photo row */}
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                         
                            <input type="text" name="photo" defaultValue={photo}  placeholder="Coffe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;