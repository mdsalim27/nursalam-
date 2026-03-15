

import { motion } from "framer-motion";
import label0 from "../assets/New folder/label0.jpeg"
import label1 from "../assets/New folder/label1.jpeg"
import label2 from "../assets/New folder/label2.jpeg"
import label3 from "../assets/New folder/label3.png"

const products = [
    { id: 1, name: "Product 1", img: label0, },
    { id: 2, name: "Product 2", img: label1, },
    { id: 3, name: "Product 3", img: label2, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 1, name: "Product 1", img: label0, },
    { id: 2, name: "Product 2", img: label1, },
    { id: 3, name: "Product 3", img: label2, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
    { id: 3, name: "Product 3", img: label3, },
  
];

const Animation = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -100 }}   // start from left side
                    whileInView={{ opacity: 1, x: 0 }} // animate to position
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }} // stagger animation
                    className="bg-gray-100 rounded-xl shadow-lg p-4"
                >
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                </motion.div>
            ))}
            <button>button</button>
        </div>
    );
};

export default Animation;