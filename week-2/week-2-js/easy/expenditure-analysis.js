/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let dict={};
  for(let i in transactions){
    console.log(transactions[i].price);
    dict[transactions[i].category]=(dict[transactions[i].category]||0)+transactions[i].price;
    console.log(dict[transactions[i].category]);
  }
  let arr=[];
  for(let i in dict){
    arr.push({
      category:i,
      totalSpent:dict[i]
    })
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
// Yes, you can use an object in JavaScript as a dictionary to store key-value pairs.
// For example:
// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: 'Clothing',
//     itemName: 'T-Shirt',
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: 'Electronics',
//     itemName: 'Headphones',
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: 'Clothing',
//     itemName: 'Jeans',
//   },
// ];



// const dictionary = {};
// dictionary[transactions[0].category] = transactions[0].price;

// // dictionary['key2'] = 'value2';

// for(key in dictionary){
//     console.log(key, dictionary[key]);
// } // { key1: 'value1', key2: 'value2' }
