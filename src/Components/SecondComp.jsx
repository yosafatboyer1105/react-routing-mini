import { useNavigate } from "react-router-dom";

const SecondComp = () => {
    const navigate = useNavigate()

    return(
        <>
        <h3>INI HALAMAN ABOUT TAPI VIA ROUTING</h3>
        <button onClick={() => navigate('/')}>BALIK KE HALAMAN HOME LAGI KUY</button>
        </> 
    ); 
}

export default SecondComp