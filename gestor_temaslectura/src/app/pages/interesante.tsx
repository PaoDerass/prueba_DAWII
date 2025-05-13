import { useContextTema } from '../Context/ProviderTema'
import Link from 'next/link'

export default function Interesantes() {
    const { temasInteresantes, marcarInteresante } = useContextTema()

    return (
        <div style={{ padding: '20px' }}>
            <h1>Pantalla Interesantes</h1>
            
            <Link href="/">
                <button style={{ margin: '10px 0', padding: '8px' }}>Volver</button>
            </Link>

            {temasInteresantes.length === 0 ? (
                <p>No hay temas interesantes seleccionados</p>
            ) : (
                <div>
                    {temasInteresantes.map(tema => (
                        <div key={tema.id} style={{ 
                            margin: '10px 0', 
                            padding: '10px', 
                            border: '1px solid #ddd',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <span>{tema.titulo}</span>
                            <button 
                                onClick={() => marcarInteresante(tema.id)}
                                style={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 10px'
                                }}
                            >
                                Interesante
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}