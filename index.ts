import { uid } from "uid";

//typedeclaration
type stringNumber = string|number;



// //variable
let numberGeneration:number; 
let textGeneration:string;
let numberOfRows:number;



// function

let text = (size:number):string => {
    textGeneration = uid(size);
    return textGeneration;
  };

let inty = ():number => {

   numberGeneration = Math.floor(Math.random() * 100000 + 1);
  
    return numberGeneration;
  };

let floaty =():number =>{
    const numberGeneration = Math.random() * 100000 + 1;
  
    return numberGeneration;
} 
let arrayRandomlySelected=(arr:any):any=>{
    const uniqueElement = arr[Math.floor(Math.random() * arr.length)];
  
    return uniqueElement;
}
/**
 * 
 * @param numberOfRows 
 * @param tables 
 * @param dataSize 
 * @param datatype 
 * @returns dummyData
 */


const sqlDummyData = (numberOfRows:number,tables:{[table:string]:{[name:string]:Array<string>}},dataSize:{[datasize:string]:number},datatype:{[dataType:string]:string})=>{

  var dictColumnKey:{[table:string]:string[] | number[]}={};
  let tableColumn:Array<string>;

let tableForeign:Array<string>;

let tablePrimary:Array<string>;

let foreignPrimary:Array<string>;

for (let i in tables) {

    tableColumn = tables[i].column;
  tableForeign = tables[i].foreignKey;
  tablePrimary =  tables[i].primaryKey;
  foreignPrimary =  tables[i].foreignPrimarykey;
  
  if (tableColumn != undefined) {

    for (let column = 0; column < tableColumn.length; column++) {
     
        dictColumnKey[`${i}_${tableColumn[column]}`] = [] ;

        const type = datatype[tableColumn[column]];
     
        if (type == "int") {
          
          for (let data = 0; data < numberOfRows; data++) {
            const number:number = inty();
            (dictColumnKey[`${i}_${tableColumn[column]}`] as number[]).push(number);
            
        }
       } else if ((type === "float")) {
          for (let data = 0; data < numberOfRows; data++) {
            var number = inty();
  
            (dictColumnKey[`${i}_${tableColumn[column]}`] as number[]).push(number);
          }
        } else {
            let size = dataSize[tableColumn[column]];
            
          for (let data = 0; data < numberOfRows; data++) {
              
            var dataString = text(size);
         
           ( dictColumnKey[`${i}_${tableColumn[column]}`] as string[]).push(dataString);
          }
        }
      }

 
    }

      if (tableForeign !== undefined) {

      
       
        for (let foreignKey = 0; foreignKey < tableForeign.length; foreignKey = foreignKey + 3) {
         
          var nextNumber = foreignKey+1;
         
          var table = tableForeign[nextNumber];
         
          nextNumber =  foreignKey+2;
          var columning = tableForeign[nextNumber];
          var array = dictColumnKey[`${table}_${columning}`];
        
          dictColumnKey[`${i}_${tableForeign[foreignKey]}`] = [];
          
          for(let end = 0; end<numberOfRows;end++){
         

              var dataGaining = arrayRandomlySelected(array);

              

            (dictColumnKey[`${i}_${tableForeign[foreignKey]}`] as Array<string| number>).push(dataGaining);
          
        
             
          }
       
            
         

        }

      }
   
      if(tablePrimary !== undefined){
 
        for (let column = 0; column < tablePrimary.length; column++) {
            dictColumnKey[`${i}_${tablePrimary[column]}`] = [];
            const type = datatype[`${tablePrimary[column]}`];
          
            

            if (type == "int") {

          
              
              for (let data = 0; data < numberOfRows; data++) {
                var number = inty();
                  

                while ((dictColumnKey[`${i}_${tablePrimary[column]}`] as number[]).indexOf(number)>=0){
                  
                number = inty();
                
                }
               
                (dictColumnKey[`${i}_${tablePrimary[column]}`] as number[]).push(number);

                

              }
            } else if ((type === "float")) {
              for (let data = 0; data < numberOfRows; data++) {
                var number = inty();
                while ((dictColumnKey[`${i}_${tablePrimary[column]}`] as number[]).indexOf(number)>=0){
                    
                
                number = inty();

  
                }
                (dictColumnKey[`${i}_${tablePrimary[column]}`] as number[]).push(number);
              }
            } else {
              let size = dataSize[tableColumn[column]];
            
              for (let data = 0; data < numberOfRows; data++) {
                var dataString = text(size);
                while ((dictColumnKey[`${i}_${tablePrimary[column]}`] as string[]).indexOf(dataString)>=0){
                   
                    dataString = text(size);
                    
                    }
                    (dictColumnKey[`${i}_${tablePrimary[column]}`] as string[]).push(dataString);
                
              }

             
               
            }

            

          }

         
      }

      if (foreignPrimary !== undefined){
          
        for (let foreignKey = 0; foreignKey < foreignPrimary.length; foreignKey = foreignKey + 3) {
         
          var nextNumber = foreignKey+1;
         
          var table = foreignPrimary[nextNumber];
         
          nextNumber =  foreignKey+2;
          var columning = foreignPrimary[nextNumber];
          var array = dictColumnKey[`${table}_${columning}`];
  
          dictColumnKey[`${i}_${foreignPrimary[foreignKey]}`] = [];
          
  

          for(let end = 0; end<numberOfRows;end++){
              var dataGaining = arrayRandomlySelected(array);
                             while ( (dictColumnKey[`${i}_${foreignPrimary[foreignKey]}`] as Array<string|number>).indexOf(dataGaining)>=0 ){
                     dataGaining = arrayRandomlySelected(array);
                     
                }
                (dictColumnKey[`${i}_${foreignPrimary[foreignKey]}`]  as Array<string| number>).push(dataGaining);
                
                
             
          }
        
       
          


        }
         
        
    
      }
  
     

}

return dictColumnKey

}

export = sqlDummyData;