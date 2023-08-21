import React from 'react';
import CatForm from '../cat-form/cat-form';

const AddCatPage = () => {
    const onSubmitForm = async (catData) => {
        console.log('this is the cat data', catData);
    };
    return (
        <div>
            <h1>Add a New Cat!</h1>
            <CatForm onSubmit={onSubmitForm} />
        </div>
    );
};

export default AddCatPage;
