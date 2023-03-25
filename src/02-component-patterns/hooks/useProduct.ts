import { useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductProps {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
}

export const useProduct = ({ onChange, product }: useProductProps) => {
    
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max( counter + value, 0)

        setCounter( newValue)

        onChange && onChange({ count: newValue, product });
    }

    return {
        counter,
        increaseBy
    }
}