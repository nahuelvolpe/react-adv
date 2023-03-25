import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
}

export function ProductCard({ children, product, className, style, onChange }: Props) {
    
    const { counter, increaseBy } = useProduct({ onChange, product });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${styles.productCard} ${ className }` }
                style={style}
            >
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
        
    )
}