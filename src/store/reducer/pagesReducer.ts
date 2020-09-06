import { IAction } from "../../layout/model/action";
import * as actionsType from '../action/type';
import { IStandardPage, IPageContent } from "../../layout/model/standardPage";
import { IGrid } from "../../layout/model/grid";

const standardPages = (state: IStandardPage[] = [], action: IAction) => {
    switch(action.type) {
        case actionsType.GET_STANDARD_PAGES:
            return action.payload;
        case actionsType.GET_BLOCK_CONTENTS:
            return state.map(s => {
                if(s.id === action.payload.pageRef) {
                    if(s.pageContent === undefined)
                        s.pageContent = []; 

                    s.pageContent.push(action.payload.block);
                } 

                return s;
            });
            case actionsType.GET_GRID_CONTENTS:
                return state.map(s => {
                    if(s.pageContent !== undefined) {
                        
                        const grids = s.pageContent.filter(x => x.type === "grid");
                        console.log(grids, s.pageContent);
                        if(grids.length > 0) {
                            const grid = grids.filter(x => x.id === action.payload.pageRef)[0];
                            if(grid.data.gridContent === undefined)
                                grid.data.gridContent = []; 
                            
                            const block: IPageContent = action.payload.block;
                            
                            const hasGrid = (grid.data.gridContent!.filter((x: IGrid) => x.id === block.id).length !== 0);
                            
                            if(!hasGrid)
                                grid.data.gridContent.push(block);
                        } 
                    }
    
                    return s;
                });
        default:
            return state;
    }
}

export default standardPages;