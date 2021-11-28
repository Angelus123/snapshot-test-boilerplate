import React from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Products = ({ items = [] }) => {
    if (items.length <= 0) {
        return <div></div>;

    } else {
        return <div>
            {items.map((item, index) => {
                return <h4>{item} </h4>
            })}
        </div>
    }
    
}

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;
// #endregion

export default Products;