import { Item } from '../types/Item';

export const getCurrenteMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
} 

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[1].date.getFullYear() === parseInt(year) &&
            (list[1].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }
    
    return newList;
}