'use client';

import { useState } from 'react';

export default function TwoStageForm() {
    const [formData, setFormData] = useState({
        nameEntreprise: '',
        etage: '',
        surface: '',
        ville: '',
        phone: '',
        nom: '',
        email: '',
        adresse: '',
        codePostal: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can replace this with an API call to send the form data
    };

    return (
        <>
            <div className='mx-auto max-w-xs lg:max-w-7xl sm:py-4 lg:px-8'>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="nameEntreprise" className="block text-sm font-medium text-gray700">Nom Entreprise</label>
                        <input
                            id="nameEntreprise"
                            name="nameEntreprise"
                            value={formData.nameEntreprise}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className=" mt-2 space-y-8 md:space-y-0 md:flex md:gap-8">
                        <div className="space-y-4 md:w-1/2">
                            <div>
                                <label htmlFor="etage" className="block text-sm font-medium text-gray700">Number Étage</label>
                                <input
                                    id="etage"
                                    name="etage"
                                    type="number"
                                    value={formData.etage}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="surface" className="block text-sm font-medium text-gray700">Surface</label>
                                <select
                                    id="surface"
                                    name="surface"
                                    value={formData.surface}
                                    onChange={handleSelectChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                >
                                    <option value="" disabled>Sélectionnez la surface</option>
                                    <option value="1">S &lt; 50m²</option>
                                    <option value="2">50m² &lt; S &lt; 150m²</option>
                                    <option value="3">150m² &lt; S &lt; 250m²</option>
                                    <option value="4">250m² &lt; S &lt; 500m²</option>
                                    <option value="5">S &gt; 500m²</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ville" className="block text-sm font-medium text-gray700">Ville</label>
                                <input
                                    id="ville"
                                    name="ville"
                                    value={formData.ville}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray700">Number Phone</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 md:w-1/2">
                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-gray700">Nom</label>
                                <input
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray700">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="adresse" className="block text-sm font-medium text-gray700">Adresse</label>
                                <input
                                    id="adresse"
                                    name="adresse"
                                    value={formData.adresse}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="codePostal" className="block text-sm font-medium text-gray700">Code Postal</label>
                                <input
                                    id="codePostal"
                                    name="codePostal"
                                    value={formData.codePostal}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className=" mt-3 block text-sm font-medium text-gray700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 mb-2 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-gradient-to-r text-white font-bold mb-10 mt-6 py-4 px-10 rounded-lg border-2 border-gradient-to-r from-blue600 to-red600 hover:bg-blue700 focus:outline-none focus:ring focus:ring-blue500 focus:ring-opacity-50"
                        >
                            Get Simulation
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}