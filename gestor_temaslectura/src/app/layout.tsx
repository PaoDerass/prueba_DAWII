import type { AppProps } from 'next/app'
import ProviderTema from './Context/ProviderTema'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ProviderTema>
            <Component {...pageProps} />
        </ProviderTema>
    )
}

export default MyApp
