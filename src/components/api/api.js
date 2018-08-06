 function transformApiData(apiResponse) {
   return {
     name: apiResponse.name,
     id: apiResponse.id,
     spriteImgUrl: apiResponse.sprites.front_shiny,
     type: apiResponse.types[0].type.name
   };
 }

 export default transformApiData;