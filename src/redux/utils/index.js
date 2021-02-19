
export const createSelectArray = (object) => {
  let selectData;
  !Array.isArray(object) 
    ? selectData = Object.keys(object)
    : selectData = [...object];
  selectData = selectData.map((item, i) => {
    return item === "object" ? item : { label: item, value: item, key: i, inventory: {} };
  });
  return selectData;
}

export const calculateItemTotals = (items, inventory) => {
  const defaults = { cubic_ft_total: 0, cubic_m_total: 0, weight_kg_total: 0 }
  const totals = inventory.reduce((acc, curr) => {
    const item = items.filter(item => item._id === curr.item)[0];
    if (item) {
      acc.cubic_ft_total += (item.cubic_ft * curr.quantity);
      acc.cubic_m_total += (item.cubic_m * curr.quantity);
      acc.weight_kg_total += (item.weight_kg * curr.quantity);
    }
    return acc;
  }, defaults);
  return totals;
}

export const checkResponseData = (response) => {
  if (response instanceof Error) {
    let ex = response;
    if (ex.response) {
      let responseMessage = ex.response.data.description || ex.response.data.msg;
      if (responseMessage) {
        let error = new Error(responseMessage);
        error.response = ex.response;
        throw error;
      }
    } else {
      console.log(ex);
    }
    throw ex;
  } else if (typeof response.data !== 'object') {
    let error = new Error('Invalid Content Type Returned');
    error.response = response;
    throw error;
  } else if (response.data.status === "error") {
    let error = new Error(response.data.description || response.data.msg);
    error.response = response;
    throw error;
  }
  return response.data;
}

export const successCallback = (successTitle, successMessage, func) => {
  return () => { 
    if (func) func();
  } 
}

export const errorCallback = (errorTitle) => {
  return (err) => {
    return err instanceof Error ? err.message : err;
  }
}

export const buildCustomerReference = (customers) => {
  let customerReference = {
    refToCustomer: {},
    customerToRef: {}
  };
  customers.forEach(customer => {
    customerReference.refToCustomer[customer._id] = `${customer.firstName} ${customer.lastName}`;
    customerReference.customerToRef[`${customer.firstName} ${customer.lastName}`] = customer._id;
  });
  return customerReference;
}

export const formatUsersToContacts = (users, current_user_id) => {
  const contacts = users.map(user => {
      return ({
        id: user._id,
        lastSeenDate: "Last seen today 13:24",
        name: `${user.first_name} ${user.last_name}`
      })
    });
    // .filter(contact => contact.id === current_user_id); // filter to temporarily restric users to knowledge bot
  contacts.unshift({
    id: "kb1",
    lastSeenDate: "Last seen always",
    name: 'Knowledge Bot'
  });
  const currentUser = contacts.find(contact => contact.id === current_user_id);
  return {contacts, currentUser};
}