import './Home.css';
import farmaciasImg from '../../../assets/farmacias-pequenas.jpg';

function Home() {
    return (
        <>
            <div className="h-screen">
                <div className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-500 flex justify-center">
                    <div className='container grid grid-cols-2 text-white'>
                        <div className="flex justify-center p-6">
                            <img src={farmaciasImg} alt="Farmácias" />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center py-4">
                            <h2 className='text-4xl font-bold '>Seja bem vindo!</h2>
                            <br />
                            <p> Bem-vindo à nossa farmácia, o seu destino confiável para todas as suas necessidades de saúde e bem-estar. Na nossa farmácia, esforçamo-nos por proporcionar um ambiente acolhedor onde cada cliente se sinta valorizado e ouvido.
                                A nossa equipa é composta por farmacêuticos altamente qualificados e profissionais de saúde comprometidos em oferecer o melhor cuidado possível. Estamos aqui para responder às suas perguntas, oferecer conselhos especializados e ajudá-lo a encontrar os produtos e medicamentos que melhor se adaptem às suas necessidades individuais.
                                Nas nossas prateleiras, encontrará uma ampla seleção de medicamentos de venda livre, produtos para cuidados com a pele, vitaminas e suplementos, bem como uma variedade de produtos para a saúde e bem-estar de toda a família. Trabalhamos com os melhores fornecedores e marcas confiáveis para garantir a qualidade e eficácia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
