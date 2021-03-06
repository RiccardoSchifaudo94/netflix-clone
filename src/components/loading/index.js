import React, { Component } from 'react';
import { ReleaseBody, Spinner, LockBody , Picture} from './styles/loading'

export default function Loading({src, ...restProps}) {
        return (
            <Spinner {...restProps}>
                <LockBody/>
                <Picture src={`images/users/${src}.png`}/>
            </Spinner>
        )
}

Loading.ReleaseBody = function LoadingRealeaseBody(){
    return <ReleaseBody/>
}