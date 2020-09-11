import React from 'react'
import { CharacterItem } from './CharacterItem'
import { useFetch } from '../hooks/useFetch'

export const CharacterGrid = ({ name='' }) => {

    const {data:characters,loading} = useFetch(name)

    return (
        <> {(loading) && <div className="alert alert-info"> Loading...</div>}
        <div className="row row-cols-1 row-cols-md-2">

            { (characters!==null)
                ?  
                    characters.map(cha => (
                    <CharacterItem 
                        cha= {cha}
                        key={cha.id}
                    />
                    ))
                : <div className="alert alert-warning"> Character not found</div>
                    
            }
        </div>
        </>
    )
}