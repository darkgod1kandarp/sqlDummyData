# sqlDummyData 

- Generate dummy data for SQL tables
## Installation
``` bash
npm i sql-dummy-data 
```
```
yarn add sql-dummy-data
```
## Import
``` JavaScript
//commonjs
const sqlDummyData = require('sql-dummy-data');
```
## Usage
```JavaScript 


const numberOfRows = 10;
const tables = {
	table1: {
		column: ['open source', 'down source', 'lolipop'],
		primaryKey: ['loop'],
	},
	table2: {
		column: ['rushabh'],
		foreignKey: ['gazab', 'table1', 'down source'],
		foreignPrimarykey: ['kirito', 'table1', 'loop'],
	},
	table3: {
		foreignKey: ['laand', 'table1', 'lolipop', 'price', 'table2', 'rushabh'],
	},
};
const dataSize = { 'open source': 56, 'down source': 89 };
const datatype = {
	'open source': 'varchar',
	lolipop: 'int',
	'down source': 'varchar',
	rushabh: 'float',
	loop: 'int',
	kirito: 'varchar',
};
sqlDummyData(numberOfRows, tables, dataSize, datatype); //This will generate dummy data

```
## Props
### tables 

```javaScript
{
	[tableName:string]:{
		column:[columnName(string)],// Array of columns name

		primaryKey:[columnName(string)],// Array of primaryKey
		
		
		foreignPrimarykey:[[columnName],[refTableName],[refColumnName],...],// Array of foreign Primary key column  

		foreignKey:[[columnName],[refTableName],[refColumnName],...]//Array of foreignKeys

	}
}

```

### datatype
```javaScript

datatype ={columnName(string):dataType of that column(string)}


```

### dataSize

```

dataSize = {columnName(string):datasize of that column(string)}

```
### numberOfRows
```
numberOfRows (integer)

```


