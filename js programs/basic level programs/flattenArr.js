//flatten the given array

function flattenArray(data) {
    const initialValue = [];
  
    return data.reduce((total, value) => {
      // if the value is an array then recursively call reduce
      // if the value is not an array then just concat our value
      return total.concat(Array.isArray(value) ? flattenArray(value) : value);
    }, initialValue);
  }

  const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
  console.log(flattenArray(numArray))

  