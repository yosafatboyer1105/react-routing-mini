import { useNavigate } from 'react-router-dom'

const FirstComp = () => {
    const navigate = useNavigate()

    return(
        <>
        <h3>INI HALAMAN HOMEPAGE TAPI VIA ROUTING</h3>
        <button onClick={() => navigate('/about')}>KE HALAMAN ABOUT </button>
        </>
    )
}

export default FirstComp