import React from 'react';
import { assignRandomDepartment, assignRole } from '../employees';
import User from './User';

export default function TableBody({ users }) {
  return (

    // React Fragments lets components return multiple elements
    <React.Fragment>
      <tbody>
        {users.map(user => {
          if (!user.department && !user.role) {
            user.department = assignRandomDepartment();
            user.role = assignRole(user.department);
          }
          return (
            <tr key={user.id}>
              <User user={user} />
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
