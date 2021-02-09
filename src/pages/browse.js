import React from 'react';
import { useContent } from "../hooks";
import selectionFilter  from "../utils/selection-filter";
import  { BrowseContainer }  from "../containers/browse";

export default function Browse() {
        //series of films and slide them
        const {series} = useContent('series');
        const {films} = useContent('films');
       
        //slides 
        const slides = selectionFilter({series, films});

        //console.log(series);
        //console.log(films);
        //   console.log(slides);
        return (
            <BrowseContainer slides={slides} />
        )
    
}
