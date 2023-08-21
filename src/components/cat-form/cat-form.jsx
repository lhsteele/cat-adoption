import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './cat-form.css';

const CatForm = ({ onSubmit, defaultName = '' }) => {
    const [age, setAge] = useState(1);
    const [name, setName] = useState(defaultName);
    const [imageUrl, setImageUrl] = useState('');
    const [microchipped, setMicrochipped] = useState(false);
    const [vaccinated, setVaccinated] = useState(false);
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit)
            onSubmit({
                age,
                name,
                imageUrl,
                microchipped,
                vaccinated,
                description,
            });
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    return (
        <form onSubmit={handleSubmit} className="cat-form">
            <label htmlFor="name">Name</label>
            <input id="name" onChange={handleNameChange} value={name} />
            <label htmlFor="imageUrl">Image Url</label>
            <input
                id="imageUrl"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
            />
            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                onChange={(e) => setAge(Number(e.target.value))}
                value={age}
            />
            <label htmlFor="microchipped">Microchipped</label>
            <input
                type="checkbox"
                id="microchipped"
                onChange={(e) => setMicrochipped(e.target.checked)}
                value={microchipped}
            />
            <label htmlFor="vaccinated">Vaccinated</label>
            <input
                type="checkbox"
                id="vaccinated"
                onChange={(e) => setVaccinated(e.target.checked)}
                value={vaccinated}
            />
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={handleDescriptionChange} value={description} />
            <button type="submit">Add Cat</button>
        </form>
    );
};

CatForm.propTypes = {
    onSubmit: PropTypes.func,
    defaultName: PropTypes.string,
};

export default CatForm;
