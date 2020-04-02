import React from 'react';
import person from '../person.png';

export default function User(props) {
  const { name, role, department, email, phone } = props.user;
  return (
      // React Fragments lets components return multiple elements
    <React.Fragment>
      <td>
        <div className='card border-0'>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img src={person} className='card-img' alt='...' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h6 className='card-title my-1'>{name}</h6>
                <p className='card-text'>{role}</p>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>{department}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </React.Fragment>
  );
}
