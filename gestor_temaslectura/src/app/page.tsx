import { useContextTema } from './Context/ProviderTema';
import Link from 'next/link';

export default function Home() {
    const { temas, marcarInteresante, temasInteresantes } = useContextTema()

    return (
        <div style={{ padding: '20px' }}>
            <h1>Pantalla Principal</h1>
            
            <Link href="/interesantes">
                <button style={{ margin: '10px 0', padding: '8px' }}>
                    Ver temas interessantes ({temasInteresantes.length})
                </button>
            </Link>

            <div>
                {temas.map(tema => (
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
                                backgroundColor: tema.interesante ? 'green' : 'gray',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px'
                            }}
                        >
                            {tema.interesante ? 'Interesante' : 'No interesante'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}