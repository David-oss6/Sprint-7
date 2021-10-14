import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export const Usuario = (props) => {
    let isWeb = props.isWeb
    let isSeo = props.isSeo
    let isAds = props.isAds
    let valorP = props.valorP
    let valorI = props.valorI
    let history = useHistory()

    useEffect(() => {
        handleHistory()
    }, [isWeb, isSeo, isAds, valorI, valorP]);

    function handleHistory() {
        history.push({ search: `?web=${isWeb}&numPag=${valorP}&numIdiom=${valorI}&seo=${isSeo}&Ads=${isAds}` })
    }
    return (
        <div>

        </div>
    )
}
