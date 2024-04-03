// MyComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDataSize } from '../store/actions';

const MyComponent = () => {
    const dataSize = useSelector(state => state.dataSize);
    const dispatch = useDispatch();

    const handleDataSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        dispatch(setDataSize(newSize));
    };

    return (
        <div>
            <h1>Data Size Selector</h1>
            <select value={dataSize} onChange={handleDataSizeChange}>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
            </select>
        </div>
    );
}
export default MyComponent;
