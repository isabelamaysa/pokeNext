import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image
                        src="/image/pokeball.png"
                        width="30"
                        height="30"
                        alt="PokeNext"
                    />
                   <h1>PokeNext</h1> 
                </div> 

                <div className={styles.nav}>
                    <ul className={styles.nave}>
                        <li >
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Sobre
                            </Link>
                        </li>
                    </ul>
                </div>  
            </nav>
            
        </>
    )
}