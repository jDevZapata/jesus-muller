import Image from 'next/image';
import Profile from '@/assets/profile.png'
import './presentation.css';

const Presentation = () => {
    return (
        <section className="presentation">
            <h1 className='centered'>Frontend Developer</h1>
            <div className='presentation-container'>
                <div className='description'>
                    <p>
                        Hola! mi nombre es Jesús y soy desarrollador Frontend con más de
                        12 años de experiencia, graduado en la Tecnicatura Universitaria
                        de Analista de Sistemas de la Universidad John F. Kennedy.
                    </p>
                    <p>
                        Decicidí crear este sitio web para todas las personas que deseen conocer más detalles sobre mi experiencia profesional.
                    </p>
                    <p className='phrase'>
                        &quot;El éxito no es la clave de la felicidad. La felicidad es la
                        clave del éxito. Si amas lo que haces, tendrás éxito.&quot; - Albert
                        Schweitzer
                    </p>
                </div>
                <div className='img'>
                    <Image src={Profile} alt="foto de perfil" className='rounded' height={170} width={180}/>
                </div>
            </div>
        </section>
    );
}

export default Presentation;