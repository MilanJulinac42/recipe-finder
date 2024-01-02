"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
    useEffect(() => {
        console.log("Hello from the client!");
        const recep = axios.get(
            "https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=d3aafcee3b5c4ad792ed8b93bc3da921"
        );

        recep.then((response) => {
            console.log(response.data);
        });
    }, []);
    return <main className={styles.main}></main>;
}
