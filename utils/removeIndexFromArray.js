const RemoveFromArrayByIndex = (arrayData,indexId) =>{
    if(arrayData.length > 0){
        const filteredItems = arrayData.slice(0, indexId).concat(arrayData.slice(indexId + 1, arrayData.length))
        return filteredItems
    }else{
        return []
    }
}

export default RemoveFromArrayByIndex;