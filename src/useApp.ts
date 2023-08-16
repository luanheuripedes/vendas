import { useEffect, useState } from 'react';

export const useApp = () => {
    const [value, setValue] = useState('ABC');

    useEffect(() => {
        console.log('Entrou pelo useEffect');
    }, [value]);

    const handleOnPress = () => {
        console.log('Clicou no botão!');
        setValue('def');
    };

    return { value, handleOnPress };
};
