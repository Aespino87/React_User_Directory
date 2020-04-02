// Brings in user data from hosted data
const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Assigns departments randomly to employees in db
  const assignRandomDepartment = () => {
    const departments = [
      'Engineering',
      'Sales',
      'Marketing',
      'Design',
      'Finance',
      'Accounting'
    ];
  
    return departments[Math.floor(Math.random() * departments.length)];
  };
  // Assigns Associated role to assigned department
  const assignRole = department => {
    switch (department) {
      case 'Engineering':
        return 'Software Engineer';
      case 'Accounting':
        return 'Accountant';
      case 'Sales':
        return 'Sales Consultant';
      case 'Marketing':
        return 'Communication Manager';
      case 'Finance':
        return 'Actuary';
      default:
        return 'Product Designer';
    }
  };
  // Runs through employee listing from user input regardless of caseing and sorts table accordingly
  const searchEmployeeByName = (employeeList, targetName) => {
    if (targetName === '') return employeeList;
      // eslint-disable-next-line
    return employeeList.filter(emp => {
      if (emp.name.toLowerCase().includes(targetName.toLowerCase())) {
        return emp;
      }
    });
  };
  
  
  // Resorts table by selection mdae by filter
  const sortBySelection = (employeeList, selection) => {
    return [...employeeList].sort((a, b) => {
      const selectionA = a[selection].toLowerCase();
      const selectionB = b[selection].toLowerCase();
      return selectionA > selectionB ? 1 : selectionA < selectionB ? -1 : 0;
    });
  };
  
  const filterBySelection = (employeeList, label, selection) => {
    return employeeList.filter(emp => {
      return emp[label.toLowerCase()] === selection;
    });
  };
  
  export {
    getUsers,
    assignRandomDepartment,
    assignRole,
    searchEmployeeByName,
    sortBySelection,
    filterBySelection
  };
  