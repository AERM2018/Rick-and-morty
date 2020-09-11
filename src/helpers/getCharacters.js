

export const getCharacters = async (name) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const peticion = await fetch(url);
    const { results } = await peticion.json();
    const characters = results.map(cha => {
        return {
            id: cha.id,
            name: cha.name,
            status: cha.status,
            species: cha.species,
            origin: cha.origin.name,
            location: cha.location.name,
            image: cha.image,
        }
    });

    return characters;

};
