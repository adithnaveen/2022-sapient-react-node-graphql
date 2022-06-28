import React from 'react';

const Btn1 = ({ caption, handler }) => (<button className='btn btn-danger' onClick={handler}>{caption}</button>);

export default Btn1;