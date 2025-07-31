import { ImageResponse } from 'next/og'

// Configuração do ícone
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Gerar ícone dinâmico (opcional) ou usar estático
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: '#1e1e1e',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#007acc',
                    fontFamily: 'monospace',
                }}
            >
                VS
            </div>
        ),
        {
            ...size,
        }
    )
}
